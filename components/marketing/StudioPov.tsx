import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/motion/Reveal';

export function StudioPov() {
  return (
    <section className="relative py-24 md:py-36">
      <Container size="tight">
        <Reveal>
          <Eyebrow>Studio POV</Eyebrow>
          <blockquote className="mt-8">
            <p className="display-2 text-balance font-display leading-[1.05]">
              <span className="text-copper">&ldquo;</span>
              We don&rsquo;t separate the studio from the workshop. The senior designer is
              standing next to the joiner when the cut list is signed off &mdash; that&rsquo;s
              why our work looks the way it does, and why it lands on schedule.
              <span className="text-copper">&rdquo;</span>
            </p>
            <footer className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-line-strong" aria-hidden />
              <cite className="not-italic">
                <span className="block font-display text-[1.0625rem] text-ink">Founder &amp; Creative Director</span>
                <span className="label-eyebrow mt-1 block text-ink-quiet">Start Point, Riyadh</span>
              </cite>
            </footer>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
