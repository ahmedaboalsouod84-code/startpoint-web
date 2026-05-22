import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { RelatedGrid } from '@/components/marketing/RelatedGrid';
import { JsonLd } from '@/components/seo/JsonLd';
import { locations, locationBySlug } from '@/content/locations';
import { serviceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/seo/buildMetadata';
import { localBusinessSchema } from '@/lib/seo/schema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const loc = locationBySlug(slug);
  if (!loc) return {};
  return buildMetadata({
    title: loc.seo.title,
    description: loc.seo.description,
    path: `/locations/${loc.slug}`,
  });
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const loc = locationBySlug(slug);
  if (!loc) return notFound();
  const linkedServices = loc.services
    .map((s) => serviceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <Section pad="lg">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Locations', href: '/locations' },
            { name: loc.city, href: `/locations/${loc.slug}` },
          ]}
        />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>{loc.country}</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">{loc.city}</h1>
          <p className="body-lg mt-7 text-pretty">{loc.tagline}</p>
        </div>
      </Section>

      <Section pad="md" className="border-t border-line-subtle">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Eyebrow>What we deliver here</Eyebrow>
          <p className="font-display text-[clamp(1.25rem,1rem+1vw,1.625rem)] leading-snug text-ink text-balance">{loc.intro}</p>
        </div>
      </Section>

      {loc.address && (
        <Section pad="md" className="border-t border-line-subtle">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <Eyebrow>Address</Eyebrow>
            <address className="not-italic font-display text-[1.25rem] leading-snug text-ink">{loc.address}</address>
          </div>
        </Section>
      )}

      {linkedServices.length > 0 && (
        <Section pad="md" className="border-t border-line-subtle">
          <RelatedGrid
            title="Services delivered in this location"
            items={linkedServices.map((s) => ({ title: s.title, href: `/services/${s.slug}`, meta: s.tagline }))}
          />
        </Section>
      )}

      <CtaBlock title={<>Brief us from {loc.city}.</>} />
      <JsonLd data={localBusinessSchema(loc)} />
    </>
  );
}
