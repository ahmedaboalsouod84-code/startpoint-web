import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { Reveal } from '@/components/motion/Reveal';
import { capabilities } from '@/content/capabilities';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = buildMetadata({
  title: 'Capabilities — Studio, workshop, install',
  description: 'A full-spectrum production studio: design, fabrication, manufacturing, print, install, project management, QC, and joint ventures.',
  path: '/capabilities',
});

export default function CapabilitiesPage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Capabilities', href: '/capabilities' }]} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Capabilities</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            <em className="not-italic text-copper-soft">Everything</em> the project needs, in one building.
          </h1>
          <p className="body-lg mt-7 text-pretty">
            Eight capabilities under one roof — so the work never waits on a coordination call between three subcontractors.
          </p>
        </div>
      </Section>
      <Section pad="lg" className="border-t border-line-subtle">
        <div className="grid gap-px overflow-hidden border border-line-subtle bg-line-subtle md:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05} className="bg-base">
              <Link href={`/capabilities/${c.slug}`} className="group flex h-full flex-col gap-6 p-8 transition-colors hover:bg-raised md:p-10">
                <span className="label-eyebrow text-copper">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="font-display text-[1.625rem] leading-snug text-ink transition-colors group-hover:text-copper-soft">
                  {c.title}
                </h2>
                <p className="body-md flex-1">{c.tagline}</p>
                <span className="label-eyebrow inline-flex items-center gap-2 text-ink-quiet">
                  Capability detail
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.25" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBlock title={<>Let&rsquo;s put it all on your next project.</>} />
    </>
  );
}
