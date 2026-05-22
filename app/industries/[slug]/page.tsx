import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { WorkCard } from '@/components/marketing/WorkCard';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { RelatedGrid } from '@/components/marketing/RelatedGrid';
import { industries, industryBySlug } from '@/content/industries';
import { serviceBySlug } from '@/content/services';
import { projectsByIndustry } from '@/content/projects';
import { buildMetadata } from '@/lib/seo/buildMetadata';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.seo.title,
    description: industry.seo.description,
    path: `/industries/${industry.slug}`,
    ogImage: industry.heroImage,
  });
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industryBySlug(slug);
  if (!industry) return notFound();

  const relevantServices = industry.relevantServices
    .map((s) => serviceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const caseStudies = projectsByIndustry(industry.slug);

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image src={industry.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/50 to-base" />
        </div>
        <div className="container-base relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Industries', href: '/industries' },
              { name: industry.title, href: `/industries/${industry.slug}` },
            ]}
          />
          <div className="mt-10 max-w-4xl">
            <Eyebrow>Industry</Eyebrow>
            <h1 className="display-1 mt-6 text-balance">{industry.title}</h1>
            <p className="body-lg mt-7 max-w-2xl text-pretty">{industry.tagline}</p>
          </div>
        </div>
      </section>

      <Section pad="md" className="border-t border-line-subtle">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Eyebrow>Sector understanding</Eyebrow>
          <p className="font-display text-[clamp(1.25rem,1rem+1vw,1.625rem)] leading-snug text-ink text-balance">
            {industry.understanding}
          </p>
        </div>
      </Section>

      {industry.intro && (
        <Section pad="md" className="border-t border-line-subtle">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <Eyebrow>What we deliver</Eyebrow>
            <p className="body-lg text-pretty">{industry.intro}</p>
          </div>
        </Section>
      )}

      {relevantServices.length > 0 && (
        <Section pad="md" className="border-t border-line-subtle">
          <RelatedGrid
            title="Relevant services"
            items={relevantServices.map((s) => ({ title: s.title, href: `/services/${s.slug}`, meta: s.tagline }))}
          />
        </Section>
      )}

      {caseStudies.length > 0 && (
        <Section pad="md" className="border-t border-line-subtle">
          <div className="mb-10">
            <Eyebrow>Case studies</Eyebrow>
            <h2 className="display-3 mt-5">Recent work in this sector.</h2>
          </div>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {caseStudies.map((p, i) => (
              <WorkCard key={p.slug} project={p} aspect={i % 2 === 0 ? 'tall' : 'square'} index={i + 1} />
            ))}
          </div>
        </Section>
      )}

      <CtaBlock title={<>Brief us on a {industry.title.toLowerCase()} project.</>} />
    </>
  );
}
