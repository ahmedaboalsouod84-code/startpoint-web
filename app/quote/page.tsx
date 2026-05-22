import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { buildMetadata } from '@/lib/seo/buildMetadata';
import { QuoteForm } from './QuoteForm';

export const metadata: Metadata = buildMetadata({
  title: 'Request a quote — Project brief',
  description:
    'Send Start Point a structured project brief. We respond within 24 hours and return a detailed proposal within five working days.',
  path: '/quote',
});

export default function QuotePage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Request a quote', href: '/quote' }]} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Project brief</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            Tell us what you&rsquo;re <em className="not-italic text-copper-soft">building.</em>
          </h1>
          <p className="body-lg mt-7 text-pretty">
            Six fields. Five minutes. A first response in 24 hours, a detailed proposal within five working days for most briefs.
          </p>
        </div>
      </Section>
      <Section pad="lg" className="border-t border-line-subtle">
        <QuoteForm />
      </Section>
    </>
  );
}
