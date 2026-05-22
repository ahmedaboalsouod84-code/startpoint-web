import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { Reveal } from '@/components/motion/Reveal';
import { locations } from '@/content/locations';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = buildMetadata({
  title: 'Locations — KSA & GCC',
  description:
    'Start Point delivers from Riyadh into Jeddah, Dammam, NEOM, Dubai, Abu Dhabi, Doha, and Kuwait City.',
  path: '/locations',
});

export default function LocationsPage() {
  const ksa = locations.filter((l) => l.region === 'KSA');
  const gcc = locations.filter((l) => l.region === 'GCC');
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Locations', href: '/locations' }]} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Locations</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            One workshop. <em className="not-italic text-copper-soft">A region of delivery.</em>
          </h1>
          <p className="body-lg mt-7 text-pretty">
            Riyadh is home. From here, our crews and trucks roll into eight cities across KSA and the wider GCC.
          </p>
        </div>
      </Section>

      <LocationGroup label="Saudi Arabia" items={ksa} />
      <LocationGroup label="Wider GCC" items={gcc} />

      <CtaBlock title={<>Brief us from anywhere in the region.</>} />
    </>
  );
}

function LocationGroup({ label, items }: { label: string; items: typeof locations }) {
  return (
    <Section pad="md" className="border-t border-line-subtle">
      <div className="mb-10">
        <p className="label-eyebrow text-copper">{label}</p>
      </div>
      <ul className="grid gap-px overflow-hidden border border-line-subtle bg-line-subtle md:grid-cols-2">
        {items.map((l, i) => (
          <Reveal key={l.slug} delay={i * 0.06} as="li" className="bg-base">
            <Link
              href={`/locations/${l.slug}`}
              className="group flex h-full items-end justify-between gap-6 p-8 transition-colors hover:bg-raised md:p-10"
            >
              <div>
                <h2 className="font-display text-[1.75rem] leading-tight text-ink transition-colors group-hover:text-copper-soft">
                  {l.city}
                </h2>
                <p className="label-eyebrow mt-3 text-ink-quiet">{l.country}</p>
                <p className="body-md mt-5">{l.tagline}</p>
              </div>
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-ink-quiet transition-all group-hover:translate-x-0.5 group-hover:text-copper" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
