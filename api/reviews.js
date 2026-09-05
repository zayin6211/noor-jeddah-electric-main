import crypto from "node:crypto";
import { sql } from "../src/lib/db.js";

const MAX_NAME_LENGTH = 60;
const MAX_COMMENT_LENGTH = 500;

const RATE_LIMIT_WINDOW_MINUTES = 10;
const RATE_LIMIT_MAX_REQUESTS = 5;

const ALLOWED_METHODS = ["GET", "POST"];

function sendJson(res, data, status = 200) {
  res.status(status).json(data);
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function containsUnsafeContent(value) {
  return /<[^>]*>|javascript\s*:|https?:\/\/|www\./i.test(value);
}

function isValidRating(value) {
  return Number.isInteger(value) && value >= 1 && value <= 5;
}

function getClientIdentifier(req) {
  const forwardedFor = req.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string" && forwardedFor.trim()) {
    return forwardedFor
      .split(",")[0]
      .trim();
  }

  const realIp = req.headers["x-real-ip"];

  if (typeof realIp === "string" && realIp.trim()) {
    return realIp.trim();
  }

  return "unknown";
}

function createRateLimitKey(req) {
  const clientIdentifier = getClientIdentifier(req);

  return crypto
    .createHash("sha256")
    .update(`reviews:${clientIdentifier}`)
    .digest("hex");
}

async function checkRateLimit(req) {
  const keyHash = createRateLimitKey(req);

  const result = await sql`
    INSERT INTO review_rate_limits (
      key_hash,
      window_started_at,
      request_count
    )
    VALUES (
      ${keyHash},
      NOW(),
      1
    )
    ON CONFLICT (key_hash)
    DO UPDATE SET
      request_count = CASE
        WHEN review_rate_limits.window_started_at
          <= NOW() - (${RATE_LIMIT_WINDOW_MINUTES} * INTERVAL '1 minute')
        THEN 1
        ELSE review_rate_limits.request_count + 1
      END,
      window_started_at = CASE
        WHEN review_rate_limits.window_started_at
          <= NOW() - (${RATE_LIMIT_WINDOW_MINUTES} * INTERVAL '1 minute')
        THEN NOW()
        ELSE review_rate_limits.window_started_at
      END
    RETURNING
      request_count,
      window_started_at
  `;

  const current = result[0];

  if (!current) {
    return {
      allowed: false,
      retryAfterSeconds: RATE_LIMIT_WINDOW_MINUTES * 60,
    };
  }

  if (current.request_count > RATE_LIMIT_MAX_REQUESTS) {
    const windowStartedAt = new Date(current.window_started_at).getTime();
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil(
        RATE_LIMIT_WINDOW_MINUTES * 60 -
          (Date.now() - windowStartedAt) / 1000,
      ),
    );

    return {
      allowed: false,
      retryAfterSeconds,
    };
  }

  return {
    allowed: true,
  };
}

export default async function handler(req, res) {
  if (!ALLOWED_METHODS.includes(req.method)) {
    return sendJson(
      res,
      {
        error: "الطريقة غير مسموحة.",
      },
      405,
    );
  }

  try {
    if (req.method === "GET") {
      const reviews = await sql`
        SELECT
          id,
          name,
          rating,
          comment,
          created_at
        FROM reviews
        ORDER BY created_at DESC
        LIMIT 50
      `;

      return sendJson(res, {
        reviews,
      });
    }

    const honeypot = normalizeText(req.body?.website);

    if (honeypot) {
      return sendJson(
        res,
        {
          error: "تعذر إرسال التقييم.",
        },
        400,
      );
    }

    const rateLimit = await checkRateLimit(req);

    if (!rateLimit.allowed) {
      if (rateLimit.retryAfterSeconds) {
        res.setHeader(
          "Retry-After",
          String(rateLimit.retryAfterSeconds),
        );
      }

      return sendJson(
        res,
        {
          error: "تم تجاوز عدد محاولات الإرسال. حاول مرة أخرى لاحقًا.",
        },
        429,
      );
    }

    const body = req.body ?? {};

    const name = normalizeText(body.name);
    const comment = normalizeText(body.comment);
    const rating = Number(body.rating);

    if (!name || name.length > MAX_NAME_LENGTH) {
      return sendJson(
        res,
        {
          error: `الاسم مطلوب وبحد أقصى ${MAX_NAME_LENGTH} حرفًا.`,
        },
        400,
      );
    }

    if (!isValidRating(rating)) {
      return sendJson(
        res,
        {
          error: "التقييم يجب أن يكون من 1 إلى 5.",
        },
        400,
      );
    }

    if (!comment || comment.length > MAX_COMMENT_LENGTH) {
      return sendJson(
        res,
        {
          error: `التعليق مطلوب وبحد أقصى ${MAX_COMMENT_LENGTH} حرفًا.`,
        },
        400,
      );
    }

    if (containsUnsafeContent(name) || containsUnsafeContent(comment)) {
      return sendJson(
        res,
        {
          error: "يرجى كتابة الاسم والتعليق بدون روابط أو أكواد.",
        },
        400,
      );
    }

    const existingReview = await sql`
      SELECT id
      FROM reviews
      WHERE LOWER(name) = LOWER(${name})
        AND LOWER(comment) = LOWER(${comment})
        AND rating = ${rating}
      LIMIT 1
    `;

    if (existingReview.length > 0) {
      return sendJson(
        res,
        {
          error: "تم إرسال هذا التقييم مسبقًا.",
        },
        409,
      );
    }

    const [review] = await sql`
      INSERT INTO reviews (
        name,
        rating,
        comment
      )
      VALUES (
        ${name},
        ${rating},
        ${comment}
      )
      RETURNING
        id,
        name,
        rating,
        comment,
        created_at
    `;

    return sendJson(
      res,
      {
        review,
      },
      201,
    );
  } catch (error) {
    console.error("Reviews API error:", error);

    return sendJson(
      res,
      {
        error: "حدث خطأ أثناء معالجة الطلب.",
      },
      500,
    );
  }
}