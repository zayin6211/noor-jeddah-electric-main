export const meta = () => [
  {
    title: 'الصفحة غير موجودة | نور جدة للكهرباء',
  },
  {
    name: 'description',
    content:
      'الصفحة المطلوبة غير موجودة. يمكنك العودة إلى خدمات الكهرباء المنزلية في جدة أو التواصل مع نور جدة للكهرباء.',
  },
  {
    tagName: 'meta',
    name: 'robots',
    content: 'noindex, follow',
  },
]

export default function NotFoundRoute() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">404</span>

          <h1>الصفحة غير موجودة</h1>

          <p>
            الصفحة التي تبحث عنها غير موجودة أو ربما تم تغيير رابطها.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="detail-cta">
            <h2>يمكنك متابعة التصفح</h2>

            <p>
              انتقل إلى الصفحة الرئيسية أو اطلع على خدمات الكهرباء
              المنزلية أو تواصل معنا مباشرة.
            </p>

            <div className="cta-actions">
              <a
                className="button button-primary"
                href="/"
              >
                الصفحة الرئيسية
              </a>

              <a
                className="button button-secondary"
                href="/services"
              >
                خدمات الكهرباء
              </a>

              <a
                className="button button-secondary"
                href="/contact"
              >
                التواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}