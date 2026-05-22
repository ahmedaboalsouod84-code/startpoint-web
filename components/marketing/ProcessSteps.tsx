import type { ProcessStep } from '@/types/content';
import { Reveal } from '@/components/motion/Reveal';

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-px overflow-hidden border border-line-subtle bg-line-subtle md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal as="li" key={step.no} delay={i * 0.08} className="bg-base">
          <div className="flex h-full flex-col gap-5 p-8 md:p-10">
            <span className="label-eyebrow text-copper">{step.no}</span>
            <h3 className="font-display text-[1.5rem] leading-snug text-ink">{step.title}</h3>
            <p className="body-md">{step.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
