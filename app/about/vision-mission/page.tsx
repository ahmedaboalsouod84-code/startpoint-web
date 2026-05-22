import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = buildMetadata({
  title: 'Vision & mission — Start Point',
  description: 'The Start Point vision and mission — building the brand moments that happen in the room.',
  path: '/about/vision-mission',
});

export default function VisionMissionPage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Vision & mission', href: '/about/vision-mission' },
          ]}
        />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Vision &amp; mission</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            Where brands begin to <em className="not-italic text-copper-soft">build.</em>
          </h1>
        </div>
      </Section>
      <Section pad="lg" className="border-t border-line-subtle">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>Vision</Eyebrow>
            <p className="font-display text-[clamp(1.375rem,1rem+1vw,1.75rem)] leading-snug mt-6 text-ink text-balance">
              To be the Saudi-headquartered production partner of record for the brands and authorities defining the region&rsquo;s next decade.
            </p>
          </div>
          <div>
            <Eyebrow>Mission</Eyebrow>
            <p className="font-display text-[clamp(1.375rem,1rem+1vw,1.75rem)] leading-snug mt-6 text-ink text-balance">
              To unite design, fabrication, and live execution under one roof so the brief, the build, and the room are never further apart than a walk across the workshop floor.
            </p>
          </div>
        </div>
      </Section>
      <CtaBlock title={<>Start with the brief.</>} />
    </>
  );
}
