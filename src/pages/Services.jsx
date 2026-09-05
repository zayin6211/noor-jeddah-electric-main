import { BUSINESS, WHATSAPP_URL } from '../config/business'

import { Link } from 'react-router-dom'

const phoneNumber = BUSINESS.telephone
const whatsappUrl = WHATSAPP_URL

const services = [
  {
    title: 'تأسيس الكهرباء',
    description:
      'أعمال تأسيس الكهرباء للمنازل وتجهيز نقاط الاستخدام ضمن مراحل البناء والتشطيب.',
    path: '/services/electrical-foundation',
    linkLabel: 'تفاصيل تأسيس الكهرباء',
  },
  {
    title: 'التمديدات الكهربائية',
    description:
      'تنفيذ أعمال التمديدات الكهربائية للمنازل ضمن أعمال التشطيب الكهربائي.',
    path: '/services/electrical-wiring',
    linkLabel: 'تفاصيل التمديدات الكهربائية',
  },
  {
    title: 'تشطيب الكهرباء',
    description:
      'أعمال تشطيب الكهرباء للمنازل وتجهيز النقاط النهائية للكهرباء والإنارة والمفاتيح والأفياش.',
    path: '/services/electrical-finishing',
    linkLabel: 'تفاصيل تشطيب الكهرباء',
  },
  {
    title: 'الإنارة',
    description:
      'تنفيذ أعمال نقاط وتركيب الإنارة ضمن مراحل تشطيب الكهرباء.',
    path: '/services/lighting',
    linkLabel: 'تفاصيل أعمال الإنارة',
  },
  {
    title: 'نقاط الكهرباء',
    description:
      'تجهيز وتركيب نقاط الكهرباء التي يحتاجها المنزل للاستخدام اليومي.',
    path: null,
    linkLabel: null,
  },
  {
    title: 'المفاتيح والأفياش',
    description:
      'تركيب وتجهيز نقاط المفاتيح والأفياش ضمن أعمال الكهرباء المنزلية.',
    path: null,
    linkLabel: null,
  },
  {
    title: 'إصلاح الأعطال الكهربائية',
    description:
      'فحص وإصلاح الأعطال الكهربائية المنزلية والمساعدة في تحديد سبب المشكلة.',
    path: null,
    linkLabel: null,
  },
  {
    title: 'أعمال الكهرباء المنزلية',
    description:
      'تنفيذ أعمال الكهرباء المنزلية المرتبطة باحتياج المنزل ومراحل التشطيب والاستخدام.',
    path: null,
    linkLabel: null,
  },
]

function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">الخدمات</span>

          <h1>
            خدمات الكهرباء المنزلية في جدة
          </h1>

          <p>
            أعمال تأسيس وتمديد وتشطيب الكهرباء للمنازل في جميع
            مناطق جدة.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              خدمات نور جدة للكهرباء
            </span>

            <h2>
              خدمات كهربائية مرتبطة باحتياج المنزل
            </h2>

            <p>
              تعرّف على الخدمات الأساسية المتاحة، ثم تواصل مباشرة
              للاستفسار عن العمل الذي تحتاجه.
            </p>
          </div>

          <div className="services-grid services-grid--large">
            {services.map((service) => (
              <article
                className="service-card service-card--detailed"
                key={service.title}
              >
                <div
                  className="service-number"
                  aria-hidden="true"
                >
                  ✓
                </div>

                <h2>{service.title}</h2>

                <p>{service.description}</p>

                {service.path ? (
                  <Link
                    className="text-link"
                    to={service.path}
                  >
                    {service.linkLabel}
                    <span aria-hidden="true">
                      ←
                    </span>
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container simple-cta">
          <div>
            <h2>
              هل لديك عمل كهربائي للمنزل؟
            </h2>

            <p>
              تواصل مباشرة للاستفسار عن احتياجك وتفاصيل الخدمة.
            </p>
          </div>

          <div className="cta-actions">
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
              واتساب
            </a>

            <Link
              className="text-link"
              to="/contact"
            >
              صفحة التواصل
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services