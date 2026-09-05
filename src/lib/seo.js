import {
  BUSINESS,
  BUSINESS_ID,
  SITE_URL,
  WEBSITE_ID,
} from '../config/business'

export { SITE_URL }

export const BUSINESS_NAME = BUSINESS.name
export const BUSINESS_NAME_EN = BUSINESS.nameEn
export const BUSINESS_PHONE = BUSINESS.telephone
export const BUSINESS_PHONE_INTERNATIONAL = BUSINESS.telephoneInternational
export const WHATSAPP_URL = BUSINESS.whatsappUrl
export const GOOGLE_SITE_VERIFICATION =
  'P1R0C4WNtdGsXOhpf6SD9Rxoeuf2wIWgE8mpPcPbb-4'

export const DEFAULT_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const NOINDEX_ROBOTS = 'noindex, follow'

export const SERVICE_PATHS = {
  electricalFoundation: '/services/electrical-foundation',
  electricalWiring: '/services/electrical-wiring',
  electricalFinishing: '/services/electrical-finishing',
  lighting: '/services/lighting',
}

export const SERVICES = [
  {
    name: 'تأسيس الكهرباء',
    path: SERVICE_PATHS.electricalFoundation,
  },
  {
    name: 'التمديدات الكهربائية',
    path: SERVICE_PATHS.electricalWiring,
  },
  {
    name: 'تشطيب الكهرباء',
    path: SERVICE_PATHS.electricalFinishing,
  },
  {
    name: 'الإنارة',
    path: SERVICE_PATHS.lighting,
  },
  {
    name: 'نقاط الكهرباء',
    path: null,
  },
  {
    name: 'المفاتيح والأفياش',
    path: null,
  },
  {
    name: 'إصلاح الأعطال الكهربائية',
    path: null,
  },
  {
    name: 'أعمال الكهرباء المنزلية',
    path: null,
  },
]

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalizedPath}`
}

export function createPageMeta({
  title,
  description,
  path = '/',
  image = BUSINESS.socialImage,
  indexable = true,
}) {
  const canonicalUrl = absoluteUrl(path)
  const imageUrl = image ? absoluteUrl(image) : null

  const descriptors = [
    { title },
    { name: 'description', content: description },
    {
      name: 'robots',
      content: indexable ? DEFAULT_ROBOTS : NOINDEX_ROBOTS,
    },
    {
      name: 'google-site-verification',
      content: GOOGLE_SITE_VERIFICATION,
    },
    {
      tagName: 'link',
      rel: 'canonical',
      href: canonicalUrl,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:locale',
      content: BUSINESS.locale,
    },
    {
      property: 'og:site_name',
      content: BUSINESS.name,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:url',
      content: canonicalUrl,
    },
    {
      name: 'twitter:card',
      content: imageUrl ? 'summary_large_image' : 'summary',
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ]

  if (imageUrl) {
    descriptors.push(
      {
        property: 'og:image',
        content: imageUrl,
      },
      {
        property: 'og:image:alt',
        content: `${BUSINESS.name} - كهربائي منازل في جدة`,
      },
      {
        name: 'twitter:image',
        content: imageUrl,
      },
      {
        name: 'twitter:image:alt',
        content: `${BUSINESS.name} - كهربائي منازل في جدة`,
      },
    )
  }

  return descriptors
}

export function createBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.nameEn,
    description:
      'خدمات الكهرباء المنزلية وتشطيب الكهرباء للمنازل في جميع مناطق جدة.',
    telephone: BUSINESS.telephoneInternational,
    url: absoluteUrl('/'),
    areaServed: {
      '@type': 'City',
      name: BUSINESS.cityAr,
    },
    serviceType: SERVICES.map((service) => service.name),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.telephoneInternational,
      contactType: 'customer service',
      availableLanguage: ['ar'],
    },
  }
}

export function createWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: absoluteUrl('/'),
    name: BUSINESS.name,
    inLanguage: BUSINESS.language,
    publisher: {
      '@id': BUSINESS_ID,
    },
  }
}

export function createWebPageSchema({
  title,
  description,
  path = '/',
}) {
  const url = absoluteUrl(path)

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: BUSINESS.language,
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    about: {
      '@id': BUSINESS_ID,
    },
  }
}

export function createServiceSchema({
  name,
  description,
  serviceType = name,
  path,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    provider: {
      '@id': BUSINESS_ID,
    },
    areaServed: {
      '@type': 'City',
      name: BUSINESS.cityAr,
    },
  }
}

export function createBreadcrumbSchema({ items }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
