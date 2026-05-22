import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { InsightCard } from '@/components/marketing/InsightCard';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { insightCategories, insightsByCategory } from '@/content/insights';
import type { Insight } from '@/types/content';
import { buildMetadata } from '@/lib/seo/buildMetadata';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const labelMap: Record<Insight['category'], string> = {
  'exhibition-design': 'Exhibition design',
  'packaging-innovation': 'Packaging innovation',
  'event-activation': 'Event activation',
  'branding-strategy': 'Branding strategy',
  'fabrication-techniques': 'Fabrication techniques',
  'industry-trends': 'Industry trends',
};

export async function generateStaticParams() {
  return insightCategories.map((c) => ({ slug: c }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const label = labelMap[slug as Insight['category']];
  if (!label) return {};
  return buildMetadata({
    title: `${label} — Insights`,
    description: `Insights and guides on ${label.toLowerCase()} from Start Point.`,
    path: `/insights/category/${slug}`,
  });
}

export default async function InsightCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const label = labelMap[slug as Insight['category']];
  if (!label) return notFound();
  const items = insightsByCategory(slug as Insight['category']);

  return (
    <>
      <Section pad="lg">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Insights', href: '/insights' },
            { name: label, href: `/insights/category/${slug}` },
          ]}
        />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Category</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">{label}</h1>
        </div>
      </Section>
      <Section pad="lg" className="border-t border-line-subtle">
        {items.length === 0 ? (
          <p className="body-lg">No insights in this category yet — check back soon.</p>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {items.map((ins) => (
              <InsightCard key={ins.slug} insight={ins} />
            ))}
          </div>
        )}
      </Section>
      <CtaBlock title={<>Talk to the people who wrote these.</>} />
    </>
  );
}
