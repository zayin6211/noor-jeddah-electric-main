import { BUSINESS, WHATSAPP_URL } from '../config/business'

const phoneNumber = BUSINESS.telephone
const whatsappUrl = WHATSAPP_URL

function Contact() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">التواصل</span>

          <h1>تواصل مع كهربائي في جدة</h1>

          <p>
            للتواصل والاستفسار عن أعمال الكهرباء المنزلية، يمكنك
            الاتصال مباشرة أو التواصل عبر واتساب.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card contact-card--primary">
            <span className="contact-icon" aria-hidden="true">
              ☎
            </span>

            <h2>اتصال مباشر</h2>

            <p>
              الخيار الأسرع للتواصل والاستفسار عن احتياجك.
            </p>

            <a
              className="contact-number"
              href={`tel:${phoneNumber}`}
              aria-label={`الاتصال على ${phoneNumber}`}
            >
              {phoneNumber}
            </a>

            <a
              className="button button-primary"
              href={`tel:${phoneNumber}`}
            >
              اتصل الآن
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              وات
            </span>

            <h2>واتساب</h2>

            <p>
              يمكنك أيضًا التواصل مباشرة عبر واتساب.
            </p>

            <a
              className="button button-secondary"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="فتح واتساب للتواصل مع نور جدة للكهرباء"
            >
              فتح واتساب
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              جدة
            </span>

            <h2>منطقة الخدمة</h2>

            <p>
              الخدمة متاحة في جميع مناطق جدة.
            </p>

            <strong className="contact-highlight">
              جميع مناطق جدة
            </strong>
          </div>

          <div className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              15
            </span>

            <h2>الخبرة</h2>

            <p>
              خبرة في مجال الكهرباء تمتد إلى 15 سنة.
            </p>

            <strong className="contact-highlight">
              15 سنة خبرة
            </strong>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container contact-note">
          <h2>متى يمكن التواصل؟</h2>

          <p>
            العمل متاح كل يوم، ومعظم ساعات العمل تكون في الصباح.
          </p>

          <a
            className="button button-primary"
            href={`tel:${phoneNumber}`}
          >
            تواصل مباشرة
          </a>
        </div>
      </section>
    </main>
  )
}

export default Contact