import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { StatBlock } from '@/components/marketing/StatBlock';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = buildMetadata({
  title: 'Studio & workshop — Start Point',
  description: 'A 2,400 m² Riyadh fabrication facility with design studio, workshop, print, and finishing — under one roof.',
  path: '/about/studio',
});

const studioStats = [
  { value: '2,400 m²', label: 'Workshop floor' },
  { value: '3-axis', label: 'CNC routing' },
  { value: 'In-house', label: 'Spray + finishing' },
  { value: 'Riyadh', label: 'Industrial city' },
];

export default function StudioPage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Studio', href: '/about/studio' },
          ]}
        />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>The studio</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            The design studio is <em className="not-italic text-copper-soft">across the corridor</em> from the workshop.
          </h1>
        </div>
      </Section>
      <Section bleed pad="sm" className="border-t border-line-subtle">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image src="/media/asset-09.jpeg" alt="Inside the Start Point workshop" fill sizes="100vw" className="object-cover" />
        </div>
      </Section>
      <Section pad="lg">
        <StatBlock stats={studioStats} />
      </Section>
      <Section pad="lg" className="border-t border-line-subtle">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Eyebrow>The setup</Eyebrow>
          <div className="space-y-7 body-lg text-pretty max-w-3xl">
            <p>
              The Start Point workshop sits in Riyadh&rsquo;s industrial city. 2,400 m² of floor under one roof, with the design studio in the same building. The decision came in {2024}: we either ran the studio in a different city to the joinery, or we kept everything together. We kept everything together.
            </p>
            <p>
              The result is operational — concept reviews happen with the head of production in the room, sample approvals happen at the spray booth, and pre-build dry-fits happen with the install crew. None of those things are special. They&rsquo;re just how a fabrication-led studio should run.
            </p>
          </div>
        </div>
      </Section>
      <CtaBlock title={<>Visit the workshop.</>} primary={{ label: 'Book a studio visit', href: '/contact' }} />
    </>
  );
}
