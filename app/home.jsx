import Home from '../src/pages/Home'

import {
  createPageMeta,
  createWebPageSchema,
} from '../src/lib/seo'

const TITLE = 'كهربائي منازل في جدة | نور جدة للكهرباء'

const DESCRIPTION =
  'نور جدة للكهرباء يقدم أعمال تأسيس وتمديد وتشطيب الكهرباء للمنازل في جميع مناطق جدة، مع خبرة أكثر من 15 عامًا. اتصل مباشرة أو تواصل عبر واتساب.'

const PATH = '/'

export const meta = () =>
  createPageMeta({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
  })

export default function HomeRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            createWebPageSchema({
              title: TITLE,
              description: DESCRIPTION,
              path: PATH,
            }),
          ),
        }}
      />
      <Home />
    </>
  )
}
