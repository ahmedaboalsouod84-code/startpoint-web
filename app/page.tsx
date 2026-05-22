import { Hero } from '@/components/marketing/Hero';
import { LogoMarquee } from '@/components/marketing/LogoMarquee';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { CapabilityCard } from '@/components/marketing/CapabilityCard';
import { WorkCard } from '@/components/marketing/WorkCard';
import { IndustryCard } from '@/components/marketing/IndustryCard';
import { InsightCard } from '@/components/marketing/InsightCard';
import { ProcessSteps } from '@/components/marketing/ProcessSteps';
import { StudioPov } from '@/components/marketing/StudioPov';
import { TrustSignals } from '@/components/marketing/TrustSignals';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { Reveal } from '@/components/motion/Reveal';
import { services } from '@/content/services';
import { projects } from '@/content/projects';
import { industries } from '@/content/industries';
import { insights } from '@/content/insights';
import { site } from '@/content/site';
import { buildMetadata } from '@/lib/seo/buildMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({
  title: `${site.name} — A Riyadh creative production studio`,
  description: site.shortDescription,
  path: '/',
});

// Curated capability overview — six pillars that map to the most-asked-for service buckets.
const capabilityOverview = [
  {
    no: '01',
    title: 'Exhibition booths & custom stands',
    body: 'Hero pavilions, double-deck stands, conference foyers — designed and fabricated in Riyadh, installed across KSA and the GCC.',
    href: '/services/exhibition-booths-riyadh',
  },
  {
    no: '02',
    title: 'Custom fabrication & joinery',
    body: 'A 2,400 m² workshop running CNC, spray, metal fab, and finishing under one roof.',
    href: '/services/custom-fabrication',
  },
  {
    no: '03',
    title: 'Packaging manufacturing',
    body: 'Rigid set-up boxes, premium PR kits, and short-run launches with sample-first prototyping.',
    href: '/services/packaging-manufacturing',
  },
  {
    no: '04',
    title: 'Branded installations',
    body: 'Sculptural pieces, sensory environments, and hero installations for flagships and foyers.',
    href: '/services/branded-installations',
  },
  {
    no: '05',
    title: 'Event activations',
    body: 'Sampling, launches, sponsor activations and festival programmes from brief to on-day crew.',
    href: '/services/event-activations',
  },
  {
    no: '06',
    title: '3D visualisation',
    body: 'Production-grade visuals that close approvals before a panel is cut.',
    href: '/services/3d-visualization',
  },
];

const processSnapshot = [
  { no: '01', title: 'Brief', body: 'A 60-minute discovery on objective, audience, footprint, budget, and timeline.' },
  { no: '02', title: 'Design', body: 'Concept and 3D visualisation, modelled in production geometry.' },
  { no: '03', title: 'Build', body: 'Workshop fabrication, print, finishing — self-performed in Riyadh.' },
  { no: '04', title: 'Install', body: 'Certified install crews on site, plus on-stand support for the show run.' },
];

export default function HomePage() {
  const featured = projects.slice(0, 4);
  const featuredIndustries = industries.slice(0, 6);
  const featuredInsights = insights.slice(0, 3);

  return (
    <>
      {/* 1. Hero */}
      <Hero
        eyebrow="Riyadh, Saudi Arabia"
        title={
          <>
            We build the brand moments
            <br />
            that <em className="not-italic text-copper-soft">happen in the room.</em>
          </>
        }
        intro="Start Point is a Riyadh creative production studio designing and fabricating exhibition booths, custom stands, packaging, branded environments, and live activations — for the brands defining Saudi Arabia's next decade."
        primaryCta={{ label: 'See the work', href: '/work' }}
        secondaryCta={{ label: 'Talk to the studio', href: '/contact' }}
        image="/media/asset-03.jpeg"
        imageAlt="Walnut joinery installation by Start Point"
        variant="home"
      />

      {/* 2. Client logo marquee */}
      <Section pad="sm" bleed innerClassName="">
        <div className="border-y border-line-subtle bg-raised/40 py-10">
          <div className="container-wide mb-6 flex flex-wrap items-baseline justify-between gap-4">
            <Eyebrow>Trusted by</Eyebrow>
            <p className="text-[0.8125rem] text-ink-quiet">Selected clients across KSA &amp; GCC</p>
          </div>
          <LogoMarquee />
        </div>
      </Section>

      {/* 3. Capabilities overview */}
      <Section id="capabilities" pad="lg">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="display-2 mt-6 text-balance">
              One studio. Concept to install.
            </h2>
            <p className="body-lg mt-7 max-w-md text-pretty">
              The studio and the workshop are the same building. Decisions are pressure-tested by makers from day one — that&rsquo;s why our work lands.
            </p>
            <div className="mt-8">
              <Button href="/services" variant="ghost">All services</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {capabilityOverview.map((cap) => (
              <CapabilityCard key={cap.no} {...cap} />
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Featured work */}
      <Section pad="lg" className="border-t border-line-subtle">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div className="max-w-xl">
            <Eyebrow>Featured work</Eyebrow>
            <h2 className="display-2 mt-6 text-balance">Recent builds.</h2>
          </div>
          <Button href="/work" variant="ghost">All projects</Button>
        </div>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <WorkCard project={p} aspect={i % 2 === 0 ? 'tall' : 'square'} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. Process snapshot */}
      <Section pad="lg" className="border-t border-line-subtle">
        <div className="mb-12 grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-end">
          <div>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="display-2 mt-6 text-balance">Four stages. One team.</h2>
          </div>
          <p className="body-lg max-w-2xl text-pretty">
            Every project moves through the same four-stage rhythm. No relay-race handoffs. One senior project lead, end to end.
          </p>
        </div>
        <ProcessSteps steps={processSnapshot} />
        <div className="mt-12">
          <Button href="/process" variant="link">See the full process</Button>
        </div>
      </Section>

      {/* 6. Industries served */}
      <Section pad="lg" className="border-t border-line-subtle">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div className="max-w-xl">
            <Eyebrow>Industries</Eyebrow>
            <h2 className="display-2 mt-6 text-balance">Sectors we build for.</h2>
          </div>
          <Button href="/industries" variant="ghost">All industries</Button>
        </div>
        <div className="grid gap-px overflow-hidden border border-line-subtle bg-line-subtle md:grid-cols-2 lg:grid-cols-3">
          {featuredIndustries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.04}>
              <IndustryCard industry={ind} className="h-full border-0" />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. Insights feature */}
      <Section pad="lg" className="border-t border-line-subtle">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div className="max-w-xl">
            <Eyebrow>Insights</Eyebrow>
            <h2 className="display-2 mt-6 text-balance">Notes from the workshop.</h2>
          </div>
          <Button href="/insights" variant="ghost">All insights</Button>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredInsights.map((ins, i) => (
            <Reveal key={ins.slug} delay={i * 0.08}>
              <InsightCard insight={ins} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8. Studio POV */}
      <StudioPov />

      {/* 9. Trust signals */}
      <TrustSignals />

      {/* 10. CTA */}
      <CtaBlock
        title={
          <>
            Brief us once.
            <br />
            We&rsquo;ll handle the room.
          </>
        }
        body="A first response within 24 hours. A detailed proposal within five working days for most briefs."
      />
    </>
  );
}
