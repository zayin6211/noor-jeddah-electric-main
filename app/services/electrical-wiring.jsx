import { Link } from 'react-router-dom'
import { BUSINESS } from '../../src/config/business'
import {
  createBreadcrumbSchema,
  createPageMeta,
  createServiceSchema,
  createWebPageSchema,
} from '../../src/lib/seo'

const TITLE = 'تمديدات كهربائية للمنازل في جدة | نور جدة للكهرباء'

const DESCRIPTION =
  'خدمات التمديدات الكهربائية للمنازل في جدة ضمن أعمال تأسيس وتشطيب الكهرباء، مع تجهيز نقاط الاستخدام والإنارة.'

const PATH = '/services/electrical-wiring'

export const meta = () =>
  createPageMeta({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    image: '/og/noor-jeddah-social.webp',
  })

export default function ElectricalWiring() {
  const serviceSchema = createServiceSchema({
    name: 'التمديدات الكهربائية للمنازل',
    description:
      'خدمات التمديدات الكهربائية للمنازل ضمن أعمال التأسيس والتشطيب وتجهيز نقاط الاستخدام والإنارة في جدة.',
    serviceType: 'التمديدات الكهربائية',
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
        name: 'التمديدات الكهربائية',
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

          <h1>تمديدات كهربائية للمنازل في جدة</h1>

          <p>
            تنفيذ أعمال التمديدات الكهربائية للمنازل ضمن مراحل
            التأسيس والتشطيب.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <h2>تمديدات الكهرباء للمنازل</h2>

          <p>
            تشمل أعمال التمديدات تجهيز المسارات والنقاط الكهربائية
            المرتبطة باستخدامات المنزل المختلفة ضمن مراحل العمل
            الكهربائي.
          </p>

          <h2>أنواع النقاط المرتبطة بالتمديدات</h2>

          <div className="services-grid services-grid--large">
            <article className="service-card">
              <h3>نقاط الكهرباء</h3>
              <p>
                تجهيز نقاط الاستخدام الكهربائية في الأماكن المناسبة
                داخل المنزل.
              </p>
            </article>

            <article className="service-card">
              <h3>نقاط الإنارة</h3>
              <p>
                تجهيز التمديدات ونقاط الإنارة ضمن أعمال التشطيب.
              </p>
            </article>

            <article className="service-card">
              <h3>المفاتيح والأفياش</h3>
              <p>
                تجهيز نقاط المفاتيح والأفياش ضمن احتياجات المنزل.
              </p>
            </article>
          </div>

          <div className="detail-cta">
            <h2>استفسر عن التمديدات الكهربائية لمنزلك</h2>

            <p>
              تواصل مباشرة لمعرفة تفاصيل العمل المناسب لاحتياجك.
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