import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { InsightCard } from '@/components/marketing/InsightCard';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { Reveal } from '@/components/motion/Reveal';
import { insights, insightCategories } from '@/content/insights';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = buildMetadata({
  title: 'Insights — Notes from the workshop',
  description:
    'Long-form guides, comparisons, and practical notes from the Start Point studio and workshop — exhibition design, packaging, fabrication, and brand production.',
  path: '/insights',
});

const categoryLabels: Record<string, string> = {
  'exhibition-design': 'Exhibition design',
  'packaging-innovation': 'Packaging innovation',
  'event-activation': 'Event activation',
  'branding-strategy': 'Branding strategy',
  'fabrication-techniques': 'Fabrication techniques',
  'industry-trends': 'Industry trends',
};

export default function InsightsPage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Insights', href: '/insights' }]} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Insights</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            Notes from the <em className="not-italic text-copper-soft">workshop.</em>
          </h1>
          <p className="body-lg mt-7 text-pretty">
            Practical guides on planning, briefing, costing, and producing brand environments in Saudi Arabia. Written by the people who make them.
          </p>
        </div>
      </Section>

      <Section pad="sm" className="border-t border-line-subtle">
        <Eyebrow>Browse by category</Eyebrow>
        <ul className="mt-6 flex flex-wrap gap-2">
          {insightCategories.map((c) => (
            <li key={c}>
              <Link
                href={`/insights/category/${c}`}
                className="inline-flex items-center rounded-xs border border-line-strong px-4 py-2 text-[0.875rem] text-ink-muted transition-colors hover:border-copper hover:text-copper-soft"
              >
                {categoryLabels[c]}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section pad="lg" className="border-t border-line-subtle">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((ins, i) => (
            <Reveal key={ins.slug} delay={(i % 3) * 0.06}>
              <InsightCard insight={ins} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBlock title={<>Bring us into the conversation.</>} />
    </>
  );
}
