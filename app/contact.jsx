import Contact from '../src/pages/Contact'

import {
  createPageMeta,
  createWebPageSchema,
} from '../src/lib/seo'

export const meta = () =>
  createPageMeta({
    title: 'التواصل مع كهربائي في جدة | نور جدة للكهرباء',
    description:
      'تواصل مباشرة مع علي من نور جدة للكهرباء لطلب خدمات الكهرباء المنزلية والتشطيب في جميع مناطق جدة عبر الاتصال أو واتساب.',
    path: '/contact',
    image: '/og/noor-jeddah-social.webp',
  })

export default function ContactRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            createWebPageSchema({
              title: 'التواصل مع كهربائي في جدة | نور جدة للكهرباء',
              description: 'تواصل مباشرة مع علي من نور جدة للكهرباء لطلب خدمات الكهرباء المنزلية والتشطيب في جميع مناطق جدة عبر الاتصال أو واتساب.',
              path: '/contact',
            }),
          ),
        }}
      />
      <Contact />
    </>
  )
}