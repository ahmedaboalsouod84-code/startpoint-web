import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TrustSignals } from '@/components/marketing/TrustSignals';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { site } from '@/content/site';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = buildMetadata({
  title: 'About — A Riyadh creative production studio',
  description:
    'Start Point is a Riyadh-based creative production and fabrication studio building exhibition booths, custom stands, packaging, and brand environments for KSA and the GCC.',
  path: '/about',
});

const subnav = [
  { label: 'Vision & mission', href: '/about/vision-mission' },
  { label: 'Leadership', href: '/about/leadership' },
  { label: 'Studio', href: '/about/studio' },
  { label: 'Careers', href: '/about/careers' },
  { label: 'Press', href: '/about/press' },
];

export default function AboutPage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />
        <div className="mt-8 max-w-4xl">
          <Eyebrow>About</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            A studio and a workshop, <em className="not-italic text-copper-soft">under one roof.</em>
          </h1>
          <p className="body-lg mt-7 text-pretty">
            We started in {site.founded} with one belief: brand environments live or die at the bench, not in the brief.
            So we kept the design studio and the workshop in the same building, and we&rsquo;ve been
            building from that conviction ever since.
          </p>
        </div>
        <ul className="mt-14 flex flex-wrap gap-3">
          {subnav.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="inline-flex items-center rounded-xs border border-line-strong px-4 py-2 text-[0.875rem] text-ink-muted transition-colors hover:border-copper hover:text-copper-soft"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section pad="lg" className="border-t border-line-subtle">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Eyebrow>Studio principle</Eyebrow>
          <p className="font-display text-[clamp(1.5rem,1rem+1.5vw,2.25rem)] leading-snug text-ink text-balance">
            The brief gets pressure-tested by the people who will build it, on the day it&rsquo;s signed off. That
            is the entire reason our work lands the way it does.
          </p>
        </div>
      </Section>

      <Section bleed pad="sm" className="border-t border-line-subtle">
        <div className="relative aspect-[16/8] w-full overflow-hidden">
          <Image src="/media/asset-09.jpeg" alt="Inside the Start Point Riyadh workshop" fill sizes="100vw" className="object-cover" />
        </div>
      </Section>

      <TrustSignals />
      <CtaBlock title={<>Start at the beginning.</>} />
    </>
  );
}
