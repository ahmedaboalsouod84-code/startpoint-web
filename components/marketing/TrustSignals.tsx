import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { StatBlock } from '@/components/marketing/StatBlock';
import { site } from '@/content/site';

export function TrustSignals() {
  return (
    <section className="border-y border-line-subtle bg-raised/30 py-24 md:py-32">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div className="max-w-2xl">
            <Eyebrow>Track record</Eyebrow>
            <h2 className="display-3 mt-5 text-balance">A studio measured by what it has shipped.</h2>
          </div>
          <p className="body-md max-w-md text-pretty">
            Numbers across {new Date().getFullYear() - site.founded}+ years &mdash; from a Riyadh
            workshop, into showfloors, foyers, and flagships across the GCC.
          </p>
        </div>
        <StatBlock stats={site.stats} />
      </Container>
    </section>
  );
}
