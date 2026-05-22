import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Thank you',
    description: 'Your message has been received. We will reply within one business day.',
    path: '/thank-you',
  }),
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Section pad="lg" size="tight" className="flex min-h-[70vh] items-center">
      <div className="max-w-2xl">
        <Eyebrow>Message received</Eyebrow>
        <h1 className="display-1 mt-6 text-balance">
          We&rsquo;ll be in <em className="not-italic text-copper-soft">touch.</em>
        </h1>
        <p className="body-lg mt-7 text-pretty">
          Your message has reached the studio. A senior project lead will respond within one business day &mdash; usually faster.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/work">See the work while you wait</Button>
          <Button href="/insights" variant="ghost">Read the latest insights</Button>
        </div>
      </div>
    </Section>
  );
}
