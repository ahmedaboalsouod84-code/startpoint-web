import { site } from '@/content/site';
import type { Service, Project, Insight, LocationEntry, Faq } from '@/types/content';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.shortDescription,
    foundingDate: String(site.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.hq.line1,
      addressLocality: site.hq.line2,
      addressRegion: site.hq.region,
      postalCode: site.hq.postalCode,
      addressCountry: 'SA',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: site.contact.email,
        telephone: site.contact.phone,
        areaServed: ['SA', 'AE', 'QA', 'KW', 'BH', 'OM'],
        availableLanguage: ['en', 'ar'],
      },
    ],
    sameAs: Object.values(site.social),
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    description: service.intro,
    areaServed: ['Saudi Arabia', 'GCC'],
    url: `${site.url}/services/${service.slug}`,
  };
}

export function projectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: project.title,
    description: project.summary,
    image: `${site.url}${project.heroImage}`,
    creator: { '@type': 'Organization', name: site.name, url: site.url },
    dateCreated: String(project.year),
    locationCreated: { '@type': 'Place', name: project.location },
    url: `${site.url}/work/${project.slug}`,
  };
}

export function articleSchema(insight: Insight) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.excerpt,
    image: `${site.url}${insight.heroImage}`,
    datePublished: insight.publishedAt,
    author: { '@type': 'Organization', name: insight.author },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    url: `${site.url}/insights/${insight.slug}`,
  };
}

export function faqSchema(faqs: Faq[] | { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function localBusinessSchema(loc: LocationEntry) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${site.name} — ${loc.city}`,
    description: loc.intro,
    url: `${site.url}/locations/${loc.slug}`,
    image: `${site.url}/media/asset-04.jpeg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.city,
      addressCountry: loc.country,
    },
    ...(loc.geo && {
      geo: { '@type': 'GeoCoordinates', latitude: loc.geo.lat, longitude: loc.geo.lng },
    }),
    areaServed: loc.city,
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.href}`,
    })),
  };
}
