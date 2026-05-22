import { cn } from '@/lib/utils/cn';

export function Logo({ className, monogramOnly = false }: { className?: string; monogramOnly?: boolean }) {
  if (monogramOnly) {
    return (
      <span
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line-strong text-copper',
          className
        )}
        aria-label="Start Point"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path d="M4 19 L20 5 M20 19 L4 5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </span>
    );
  }
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)} aria-label="Start Point">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-copper" fill="none" aria-hidden>
        <path d="M4 19 L20 5 M20 19 L4 5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="font-display text-[1.0625rem] tracking-tight text-ink">Start Point</span>
    </span>
  );
}
