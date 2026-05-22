export type Slug = string;

export interface SeoMeta {
  title: string;
  description: string;
  ogImage?: string;
}

export interface Service {
  slug: Slug;
  title: string;
  shortTitle?: string;
  category: 'fabrication' | 'production' | 'branding' | 'consulting';
  tagline: string;
  intro: string;
  approach: string[];
  capabilities: string[];
  materials: string[];
  process: ProcessStep[];
  relatedProjects: Slug[];
  relatedServices: Slug[];
  faqs: { q: string; a: string }[];
  quickAnswers: { q: string; a: string }[];
  heroImage: string;
  imagePlaceholder?: boolean;
  seo: SeoMeta;
}

export interface ProcessStep {
  no: string;
  title: string;
  body: string;
}

export interface Industry {
  slug: Slug;
  title: string;
  group:
    | 'corporate-finance'
    | 'lifestyle-retail'
    | 'events-culture'
    | 'tech-innovation'
    | 'healthcare';
  tagline: string;
  intro: string;
  understanding: string;
  relevantServices: Slug[];
  insights: string[];
  heroImage: string;
  imagePlaceholder?: boolean;
  seo: SeoMeta;
}

export interface Capability {
  slug: Slug;
  title: string;
  tagline: string;
  intro: string;
  bullets: string[];
  heroImage: string;
  imagePlaceholder?: boolean;
  seo: SeoMeta;
}

export interface Project {
  slug: Slug;
  status: 'live' | 'stub';
  title: string;
  client: string;
  year: number;
  location: string;
  service: Slug;
  industry: Slug;
  tagline: string;
  summary: string;
  heroImage: string;
  imagePlaceholder?: boolean;
  credits?: { role: string; name: string }[];
  challenge?: string;
  approach?: string;
  execution?: string;
  materials?: string[];
  gallery?: string[];
  outcome?: { stat: string; label: string }[];
  testimonial?: { quote: string; author: string; role: string };
  seo: SeoMeta;
}

export interface Insight {
  slug: Slug;
  title: string;
  category:
    | 'exhibition-design'
    | 'packaging-innovation'
    | 'event-activation'
    | 'branding-strategy'
    | 'fabrication-techniques'
    | 'industry-trends';
  kind: 'article' | 'guide' | 'comparison';
  publishedAt: string;
  author: string;
  readingMinutes: number;
  tldr: string;
  excerpt: string;
  heroImage: string;
  imagePlaceholder?: boolean;
  seo: SeoMeta;
}

export interface LocationEntry {
  slug: Slug;
  city: string;
  country: string;
  region: 'KSA' | 'GCC';
  tagline: string;
  intro: string;
  services: Slug[];
  address?: string;
  geo?: { lat: number; lng: number };
  seo: SeoMeta;
}

export interface Client {
  name: string;
  sector: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  project?: Slug;
}

export interface Faq {
  id: string;
  q: string;
  a: string;
  tags: string[];
}
