import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { industries } from '@/content/industries';
import { capabilities } from '@/content/capabilities';
import { projects, projectYears } from '@/content/projects';
import { insights, insightCategories } from '@/content/insights';
import { locations } from '@/content/locations';

function entry(path: string, lastModified?: Date | string, priority = 0.6): MetadataRoute.Sitemap[number] {
  return {
    url: `${site.url}${path}`,
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    changeFrequency: 'monthly',
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    entry('/', undefined, 1),
    entry('/services', undefined, 0.9),
    entry('/work', undefined, 0.9),
    entry('/industries', undefined, 0.9),
    entry('/capabilities', undefined, 0.8),
    entry('/process', undefined, 0.7),
    entry('/about', undefined, 0.7),
    entry('/about/vision-mission'),
    entry('/about/leadership'),
    entry('/about/studio'),
    entry('/about/careers'),
    entry('/about/press'),
    entry('/clients'),
    entry('/insights', undefined, 0.8),
    entry('/contact'),
    entry('/quote', undefined, 0.9),
    entry('/locations', undefined, 0.8),
  ];

  const dynamic = [
    ...services.map((s) => entry(`/services/${s.slug}`, undefined, 0.8)),
    ...industries.map((i) => entry(`/industries/${i.slug}`, undefined, 0.7)),
    ...capabilities.map((c) => entry(`/capabilities/${c.slug}`)),
    ...projects.map((p) => entry(`/work/${p.slug}`, undefined, 0.7)),
    ...projectYears().map((y) => entry(`/work/by-year/${y}`)),
    ...['exhibition-booths', 'packaging', 'branding', 'activations'].map((s) => entry(`/work/by-service/${s}`)),
    ...['government', 'luxury', 'retail'].map((s) => entry(`/work/by-industry/${s}`)),
    ...insights.map((i) => {
      const base =
        i.kind === 'guide'
          ? `/insights/guides/${i.slug}`
          : i.kind === 'comparison'
            ? `/insights/comparisons/${i.slug}`
            : `/insights/${i.slug}`;
      return entry(base, i.publishedAt, 0.6);
    }),
    ...insightCategories.map((c) => entry(`/insights/category/${c}`)),
    ...locations.map((l) => entry(`/locations/${l.slug}`, undefined, 0.7)),
  ];

  return [...staticPages, ...dynamic];
}
