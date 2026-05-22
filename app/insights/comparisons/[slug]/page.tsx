import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { JsonLd } from '@/components/seo/JsonLd';
import { insights, insightBySlug } from '@/content/insights';
import { buildMetadata } from '@/lib/seo/buildMetadata';
import { articleSchema } from '@/lib/seo/schema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.filter((i) => i.kind === 'comparison').map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insightBySlug(slug);
  if (!insight || insight.kind !== 'comparison') return {};
  return buildMetadata({
    title: insight.seo.title,
    description: insight.seo.description,
    path: `/insights/comparisons/${insight.slug}`,
    ogImage: insight.heroImage,
  });
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = insightBySlug(slug);
  if (!insight || insight.kind !== 'comparison') return notFound();

  return (
    <>
      <Section pad="lg">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Insights', href: '/insights' },
            { name: 'Comparisons', href: '/insights' },
            { name: insight.title, href: `/insights/comparisons/${insight.slug}` },
          ]}
        />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Comparison</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">{insight.title}</h1>
          <p className="body-lg mt-7 text-pretty">{insight.excerpt}</p>
          <p className="mt-8 text-[0.875rem] text-ink-quiet">{insight.author} &middot; {insight.publishedAt} &middot; {insight.readingMinutes} min read</p>
        </div>
      </Section>
      <Section bleed pad="sm" className="border-t border-line-subtle">
        <div className="relative aspect-[16/8] w-full overflow-hidden">
          <Image src={insight.heroImage} alt={insight.title} fill sizes="100vw" className="object-cover" />
        </div>
      </Section>
      <Section pad="lg" size="tight">
        {insight.tldr && (
          <div className="mb-12 border-l-2 border-copper bg-raised/40 px-6 py-5">
            <p className="label-eyebrow text-copper">In short</p>
            <p className="mt-3 body-lg text-ink text-balance">{insight.tldr}</p>
          </div>
        )}
        <article className="space-y-6 body-lg max-w-none">
          <p>Full comparison body will live here. This page renders the comparison shell, hero, schema, and TL;DR — body to be authored.</p>
        </article>
      </Section>
      <CtaBlock title={<>Need help making the call?</>} />
      <JsonLd data={articleSchema(insight)} />
    </>
  );
}
