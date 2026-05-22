import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-xs border border-line-strong px-2.5 py-1 text-[0.6875rem] uppercase tracking-[0.14em] text-ink-muted',
        className
      )}
    >
      {children}
    </span>
  );
}
