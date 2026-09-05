import Services from '../src/pages/Services'

import {
  createPageMeta,
  createWebPageSchema,
} from '../src/lib/seo'

export const meta = () =>
  createPageMeta({
    title: 'خدمات الكهرباء المنزلية في جدة | نور جدة للكهرباء',
    description:
      'خدمات نور جدة للكهرباء تشمل تأسيس وتمديد وتشطيب الكهرباء المنزلية ونقاط الكهرباء والإنارة والمفاتيح والأفياش في جميع مناطق جدة.',
    path: '/services',
    image: '/og/noor-jeddah-social.webp',
  })

export default function ServicesRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            createWebPageSchema({
              title: 'خدمات الكهرباء المنزلية في جدة | نور جدة للكهرباء',
              description: 'خدمات نور جدة للكهرباء تشمل تأسيس وتمديد وتشطيب الكهرباء المنزلية ونقاط الكهرباء والإنارة والمفاتيح والأفياش في جميع مناطق جدة.',
              path: '/services',
            }),
          ),
        }}
      />
      <Services />
    </>
  )
}