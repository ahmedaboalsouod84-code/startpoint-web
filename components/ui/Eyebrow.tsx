import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

export function Eyebrow({ children, className, mark = true }: { children: ReactNode; className?: string; mark?: boolean }) {
  return (
    <p className={cn('label-eyebrow inline-flex items-center gap-2', className)}>
      {mark && <span aria-hidden className="h-[1px] w-6 bg-copper" />}
      <span>{children}</span>
    </p>
  );
}
