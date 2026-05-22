import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { IndustryCard } from '@/components/marketing/IndustryCard';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { Reveal } from '@/components/motion/Reveal';
import { industries } from '@/content/industries';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = buildMetadata({
  title: 'Industries we build for',
  description:
    'Sector-led brand production across government, banking, real estate, energy, retail, luxury, hospitality, technology, healthcare, and the cultural sector.',
  path: '/industries',
});

const groupOrder: { label: string; key: typeof industries[number]['group'] }[] = [
  { label: 'Corporate & finance', key: 'corporate-finance' },
  { label: 'Lifestyle & retail', key: 'lifestyle-retail' },
  { label: 'Events, culture & entertainment', key: 'events-culture' },
  { label: 'Technology & innovation', key: 'tech-innovation' },
  { label: 'Healthcare', key: 'healthcare' },
];

export default function IndustriesPage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Industries', href: '/industries' }]} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Industries</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            We build for the sectors driving <em className="not-italic text-copper-soft">Saudi&rsquo;s next decade.</em>
          </h1>
          <p className="body-lg mt-7 text-pretty">
            Government, banking, real estate, energy, luxury, retail, hospitality, technology, healthcare — and every cultural moment in between.
          </p>
        </div>
      </Section>

      {groupOrder.map((group) => {
        const items = industries.filter((i) => i.group === group.key);
        if (!items.length) return null;
        return (
          <Section key={group.key} pad="md" className="border-t border-line-subtle">
            <div className="mb-10">
              <p className="label-eyebrow text-copper">{group.label}</p>
            </div>
            <div className="grid gap-px overflow-hidden border border-line-subtle bg-line-subtle md:grid-cols-2 lg:grid-cols-3">
              {items.map((ind, i) => (
                <Reveal key={ind.slug} delay={i * 0.04}>
                  <IndustryCard industry={ind} className="h-full border-0" />
                </Reveal>
              ))}
            </div>
          </Section>
        );
      })}

      <CtaBlock title={<>Not seeing your sector? Brief us anyway.</>} />
    </>
  );
}
