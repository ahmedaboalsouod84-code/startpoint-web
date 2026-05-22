import type { Metadata } from 'next';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaBlock } from '@/components/marketing/CtaBlock';
import { Reveal } from '@/components/motion/Reveal';
import { clients } from '@/content/clients';
import { testimonials } from '@/content/testimonials';
import { buildMetadata } from '@/lib/seo/buildMetadata';

export const metadata: Metadata = buildMetadata({
  title: 'Clients — Selected partnerships',
  description: 'A selection of the clients Start Point has built for — across government, banking, energy, luxury, retail, hospitality, and the cultural sector.',
  path: '/clients',
});

export default function ClientsPage() {
  // Group clients by sector for a slightly more interesting layout than a flat grid.
  const sectors = Array.from(new Set(clients.map((c) => c.sector))).sort();
  return (
    <>
      <Section pad="lg">
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Clients', href: '/clients' }]} />
        <div className="mt-8 max-w-3xl">
          <Eyebrow>Clients</Eyebrow>
          <h1 className="display-1 mt-6 text-balance">
            Selected <em className="not-italic text-copper-soft">partnerships.</em>
          </h1>
          <p className="body-lg mt-7 text-pretty">
            A representative sample of the brands and authorities the studio has built for. Full reference list available on request.
          </p>
        </div>
      </Section>

      {sectors.map((sector) => (
        <Section key={sector} pad="md" className="border-t border-line-subtle">
          <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
            <p className="label-eyebrow text-copper">{sector}</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
              {clients.filter((c) => c.sector === sector).map((c) => (
                <li key={c.name} className="font-display text-[1.0625rem] text-ink">{c.name}</li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      <Section pad="lg" className="border-t border-line-subtle">
        <Eyebrow>What clients say</Eyebrow>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <blockquote className="flex h-full flex-col border border-line-subtle bg-raised/30 p-8 md:p-10">
                <span className="font-display text-[2rem] leading-none text-copper">&ldquo;</span>
                <p className="mt-4 font-display text-[1.125rem] leading-snug text-ink text-balance">{t.quote}</p>
                <footer className="mt-6 text-[0.875rem] text-ink-muted">
                  <span className="block text-ink">{t.role}</span>
                  <span className="block text-ink-quiet">{t.organization}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBlock title={<>Become the next case study.</>} />
    </>
  );
}
