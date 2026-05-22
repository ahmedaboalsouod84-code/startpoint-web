import type { LocationEntry } from '@/types/content';

export const locations: LocationEntry[] = [
  {
    slug: 'riyadh',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    region: 'KSA',
    tagline: 'Headquarters. Workshop. Studio.',
    intro:
      'Our home. The studio, the 2,400 m² fabrication facility, and the install crew all sit in Riyadh — every project we deliver flows through here.',
    services: ['exhibition-booths-riyadh', 'custom-stands-saudi-arabia', 'custom-fabrication', 'event-activations'],
    address: 'Olaya District, Riyadh, Saudi Arabia',
    geo: { lat: 24.6877, lng: 46.6857 },
    seo: {
      title: 'Exhibition & Brand Production in Riyadh — Start Point',
      description: 'Riyadh-based creative production and fabrication studio for exhibition booths, custom stands, packaging, and activations.',
    },
  },
  {
    slug: 'jeddah',
    city: 'Jeddah',
    country: 'Saudi Arabia',
    region: 'KSA',
    tagline: 'Western region delivery for events, retail, and hospitality.',
    intro:
      'We deliver into Jeddah weekly — Red Sea Season, Jeddah Superdome shows, and West-coast retail and hospitality clients.',
    services: ['exhibition-booths-riyadh', 'event-activations', 'branded-installations'],
    seo: {
      title: 'Brand Production & Exhibition Stands in Jeddah | Start Point',
      description: 'Brand production and exhibition stand delivery in Jeddah — Red Sea Season, retail, and hospitality.',
    },
  },
  {
    slug: 'dammam',
    city: 'Dammam',
    country: 'Saudi Arabia',
    region: 'KSA',
    tagline: 'Eastern Province delivery for energy, healthcare, and conferences.',
    intro:
      'Dhahran Expo and Eastern Province delivery — energy sector, healthcare, and major conference production.',
    services: ['exhibition-booths-riyadh', 'branded-installations', '3d-visualization'],
    seo: {
      title: 'Brand Production & Exhibition Stands in Dammam | Start Point',
      description: 'Brand production and exhibition stand delivery across the Eastern Province — Dhahran Expo, energy, healthcare.',
    },
  },
  {
    slug: 'neom',
    city: 'NEOM',
    country: 'Saudi Arabia',
    region: 'KSA',
    tagline: 'Pavilion and sales gallery delivery for NEOM and Red Sea Global.',
    intro:
      'Pavilion build, sales gallery fit-out, and brand-environment delivery for NEOM, The Red Sea, AMAALA, and the wider Tabuk programmes.',
    services: ['branded-installations', 'exhibition-booths-riyadh', '3d-visualization'],
    seo: {
      title: 'Brand Production for NEOM & Red Sea Global | Start Point',
      description: 'Pavilion, sales gallery, and brand environment delivery for NEOM, The Red Sea, and the wider Tabuk programmes.',
    },
  },
  {
    slug: 'dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'GCC',
    tagline: 'GCC delivery from Dubai World Trade Centre to DIFC.',
    intro:
      'GCC delivery for clients showing at Dubai shows — DWTC, Expo City, DIFC events — and for retail and brand programmes spanning UAE and KSA.',
    services: ['exhibition-booths-riyadh', 'custom-stands-saudi-arabia', 'event-activations'],
    seo: {
      title: 'Brand Production & Exhibition Stands in Dubai | Start Point',
      description: 'GCC delivery in Dubai — DWTC, Expo City, DIFC, and cross-border retail and brand programmes.',
    },
  },
  {
    slug: 'abu-dhabi',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    region: 'GCC',
    tagline: 'ADNEC, Yas, and cultural-sector delivery in the capital.',
    intro:
      'Pavilion and exhibition delivery into ADNEC, Yas, and the Saadiyat cultural district.',
    services: ['exhibition-booths-riyadh', 'branded-installations', 'event-activations'],
    seo: {
      title: 'Brand Production & Exhibition Stands in Abu Dhabi | Start Point',
      description: 'Pavilion and exhibition delivery in Abu Dhabi — ADNEC, Yas, and the Saadiyat cultural district.',
    },
  },
  {
    slug: 'doha',
    city: 'Doha',
    country: 'Qatar',
    region: 'GCC',
    tagline: 'Cross-border delivery for Qatar exhibition and cultural events.',
    intro:
      'Cross-border project delivery into Qatar — exhibition, cultural events, and sponsor activations.',
    services: ['exhibition-booths-riyadh', 'event-activations', 'branded-installations'],
    seo: {
      title: 'Brand Production & Exhibition Stands in Doha | Start Point',
      description: 'Cross-border exhibition and activation delivery into Doha, Qatar.',
    },
  },
  {
    slug: 'kuwait-city',
    city: 'Kuwait City',
    country: 'Kuwait',
    region: 'GCC',
    tagline: 'Kuwait delivery for brand and exhibition programmes.',
    intro:
      'Project delivery into Kuwait — exhibition, brand environment, and event activation programmes.',
    services: ['exhibition-booths-riyadh', 'event-activations', 'custom-stands-saudi-arabia'],
    seo: {
      title: 'Brand Production & Exhibition Stands in Kuwait City | Start Point',
      description: 'Exhibition, brand environment, and activation delivery into Kuwait City.',
    },
  },
];

export const locationBySlug = (slug: string) =>
  locations.find((l) => l.slug === slug);
