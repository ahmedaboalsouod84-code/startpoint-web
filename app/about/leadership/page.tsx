import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = buildMetadata({
  title: 'Leadership — Start Point',
  description: 'The leadership team behind Start Point — Riyadh-based creative production and fabrication.',
  path: '/about/leadership',
});

// Placeholder leadership — replace with real team bios when delivered.
const leaders = [
  { name: 'Founder & Creative Director', role: 'Creative leadership across studio + workshop', bio: 'Sets the design quality bar, leads pitch creative on hero projects, and chairs every concept review.' },
  { name: 'Managing Director', role: 'Operations & commercial leadership', bio: 'Runs project delivery, workshop scheduling, and commercial relationships across KSA and the GCC.' },
  { name: 'Head of Production', role: 'Workshop & fabrication leadership', bio: 'Owns the workshop floor — cut quality, finish standards, install crew readiness.' },
  { name: 'Head of Studio', role: 'Design & 3D leadership', bio: 'Leads industrial design, brand identity systems, and the 3D visualisation team.' },
];

export default function LeadershipPage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Leadership', href: '/about/leadership' },
          ]}
        />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Leadership</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">The people in the room.</h1>
        </div>
      </Section>
      <Section pad="lg" className="border-t border-line-subtle">
        <ul className="grid gap-px overflow-hidden border border-line-subtle bg-line-subtle md:grid-cols-2">
          {leaders.map((l) => (
            <li key={l.name} className="bg-base p-8 md:p-12">
              <div className="aspect-[5/6] w-full bg-elevated" aria-hidden />
              <h2 className="mt-8 font-display text-[1.5rem] leading-snug text-ink">{l.name}</h2>
              <p className="label-eyebrow mt-2 text-ink-quiet">{l.role}</p>
              <p className="body-md mt-5">{l.bio}</p>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBlock title={<>Talk to the leadership team.</>} primary={{ label: 'Get in touch', href: '/contact' }} />
    </>
  );
}
