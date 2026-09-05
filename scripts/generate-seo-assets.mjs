import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const siteUrl = (
  process.env.VITE_SITE_URL || 'https://noor-jeddah-electric.vercel.app'
).replace(/\/$/, '')

const paths = [
  '/',
  '/services',
  '/services/electrical-foundation',
  '/services/electrical-wiring',
  '/services/electrical-finishing',
  '/services/lighting',
  '/contact',
]

const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `  <url>\n    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>\n  </url>`,
  )
  .join('\n')}
</urlset>
`

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`

const publicDir = resolve(process.cwd(), 'public')
await mkdir(publicDir, { recursive: true })
await writeFile(resolve(publicDir, 'sitemap.xml'), sitemap, 'utf8')
await writeFile(resolve(publicDir, 'robots.txt'), robots, 'utf8')
