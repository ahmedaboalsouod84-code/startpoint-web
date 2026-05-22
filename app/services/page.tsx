import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { Reveal } from '@/components/motion/Reveal';
import { services } from '@/content/services';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = buildMetadata({
  title: 'Services — Concept, fabrication, install',
  description:
    'The full Start Point services catalogue: exhibition booths, custom stands, fabrication, packaging, branding, activations, 3D visualisation, and consulting.',
  path: '/services',
});

const groups: { label: string; key: typeof services[number]['category'] }[] = [
  { label: 'Fabrication & build', key: 'fabrication' },
  { label: 'Live production', key: 'production' },
  { label: 'Brand & creative', key: 'branding' },
  { label: 'Consulting', key: 'consulting' },
];

export default function ServicesPage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Services</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            One studio. <em className="not-italic text-copper-soft">Ten services.</em>
          </h1>
          <p className="body-lg mt-7 text-pretty">
            From a hero booth to a single rigid box — the studio, the workshop, and the install crew all work for the same project lead.
          </p>
        </div>
      </Section>

      {groups.map((group) => {
        const items = services.filter((s) => s.category === group.key);
        if (!items.length) return null;
        return (
          <Section key={group.key} pad="md" className="border-t border-line-subtle">
            <div className="mb-10">
              <p className="label-eyebrow text-copper">{group.label}</p>
            </div>
            <div className="grid gap-px overflow-hidden border border-line-subtle bg-line-subtle md:grid-cols-2">
              {items.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.06} className="bg-base">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col gap-6 p-8 transition-colors hover:bg-raised md:p-10"
                  >
                    <h2 className="font-display text-[1.625rem] leading-snug text-ink transition-colors group-hover:text-copper-soft">
                      {s.title}
                    </h2>
                    <p className="body-md flex-1">{s.tagline}</p>
                    <span className="label-eyebrow inline-flex items-center gap-2 text-ink-quiet">
                      Service detail
                      <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none">
                        <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.25" />
                      </svg>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Section>
        );
      })}

      <CtaBlock title={<>Tell us what you&rsquo;re building.</>} />
    </>
  );
}
