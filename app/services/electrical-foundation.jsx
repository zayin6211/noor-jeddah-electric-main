import { Link } from 'react-router-dom'
import { BUSINESS } from '../../src/config/business'
import {
  createBreadcrumbSchema,
  createPageMeta,
  createServiceSchema,
  createWebPageSchema,
} from '../../src/lib/seo'

const TITLE = 'تأسيس كهرباء المنازل في جدة | نور جدة للكهرباء'

const DESCRIPTION =
  'خدمة تأسيس كهرباء المنازل في جدة من نور جدة للكهرباء، تشمل تجهيز نقاط الكهرباء والتمديدات الأولية للمنازل ضمن مراحل البناء والتشطيب.'

const PATH = '/services/electrical-foundation'

export const meta = () =>
  createPageMeta({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    image: '/og/noor-jeddah-social.webp',
  })

export default function ElectricalFoundation() {
  const serviceSchema = createServiceSchema({
    name: 'تأسيس كهرباء المنازل',
    description:
      'أعمال تأسيس الكهرباء للمنازل وتجهيز نقاط الاستخدام والتمديدات الأولية ضمن مراحل البناء والتشطيب في جدة.',
    serviceType: 'تأسيس الكهرباء',
    path: PATH,
  })

  const webPageSchema = createWebPageSchema({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
  })

  const breadcrumbSchema = createBreadcrumbSchema({
    items: [
      {
        name: 'الرئيسية',
        path: '/',
      },
      {
        name: 'خدمات الكهرباء',
        path: '/services',
      },
      {
        name: 'تأسيس كهرباء المنازل',
        path: PATH,
      },
    ],
  })

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">خدمات الكهرباء المنزلية</span>

          <h1>تأسيس كهرباء المنازل في جدة</h1>

          <p>
            أعمال تأسيس الكهرباء وتجهيز نقاط الاستخدام والتمديدات
            الأولية للمنازل ضمن مراحل البناء والتشطيب.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <h2>ما المقصود بتأسيس الكهرباء؟</h2>

          <p>
            تأسيس الكهرباء هو المرحلة التي يتم فيها تجهيز وتمديد
            البنية الكهربائية الأساسية للمنزل قبل اكتمال مراحل
            التشطيب النهائية.
          </p>

          <h2>أعمال مرتبطة بالتأسيس</h2>

          <div className="services-grid services-grid--large">
            <article className="service-card">
              <h3>تجهيز نقاط الكهرباء</h3>
              <p>
                تحديد وتجهيز نقاط الاستخدام الكهربائية التي يحتاجها
                المنزل بحسب احتياجاته.
              </p>
            </article>

            <article className="service-card">
              <h3>التمديدات الأولية</h3>
              <p>
                تنفيذ التمديدات الكهربائية ضمن مراحل تأسيس المنزل.
              </p>
            </article>

            <article className="service-card">
              <h3>نقاط الإنارة</h3>
              <p>
                تجهيز نقاط الإنارة ضمن خطة التشطيب الكهربائي للمنزل.
              </p>
            </article>
          </div>

          <div className="detail-cta">
            <h2>تحتاج إلى تأسيس كهرباء لمنزلك في جدة؟</h2>

            <p>
              تواصل مباشرة للاستفسار عن احتياج المنزل وتفاصيل العمل.
            </p>

            <div className="cta-actions">
              <a
                className="button button-primary"
                href={`tel:${BUSINESS.telephone}`}
              >
                اتصل الآن
              </a>

              <Link
                className="button button-secondary"
                to="/services"
              >
                جميع الخدمات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}