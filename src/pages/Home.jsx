import { BUSINESS, WHATSAPP_URL } from '../config/business'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import heroImage from '../assets/588522761_1277704574403400_700824699880070196_n - Copy (2).webp'
import heroImage1024 from '../assets/588522761_1277704574403400_700824699880070196_n - Copy (2)-1024.webp'
import heroImage768 from '../assets/588522761_1277704574403400_700824699880070196_n - Copy (2)-768.webp'
import electricalFinishingImage from '../assets/electrical-finishing-jeddah.webp'
import lightingImage from '../assets/images (8).webp'
import ceilingLightingImage from '../assets/images (9).webp'
import electricalInstallationImage from '../assets/images (15).webp'
import wiringImage from '../assets/images (20)_upscayl_4x_upscayl-standard-4x - Copy.webp'
import interiorLightingImage from '../assets/images (17).webp'

const phoneNumber = BUSINESS.telephone
const whatsappUrl = WHATSAPP_URL

const services = [
  {
    title: 'تأسيس الكهرباء',
    description:
      'أعمال تأسيس الكهرباء للمنازل وتجهيز نقاط الاستخدام وفق احتياج المنزل.',
    path: '/services/electrical-foundation',
  },
  {
    title: 'التمديدات الكهربائية',
    description:
      'تنفيذ أعمال التمديدات الكهربائية ضمن مراحل تشطيب المنزل.',
    path: '/services/electrical-wiring',
  },
  {
    title: 'نقاط الكهرباء والإنارة',
    description:
      'تجهيز وتركيب نقاط الكهرباء والإنارة بما يناسب الاستخدام اليومي.',
    path: '/services/lighting',
  },
  {
    title: 'المفاتيح والأفياش',
    description:
      'تركيب نقاط المفاتيح والأفياش ضمن أعمال التشطيب الكهربائي للمنزل.',
    path: '/services/electrical-finishing',
  },
]

const gallery = [
  {
    src: electricalFinishingImage,
    alt: 'تشطيبات كهربائية منزلية ونقاط كهرباء داخل منزل',
    width: 1024,
    height: 768,
  },
  {
    src: lightingImage,
    alt: 'إضاءة داخلية وتشطيب أسقف في منزل',
    width: 516,
    height: 387,
  },
  {
    src: ceilingLightingImage,
    alt: 'تصميم وتركيب الإضاءة الداخلية في الأسقف',
    width: 516,
    height: 387,
  },
  {
    src: electricalInstallationImage,
    alt: 'تمديدات وتجهيزات كهربائية أثناء أعمال التشطيب',
    width: 415,
    height: 739,
  },
  {
    src: wiringImage,
    alt: 'تمديدات كهربائية وتجهيز أسلاك داخل المبنى',
    width: 898,
    height: 1600,
  },
  {
    src: interiorLightingImage,
    alt: 'تشطيب إنارة داخلية في منزل',
    width: 335,
    height: 597,
  },
]

function normalizeRating(value) {
  const numericRating = Number(value)

  if (!Number.isFinite(numericRating)) {
    return 0
  }

  return Math.min(5, Math.max(0, Math.round(numericRating)))
}

function StarRating({ rating }) {
  const normalizedRating = normalizeRating(rating)

  return (
    <div
      className="review-stars"
      role="img"
      aria-label={`التقييم ${normalizedRating} من 5`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index < normalizedRating

        return (
          <span
            key={index}
            aria-hidden="true"
            className={filled ? 'is-filled' : ''}
          >
            ★
          </span>
        )
      })}
    </div>
  )
}

