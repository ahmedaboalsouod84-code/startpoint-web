import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo/buildMetadata';
import { site } from '@/content/site';

export const metadata: Metadata = buildMetadata({
  title: 'Careers — Build with us at Start Point',
  description: 'Open roles and ongoing recruitment at Start Point in Riyadh — design, fabrication, production, project management.',
  path: '/about/careers',
});

const roles = [
  { team: 'Studio', title: 'Senior 3D Visualisation Artist', location: 'Riyadh — on-site' },
  { team: 'Workshop', title: 'CNC Operator (3-axis)', location: 'Riyadh — on-site' },
  { team: 'Production', title: 'Project Manager — Exhibitions', location: 'Riyadh — on-site' },
  { team: 'Studio', title: 'Industrial Designer', location: 'Riyadh — on-site' },
];

export default function CareersPage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Careers', href: '/about/careers' },
          ]}
        />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Careers</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">Build with us.</h1>
          <p className="body-lg mt-7 text-pretty">
            We hire makers — people who want to see what they designed get cut, sprayed, installed, and photographed at the show.
            If that&rsquo;s you, send us your portfolio.
          </p>
        </div>
      </Section>
      <Section pad="lg" className="border-t border-line-subtle">
        <Eyebrow>Open roles</Eyebrow>
        <ul className="mt-8 divide-y divide-line-subtle border-y border-line-subtle">
          {roles.map((r) => (
            <li key={r.title} className="flex flex-wrap items-center justify-between gap-6 py-7">
              <div>
                <p className="label-eyebrow text-ink-quiet">{r.team}</p>
                <p className="mt-2 font-display text-[1.25rem] text-ink">{r.title}</p>
                <p className="mt-1 text-[0.875rem] text-ink-muted">{r.location}</p>
              </div>
              <Button variant="ghost" href={`mailto:${site.contact.email}?subject=${encodeURIComponent('Application: ' + r.title)}`}>
                Apply
              </Button>
            </li>
          ))}
        </ul>
        <p className="body-md mt-10">
          Don&rsquo;t see a role that matches? Email{' '}
          <a href={`mailto:${site.contact.email}`} className="text-copper hover:text-copper-soft">{site.contact.email}</a>{' '}
          with your portfolio and a short note about what you make.
        </p>
      </Section>
    </>
  );
}
