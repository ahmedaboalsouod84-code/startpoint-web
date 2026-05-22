import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { WorkCard } from '@/components/marketing/WorkCard';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { projects, projectYears } from '@/content/projects';
import { buildMetadata } from '@/lib/seo/buildMetadata';

interface PageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  return projectYears().map((year) => ({ year: String(year) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { year } = await params;
  return buildMetadata({
    title: `${year} work archive`,
    description: `Projects from Start Point delivered in ${year}.`,
    path: `/work/by-year/${year}`,
  });
}

export default async function ByYearPage({ params }: PageProps) {
  const { year } = await params;
  const y = parseInt(year, 10);
  if (Number.isNaN(y)) return notFound();
  const items = projects.filter((p) => p.year === y);
  if (items.length === 0) return notFound();

  return (
    <>
      <Section pad="lg">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Work', href: '/work' },
            { name: year, href: `/work/by-year/${year}` },
          ]}
        />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>By year</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">{year}</h1>
        </div>
      </Section>
      <Section pad="lg" className="border-t border-line-subtle">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {items.map((p, i) => (
            <WorkCard key={p.slug} project={p} aspect={i % 3 === 0 ? 'tall' : 'square'} index={i + 1} />
          ))}
        </div>
      </Section>
      <CtaBlock title={<>Want to be in next year&rsquo;s archive?</>} />
    </>
  );
}
