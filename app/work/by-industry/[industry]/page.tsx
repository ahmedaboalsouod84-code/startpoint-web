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
  params: Promise<{ industry: string }>;
}

const filterMap: Record<string, { label: string; matches: string[] }> = {
  government: {
    label: 'Government & public sector',
    matches: ['government-public-sector'],
  },
  luxury: { label: 'Luxury', matches: ['luxury-fashion', 'hospitality-hotels', 'beauty-cosmetics'] },
  retail: { label: 'Retail', matches: ['retail-consumer-lifestyle', 'retail-shopping-malls', 'banking-financial-services'] },
};

export async function generateStaticParams() {
  return Object.keys(filterMap).map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;
  const f = filterMap[industry];
  if (!f) return {};
  return buildMetadata({
    title: `${f.label} — Selected work`,
    description: `Projects for ${f.label.toLowerCase()} delivered by Start Point across KSA and the GCC.`,
    path: `/work/by-industry/${industry}`,
  });
}

export default async function ByIndustryPage({ params }: PageProps) {
  const { industry } = await params;
  const f = filterMap[industry];
  if (!f) return notFound();
  const items = projects.filter((p) => f.matches.includes(p.industry));

  return (
    <>
      <Section pad="lg">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Work', href: '/work' },
            { name: f.label, href: `/work/by-industry/${industry}` },
          ]}
        />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>By industry</Eyebrow>
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
      <CtaBlock title={<>Building for {f.label.toLowerCase()}? Let&rsquo;s talk.</>} />
    </>
  );
}
