import { Link } from 'react-router-dom'
import { BUSINESS } from '../../src/config/business'
import {
  createBreadcrumbSchema,
  createPageMeta,
  createServiceSchema,
  createWebPageSchema,
} from '../../src/lib/seo'

const TITLE = 'تشطيب كهرباء المنازل في جدة | نور جدة للكهرباء'

const DESCRIPTION =
  'أعمال تشطيب الكهرباء للمنازل في جدة، تشمل نقاط الكهرباء والإنارة والمفاتيح والأفياش ضمن المراحل النهائية للتشطيب.'

const PATH = '/services/electrical-finishing'

export const meta = () =>
  createPageMeta({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    image: '/og/noor-jeddah-social.webp',
  })

export default function ElectricalFinishing() {
  const serviceSchema = createServiceSchema({
    name: 'تشطيب كهرباء المنازل',
    description:
      'أعمال تشطيب الكهرباء للمنازل وتجهيز النقاط النهائية للكهرباء والإنارة والمفاتيح والأفياش في جدة.',
    serviceType: 'تشطيب الكهرباء',
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
        name: 'تشطيب كهرباء المنازل',
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

          <h1>تشطيب كهرباء المنازل في جدة</h1>

          <p>
            تنفيذ أعمال التشطيب الكهربائي للمنازل وتجهيز النقاط
            النهائية للكهرباء والإنارة والمفاتيح والأفياش.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <h2>أعمال تشطيب الكهرباء</h2>

          <p>
            تشطيب الكهرباء هو المرحلة التي تكتمل فيها نقاط الاستخدام
            والتجهيزات الكهربائية داخل المنزل بعد مراحل التأسيس
            والتمديدات.
          </p>

          <h2>الخدمات المرتبطة بالتشطيب</h2>

          <div className="services-grid services-grid--large">
            <article className="service-card">
              <h3>نقاط الكهرباء</h3>
              <p>
                تجهيز النقاط النهائية للاستخدام داخل المنزل.
              </p>
            </article>

            <article className="service-card">
              <h3>الإنارة</h3>
              <p>
                تنفيذ نقاط وتجهيزات الإنارة ضمن أعمال التشطيب.
              </p>
            </article>

            <article className="service-card">
              <h3>المفاتيح والأفياش</h3>
              <p>
                تركيب وتجهيز نقاط المفاتيح والأفياش للمنزل.
              </p>
            </article>
          </div>

          <div className="detail-cta">
            <h2>تحتاج تشطيب كهرباء لمنزلك في جدة؟</h2>

            <p>
              تواصل مباشرة للاستفسار عن الأعمال التي تحتاجها.
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