function Home() {
  const [reviews, setReviews] = useState([])
  const [reviewsLoading, setReviewsLoading] = useState(true)
  const [reviewsError, setReviewsError] = useState('')

  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')
  const [website, setWebsite] = useState('')

  const [submitLoading, setSubmitLoading] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    let cancelled = false

    async function loadReviews() {
      try {
        const response = await fetch('/api/reviews')

        if (!response.ok) {
          throw new Error('تعذر تحميل التقييمات.')
        }

        const data = await response.json()

        if (!cancelled) {
          setReviews(Array.isArray(data.reviews) ? data.reviews : [])
        }
      } catch {
        if (!cancelled) {
          setReviewsError('تعذر تحميل التقييمات حاليًا.')
        }
      } finally {
        if (!cancelled) {
          setReviewsLoading(false)
        }
      }
    }

    loadReviews()

    return () => {
      cancelled = true
    }
  }, [])

  async function handleReviewSubmit(event) {
    event.preventDefault()

    setSubmitMessage('')
    setSubmitError('')

    if (website.trim()) {
      setSubmitError('تعذر إرسال التقييم.')
      return
    }

    setSubmitLoading(true)

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          rating,
          comment,
          website,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error || 'تعذر إرسال التقييم حاليًا.',
        )
      }

      if (data.review) {
        setReviews((currentReviews) => [
          data.review,
          ...currentReviews,
        ])
      }

      setName('')
      setRating(5)
      setHoverRating(0)
      setComment('')
      setWebsite('')

      setSubmitMessage('تم إرسال تقييمك بنجاح، شكرًا لك.')
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'تعذر إرسال التقييم حاليًا.',
      )
    } finally {
      setSubmitLoading(false)
    }
  }

  const displayedRating = hoverRating || rating

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">نور جدة للكهرباء</span>

            <h1>كهربائي منازل في جدة لأعمال التشطيب الكهربائي</h1>

            <p className="hero-description">
              تنفيذ أعمال تشطيب الكهرباء للمنازل في جميع مناطق جدة،
              من التأسيس والتمديدات إلى نقاط الكهرباء والإنارة
              والمفاتيح والأفياش.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={`tel:${phoneNumber}`}
                aria-label={`الاتصال بنور جدة للكهرباء على الرقم ${phoneNumber}`}
              >
                اتصل الآن
              </a>

              <a
                className="button button-secondary"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="التواصل مع نور جدة للكهرباء عبر واتساب"
              >
                تواصل عبر واتساب
              </a>
            </div>

            <div
              className="hero-facts"
              aria-label="معلومات عن الخدمة"
            >
              <div>
                <strong>15 سنة</strong>
                <span>خبرة</span>
              </div>

              <div>
                <strong>جميع مناطق جدة</strong>
                <span>نطاق الخدمة</span>
              </div>

              <div>
                <strong>كل يوم</strong>
                <span>أيام العمل</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={heroImage768}
                width="768"
                height="576"
              />

              <source
                media="(max-width: 1199px)"
                srcSet={heroImage1024}
                width="1024"
                height="768"
              />

              <img
                className="hero-image"
                src={heroImage}
                alt="تشطيب كهربائي وإضاءة داخلية لمنزل"
                width="1600"
                height="1200"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">الخدمات</span>

            <h2>خدمات الكهرباء المنزلية في جدة</h2>

            <p>
              أعمال كهربائية مرتبطة بمراحل تأسيس وتشطيب المنزل،
              مع إمكانية التواصل مباشرة للاستفسار عن احتياجك.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <Link
                className="service-card"
                key={service.title}
                to={service.path}
                aria-label={`عرض تفاصيل خدمة ${service.title}`}
              >
                <div
                  className="service-number"
                  aria-hidden="true"
                >
                  ✓
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="service-card-link">
                  عرض تفاصيل الخدمة
                  <span aria-hidden="true">←</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="center-action">
            <Link className="text-link" to="/services">
              مشاهدة جميع تفاصيل الخدمات
              <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">معرض الصور</span>

            <h2>نماذج وصور لأعمال الكهرباء والإنارة</h2>

            <p>
              مجموعة من الصور المرتبطة بأعمال الكهرباء والتشطيب
              والإضاءة المنزلية.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((image) => (
              <figure
                className="gallery-item"
                key={image.src}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">آراء العملاء</span>

            <h2>شاركنا تجربتك مع نور جدة للكهرباء</h2>

            <p>
              يمكنك مشاركة تقييمك للخدمة، وسنظهر التقييمات المنشورة
              للزوار في الموقع.
            </p>
          </div>

          <div className="reviews-layout">
            <div className="reviews-list">
              <h3>التقييمات</h3>

              {reviewsLoading && (
                <p className="reviews-status">
                  جارٍ تحميل التقييمات...
                </p>
              )}

              {!reviewsLoading && reviewsError && (
                <p className="reviews-status reviews-status-error">
                  {reviewsError}
                </p>
              )}

              {!reviewsLoading &&
                !reviewsError &&
                reviews.length === 0 && (
                  <p className="reviews-status">
                    لا توجد تقييمات منشورة حتى الآن. كن أول من يشارك
                    تجربته.
                  </p>
                )}

              {!reviewsLoading &&
                !reviewsError &&
                reviews.length > 0 && (
                  <div className="reviews-items">
                    {reviews.map((review) => (
                      <article
                        className="review-card"
                        key={review.id}
                      >
                        <div className="review-card-header">
                          <div>
                            <h4>{review.name}</h4>
                            <StarRating rating={review.rating} />
                          </div>
                        </div>

                        <p>{review.comment}</p>
                      </article>
                    ))}
                  </div>
                )}
            </div>

            <div className="review-form-wrapper">
              <h3>أضف تقييمك</h3>

              <form
                className="review-form"
                onSubmit={handleReviewSubmit}
              >
                <div className="form-field">
                  <label htmlFor="review-name">
                    الاسم
                  </label>

                  <input
                    id="review-name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    maxLength={60}
                    autoComplete="name"
                    required
                  />
                </div>

                <fieldset className="rating-fieldset">
                  <legend>
                    التقييم: {displayedRating} من 5
                  </legend>

                  <div
                    className="rating-options"
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    {[1, 2, 3, 4, 5].map((value) => {
                      const isFilled = value <= displayedRating

                      return (
                        <label
                          className={`rating-option${
                            isFilled ? ' is-filled' : ''
                          }`}
                          key={value}
                          onMouseEnter={() =>
                            setHoverRating(value)
                          }
                        >
                          <input
                            type="radio"
                            name="rating"
                            value={value}
                            checked={rating === value}
                            onChange={() => {
                              setRating(value)
                              setHoverRating(0)
                            }}
                          />

                          <span
                            className="rating-star"
                            aria-hidden="true"
                          >
                            ★
                          </span>

                          <span className="visually-hidden">
                            {value} من 5
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </fieldset>

                <div className="form-field">
                  <label htmlFor="review-comment">
                    التعليق
                  </label>

                  <textarea
                    id="review-comment"
                    name="comment"
                    value={comment}
                    onChange={(event) =>
                      setComment(event.target.value)
                    }
                    maxLength={500}
                    rows={5}
                    required
                  />
                </div>

                <div
                  className="review-honeypot"
                  aria-hidden="true"
                >
                  <label htmlFor="review-website">
                    الموقع الإلكتروني
                  </label>

                  <input
                    id="review-website"
                    name="website"
                    type="text"
                    value={website}
                    onChange={(event) =>
                      setWebsite(event.target.value)
                    }
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {submitMessage && (
                  <p
                    className="review-form-message review-form-message-success"
                    role="status"
                  >
                    {submitMessage}
                  </p>
                )}

                {submitError && (
                  <p
                    className="review-form-message review-form-message-error"
                    role="alert"
                  >
                    {submitError}
                  </p>
                )}

                <button
                  className="button button-primary review-submit"
                  type="submit"
                  disabled={submitLoading}
                >
                  {submitLoading
                    ? 'جارٍ الإرسال...'
                    : 'إرسال التقييم'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">خبرة وتواصل مباشر</span>

            <h2>كهربائي منازل في جدة لأعمال الكهرباء للمنازل</h2>

            <p>
              نور جدة للكهرباء يقدم خدمة كهربائي سكنية مستقلة في
              جميع مناطق جدة، مع خبرة تمتد إلى 15 سنة في مجال
              الكهرباء.
            </p>
          </div>

          <div className="benefits-list">
            <div>
              <strong>خبرة 15 سنة</strong>
              <span>خبرة عملية في مجال الكهرباء.</span>
            </div>

            <div>
              <strong>خدمة داخل جدة</strong>
              <span>الخدمة متاحة في جميع مناطق جدة.</span>
            </div>

            <div>
              <strong>تواصل مباشر</strong>
              <span>تواصل مباشرة عبر الاتصال أو واتساب.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home