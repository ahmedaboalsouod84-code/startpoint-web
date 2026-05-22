import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { WorkCard } from '@/components/marketing/WorkCard';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { projects } from '@/content/projects';
import { buildMetadata } from '@/lib/seo/buildMetadata';

interface PageProps {
  params: Promise<{ service: string }>;
}

// Maps URL slugs to one or more service-content slugs (a "service" filter may match multiple specific services).
const filterMap: Record<string, { label: string; matches: string[] }> = {
  'exhibition-booths': {
    label: 'Exhibition booths',
    matches: ['exhibition-booths-riyadh', 'custom-stands-saudi-arabia'],
  },
  packaging: { label: 'Packaging', matches: ['packaging-manufacturing'] },
  branding: { label: 'Branding', matches: ['branding-visual-identity'] },
  activations: { label: 'Activations', matches: ['event-activations'] },
};

export async function generateStaticParams() {
  return Object.keys(filterMap).map((service) => ({ service }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params;
  const f = filterMap[service];
  if (!f) return {};
  return buildMetadata({
    title: `${f.label} — Selected work`,
    description: `Recent ${f.label.toLowerCase()} projects from Start Point — built and delivered across KSA and the GCC.`,
    path: `/work/by-service/${service}`,
  });
}

export default async function ByServicePage({ params }: PageProps) {
  const { service } = await params;
  const f = filterMap[service];
  if (!f) return notFound();
  const items = projects.filter((p) => f.matches.includes(p.service));

  return (
    <>
      <Section pad="lg">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Work', href: '/work' },
            { name: f.label, href: `/work/by-service/${service}` },
          ]}
        />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>By service</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">{f.label}</h1>
        </div>
      </Section>
      <Section pad="lg" className="border-t border-line-subtle">
        {items.length === 0 ? (
          <p className="body-lg">No projects in this collection yet — check back soon.</p>
        ) : (
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
            {items.map((p, i) => (
              <WorkCard key={p.slug} project={p} aspect={i % 3 === 0 ? 'tall' : 'square'} index={i + 1} />
            ))}
          </div>
        )}
      </Section>
      <CtaBlock title={<>Brief us on your next {f.label.toLowerCase()} project.</>} />
    </>
  );
}
