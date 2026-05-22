import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { capabilities, capabilityBySlug } from '@/content/capabilities';
import { buildMetadata } from '@/lib/seo/buildMetadata';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cap = capabilityBySlug(slug);
  if (!cap) return {};
  return buildMetadata({
    title: cap.seo.title,
    description: cap.seo.description,
    path: `/capabilities/${cap.slug}`,
    ogImage: cap.heroImage,
  });
}

export default async function CapabilityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cap = capabilityBySlug(slug);
  if (!cap) return notFound();

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image src={cap.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/50 to-base" />
        </div>
        <div className="container-base relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Capabilities', href: '/capabilities' },
              { name: cap.title, href: `/capabilities/${cap.slug}` },
            ]}
          />
          <div className="mt-10 max-w-4xl">
            <Eyebrow>Capability</Eyebrow>
            <h1 className="display-1 mt-6 text-balance">{cap.title}</h1>
            <p className="body-lg mt-7 max-w-2xl text-pretty">{cap.tagline}</p>
          </div>
        </div>
      </section>

      <Section pad="md" className="border-t border-line-subtle">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Eyebrow>What it is</Eyebrow>
          <p className="font-display text-[clamp(1.375rem,1rem+1vw,1.875rem)] leading-snug text-ink text-balance">
            {cap.intro}
          </p>
        </div>
      </Section>

      <Section pad="md" className="border-t border-line-subtle">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Eyebrow>What we offer</Eyebrow>
          <ul className="grid gap-3 border-t border-line-subtle">
            {cap.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 border-b border-line-subtle py-3 text-[0.9375rem] text-ink-muted">
                <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-copper" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBlock title={<>Put this capability on your project.</>} />
    </>
  );
}
