export const site = {
  name: 'Start Point',
  legalName: 'Start Point for Marketing Services',
  tagline: 'Where Brands Begin to Build',
  shortDescription:
    'A Riyadh creative production studio building exhibition booths, custom stands, packaging, branded environments, and event activations across Saudi Arabia and the GCC.',

  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://sp-sa.net',

  contact: {
    email: 'hello@sp-sa.net',
    phone: '+966 11 000 0000',
    quote: 'projects@sp-sa.net',
  },

  hq: {
    line1: 'Olaya District',
    line2: 'Riyadh',
    country: 'Saudi Arabia',
    region: 'Riyadh Province',
    postalCode: '12313',
    geo: { lat: 24.6877, lng: 46.6857 },
  },

  social: {
    instagram: 'https://instagram.com/startpoint.sa',
    linkedin: 'https://linkedin.com/company/startpoint-sa',
    behance: 'https://behance.net/startpoint',
  },

  founded: 2012,

  stats: [
    { value: '12+', label: 'Years of build' },
    { value: '400+', label: 'Projects delivered' },
    { value: '38,000 m²', label: 'Booths fabricated' },
    { value: '6', label: 'Cities served' },
  ],

  primaryServices: [
    'exhibition-booths-riyadh',
    'custom-stands-saudi-arabia',
    'custom-fabrication',
    'packaging-manufacturing',
    'event-activations',
    '3d-visualization',
  ],
} as const;

export type Site = typeof site;
