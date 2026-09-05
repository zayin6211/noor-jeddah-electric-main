import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import {
  createBusinessSchema,
  createWebSiteSchema,
} from '../src/lib/seo'

import '../src/index.css'

const businessSchema = createBusinessSchema()
const websiteSchema = createWebSiteSchema()

export const meta = () => [
  {
    name: 'robots',
    content:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  {
    name: 'google-site-verification',
    content:
      'P1R0C4WNtdGsXOhpf6SD9Rxoeuf2wIWgE8mpPcPbb-4',
  },
]

export function Layout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=yes" />

        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="dns-prefetch"
          href="https://wa.me"
        />

        <Meta />
        <Links />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return <Outlet />
}
