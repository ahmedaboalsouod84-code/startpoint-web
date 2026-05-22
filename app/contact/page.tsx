import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';
import { buildMetadata } from '@/lib/seo/buildMetadata';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Talk to the studio',
  description:
    'Get in touch with Start Point in Riyadh. Studio enquiries, press, careers, and partnership opportunities.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            Talk to the <em className="not-italic text-copper-soft">studio.</em>
          </h1>
          <p className="body-lg mt-7 text-pretty">
            For project enquiries, send us a brief. For press, careers, and partnerships, the email below reaches the right desk within one business day.
          </p>
        </div>
      </Section>

      <Section pad="lg" className="border-t border-line-subtle">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-10">
            <div>
              <Eyebrow>Email</Eyebrow>
              <p className="mt-4 font-display text-[1.5rem] text-ink">
                <a href={`mailto:${site.contact.email}`} className="hover:text-copper">{site.contact.email}</a>
              </p>
            </div>
            <div>
              <Eyebrow>Phone</Eyebrow>
              <p className="mt-4 font-display text-[1.5rem] text-ink">
                <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="hover:text-copper">{site.contact.phone}</a>
              </p>
            </div>
            <div>
              <Eyebrow>Studio</Eyebrow>
              <address className="mt-4 not-italic font-display text-[1.125rem] leading-snug text-ink">
                {site.hq.line1}<br />
                {site.hq.line2}<br />
                {site.hq.country}
              </address>
            </div>
            <div>
              <Eyebrow>Project briefs</Eyebrow>
              <p className="body-md mt-4">For a structured project brief use the quote form.</p>
              <div className="mt-5">
                <Button href="/quote" variant="ghost">Request a quote</Button>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
