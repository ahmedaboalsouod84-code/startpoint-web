import { Reveal } from '@/components/motion/Reveal';

interface Stat {
  value: string;
  label: string;
}

export function StatBlock({ stats }: { stats: readonly Stat[] | Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden border border-line-subtle bg-line-subtle md:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal as="div" key={s.label} delay={i * 0.06} className="bg-base">
          <div className="flex flex-col gap-2 p-7 md:p-9">
            <dt className="label-eyebrow text-ink-quiet">{s.label}</dt>
            <dd className="font-display text-[clamp(1.75rem,1rem+2vw,2.75rem)] leading-none tracking-tight text-ink">
              {s.value}
            </dd>
          </div>
        </Reveal>
      ))}
    </dl>
  );
}
