import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Tag } from '@/components/ui/Tag';
import { ProcessSteps } from '@/components/marketing/ProcessSteps';
import { FaqList } from '@/components/marketing/FaqList';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { WorkCard } from '@/components/marketing/WorkCard';
import { RelatedGrid } from '@/components/marketing/RelatedGrid';
import { JsonLd } from '@/components/seo/JsonLd';
import { services, serviceBySlug } from '@/content/services';
import { projectBySlug } from '@/content/projects';
import { buildMetadata } from '@/lib/seo/buildMetadata';
import { faqSchema, serviceSchema } from '@/lib/seo/schema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
    ogImage: service.heroImage,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return notFound();

  const relatedProjects = service.relatedProjects
    .map((s) => projectBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const relatedServices = service.relatedServices
    .map((s) => serviceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image src={service.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/40 to-base" />
        </div>
        <div className="container-base relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: service.shortTitle ?? service.title, href: `/services/${service.slug}` },
            ]}
          />
          <div className="mt-10 max-w-4xl">
            <Eyebrow>Service</Eyebrow>
            <h1 className="display-1 mt-6 text-balance">{service.title}</h1>
            <p className="body-lg mt-7 max-w-2xl text-pretty">{service.tagline}</p>
          </div>
        </div>
      </section>

      {/* What it is */}
      <Section pad="md" className="border-t border-line-subtle">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Eyebrow>What it is</Eyebrow>
          <p className="font-display text-[clamp(1.375rem,1rem+1vw,1.875rem)] leading-snug text-ink text-balance">
            {service.intro}
          </p>
        </div>
      </Section>

      {/* Our approach */}
      <Section pad="md" className="border-t border-line-subtle">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Eyebrow>Our approach</Eyebrow>
          <ol className="grid gap-0 border-t border-line-subtle">
            {service.approach.map((point, i) => (
              <li key={i} className="flex items-start gap-6 border-b border-line-subtle py-6">
                <span className="label-eyebrow shrink-0 text-copper">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-display text-[1.0625rem] leading-snug md:text-[1.1875rem]">{point}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Capabilities & Materials */}
      <Section pad="md" className="border-t border-line-subtle">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>Capabilities</Eyebrow>
            <ul className="mt-8 grid gap-3">
              {service.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 border-b border-line-subtle pb-3 text-[0.9375rem] text-ink-muted">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-copper" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
          {service.materials.length > 0 && (
            <div>
              <Eyebrow>Materials &amp; finishes</Eyebrow>
              <ul className="mt-8 grid gap-3">
                {service.materials.map((m) => (
                  <li key={m} className="flex items-start gap-3 border-b border-line-subtle pb-3 text-[0.9375rem] text-ink-muted">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-copper" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      {/* Related case studies */}
      {relatedProjects.length > 0 && (
        <Section pad="md" className="border-t border-line-subtle">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Related case studies</Eyebrow>
              <h2 className="display-3 mt-5">Built recently.</h2>
            </div>
          </div>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {relatedProjects.map((p, i) => (
              <WorkCard key={p.slug} project={p} aspect={i % 2 === 0 ? 'tall' : 'square'} index={i + 1} />
            ))}
          </div>
        </Section>
      )}

      {/* Process */}
      <Section pad="md" className="border-t border-line-subtle">
        <div className="mb-10">
          <Eyebrow>Process</Eyebrow>
          <h2 className="display-3 mt-5">How a {service.shortTitle?.toLowerCase() ?? 'project'} project runs.</h2>
        </div>
        <ProcessSteps steps={service.process} />
      </Section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <Section pad="md" className="border-t border-line-subtle">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <Eyebrow>FAQs</Eyebrow>
              <h2 className="display-3 mt-5 text-balance">Common questions.</h2>
            </div>
            <FaqList items={service.faqs} />
          </div>
          <JsonLd data={faqSchema(service.faqs)} />
        </Section>
      )}

      {/* Quick answers */}
      {service.quickAnswers.length > 0 && (
        <Section pad="md" className="border-t border-line-subtle">
          <Eyebrow>Quick answers</Eyebrow>
          <dl className="mt-8 grid gap-px overflow-hidden border border-line-subtle bg-line-subtle md:grid-cols-3">
            {service.quickAnswers.map((q) => (
              <div key={q.q} className="bg-base p-7">
                <dt className="label-eyebrow text-ink-quiet">{q.q}</dt>
                <dd className="mt-3 font-display text-[1.125rem] leading-snug text-ink">{q.a}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <Section pad="md" className="border-t border-line-subtle">
          <RelatedGrid
            title="Related services"
            items={relatedServices.map((s) => ({ title: s.title, href: `/services/${s.slug}`, meta: s.tagline }))}
          />
        </Section>
      )}

      <CtaBlock
        title={<>Brief us on your next {service.shortTitle?.toLowerCase() ?? service.title.toLowerCase()} project.</>}
        body="Tell us the show, the date, the footprint, and a budget range. We'll come back with a real plan within five working days."
      />

      <JsonLd data={serviceSchema(service)} />
    </>
  );
}
