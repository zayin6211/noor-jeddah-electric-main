import { Link } from 'react-router-dom'
import { BUSINESS } from '../../src/config/business'
import {
  createBreadcrumbSchema,
  createPageMeta,
  createServiceSchema,
  createWebPageSchema,
} from '../../src/lib/seo'

const TITLE = 'تركيب ونقاط الإنارة للمنازل في جدة | نور جدة للكهرباء'

const DESCRIPTION =
  'خدمات نقاط وتركيب الإنارة للمنازل في جدة ضمن أعمال التشطيب الكهربائي، مع تجهيز نقاط الإنارة حسب احتياج المنزل.'

const PATH = '/services/lighting'

export const meta = () =>
  createPageMeta({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    image: '/og/noor-jeddah-social.webp',
  })

export default function Lighting() {
  const serviceSchema = createServiceSchema({
    name: 'نقاط وتركيب الإنارة للمنازل',
    description:
      'خدمات تجهيز نقاط الإنارة وتنفيذ الأعمال المرتبطة بتشطيب الكهرباء داخل المنازل في جدة.',
    serviceType: 'الإنارة',
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
        name: 'الإنارة',
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

          <h1>نقاط وتركيب الإنارة للمنازل في جدة</h1>

          <p>
            تجهيز نقاط الإنارة وتنفيذ أعمال مرتبطة بتشطيب الكهرباء
            داخل المنازل في جدة.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <h2>أعمال الإنارة المنزلية</h2>

          <p>
            تشمل أعمال الإنارة تجهيز النقاط المطلوبة ضمن مراحل
            التشطيب الكهربائي بما يتناسب مع استخدامات ومساحات المنزل.
          </p>

          <h2>أعمال مرتبطة بالإنارة</h2>

          <div className="services-grid services-grid--large">
            <article className="service-card">
              <h3>نقاط الإنارة</h3>
              <p>
                تجهيز نقاط الإنارة داخل الغرف والمساحات المختلفة.
              </p>
            </article>

            <article className="service-card">
              <h3>تمديدات الإنارة</h3>
              <p>
                تنفيذ التمديدات المرتبطة بنقاط الإنارة ضمن أعمال
                التشطيب.
              </p>
            </article>

            <article className="service-card">
              <h3>تجهيزات الإضاءة</h3>
              <p>
                تجهيز نقاط الإضاءة النهائية ضمن احتياج المنزل.
              </p>
            </article>
          </div>

          <div className="detail-cta">
            <h2>تحتاج أعمال إنارة لمنزلك؟</h2>

            <p>
              تواصل مباشرة للاستفسار عن احتياجك.
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