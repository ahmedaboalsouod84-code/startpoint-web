import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { WorkCard } from '@/components/marketing/WorkCard';
import { Reveal } from '@/components/motion/Reveal';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { projects, projectYears } from '@/content/projects';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = buildMetadata({
  title: 'Work — Projects across booth, fit-out, packaging & activation',
  description:
    'Selected projects from Start Point — exhibition booths, custom fabrication, packaging, branded installations, and event activations across KSA and the GCC.',
  path: '/work',
});

const serviceFilters = [
  { label: 'Exhibition booths', slug: 'exhibition-booths' },
  { label: 'Packaging', slug: 'packaging' },
  { label: 'Branding', slug: 'branding' },
  { label: 'Activations', slug: 'activations' },
];
const industryFilters = [
  { label: 'Government', slug: 'government' },
  { label: 'Luxury', slug: 'luxury' },
  { label: 'Retail', slug: 'retail' },
];

export default function WorkIndexPage() {
  const years = projectYears();
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Work', href: '/work' }]} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Work</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            Selected <em className="not-italic text-copper-soft">recent builds.</em>
          </h1>
          <p className="body-lg mt-7 text-pretty">
            Pavilions, flagships, retail roadshows, premium packaging — a sample of what the workshop is shipping right now.
          </p>
        </div>
      </Section>

      {/* Filters */}
      <Section pad="sm" className="border-t border-line-subtle">
        <div className="grid gap-8 lg:grid-cols-3">
          <FilterColumn label="By service" base="/work/by-service" items={serviceFilters} />
          <FilterColumn label="By industry" base="/work/by-industry" items={industryFilters} />
          <FilterColumn
            label="By year"
            base="/work/by-year"
            items={years.map((y) => ({ label: String(y), slug: String(y) }))}
          />
        </div>
      </Section>

      {/* All projects */}
      <Section pad="lg" className="border-t border-line-subtle">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <WorkCard project={p} aspect={i % 3 === 0 ? 'tall' : 'square'} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBlock title={<>Your project, on the next page.</>} />
    </>
  );
}

function FilterColumn({ label, base, items }: { label: string; base: string; items: { label: string; slug: string }[] }) {
  return (
    <div>
      <p className="label-eyebrow text-ink-quiet">{label}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((it) => (
          <li key={it.slug}>
            <Link
              href={`${base}/${it.slug}`}
              className="inline-flex items-center rounded-xs border border-line-strong px-3 py-1.5 text-[0.8125rem] text-ink-muted transition-colors hover:border-copper hover:text-copper-soft"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
