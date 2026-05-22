import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProcessSteps } from '@/components/marketing/ProcessSteps';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = buildMetadata({
  title: 'How we work — Our process',
  description:
    'Six stages from brief to aftercare — how Start Point runs a project. One senior lead, end to end.',
  path: '/process',
});

const fullProcess = [
  { no: '01', title: 'Brief', body: 'A 60-minute discovery on objective, audience, footprint, budget, timeline, and reference.' },
  { no: '02', title: 'Concept', body: 'Two design routes presented as production-grade 3D within 7-10 working days for sign-off.' },
  { no: '03', title: 'Engineer', body: 'Drawings, sample approvals, finish library, structural sign-off, cut lists.' },
  { no: '04', title: 'Build', body: 'Workshop fabrication, print, electrics — self-performed, photo-documented per stage.' },
  { no: '05', title: 'Install', body: 'Certified in-house crews on site. Snag-walked clean before doors. On-stand support for the run.' },
  { no: '06', title: 'Aftercare', body: 'Dismantle, storage, redeployment, or recycle — and a post-project review for what to do better next time.' },
];

export default function ProcessPage() {
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Process', href: '/process' }]} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>How we work</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            Six stages. <em className="not-italic text-copper-soft">One project lead.</em>
          </h1>
          <p className="body-lg mt-7 text-pretty">
            Every engagement moves through the same rhythm. No relay-race handoffs, no &ldquo;account team will get back to you,&rdquo; no surprise change orders.
          </p>
        </div>
      </Section>
      <Section pad="lg" className="border-t border-line-subtle">
        <ProcessSteps steps={fullProcess} />
      </Section>
      <CtaBlock title={<>Run a project the way it should run.</>} />
    </>
  );
}
