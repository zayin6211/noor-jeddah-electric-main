import type { Config } from '@react-router/dev/config'

export default {
  ssr: false,

  prerender: [
    '/',
    '/services',
    '/services/electrical-foundation',
    '/services/electrical-wiring',
    '/services/electrical-finishing',
    '/services/lighting',
    '/contact',
  ],
} satisfies Config