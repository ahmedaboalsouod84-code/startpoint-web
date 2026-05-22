import { clients } from '@/content/clients';
import { cn } from '@/lib/utils/cn';

export function LogoMarquee({ className }: { className?: string }) {
  const doubled = [...clients, ...clients];
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent" aria-hidden />
      <div className="animate-marquee flex w-max gap-12 py-2" role="list">
        {doubled.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            role="listitem"
            className="flex h-12 shrink-0 items-center border-x border-line-subtle px-6"
          >
            <span className="whitespace-nowrap font-display text-[1.0625rem] tracking-tight text-ink-muted">
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
