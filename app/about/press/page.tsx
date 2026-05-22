import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo/buildMetadata';
import { site } from '@/content/site';

export const metadata: Metadata = buildMetadata({
  title: 'Press — Start Point Riyadh',
  description: 'Press resources for Start Point — brand assets, project sheets, and press enquiries.',
  path: '/about/press',
});

export default function PressPage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Press', href: '/about/press' },
          ]}
        />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Press</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">Press &amp; media.</h1>
          <p className="body-lg mt-7 text-pretty">
            For project comment, founder interviews, brand asset requests, or facility visits, email our press contact below — we respond within one business day.
          </p>
        </div>
      </Section>
      <Section pad="lg" className="border-t border-line-subtle">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Press contact</Eyebrow>
            <p className="mt-6 font-display text-[1.5rem] text-ink">{site.contact.email}</p>
            <p className="mt-2 text-[0.9375rem] text-ink-muted">{site.contact.phone}</p>
            <div className="mt-8">
              <Button href={`mailto:${site.contact.email}?subject=${encodeURIComponent('Press enquiry')}`}>Email press desk</Button>
            </div>
          </div>
          <div>
            <Eyebrow>Brand assets</Eyebrow>
            <p className="body-lg mt-6 text-pretty">Brand wordmark, monogram, and project image library available on request — please name the publication and intended use.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
