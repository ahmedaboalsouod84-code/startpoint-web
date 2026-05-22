import Link from 'next/link';
import type { Industry } from '@/types/content';
import { cn } from '@/lib/utils/cn';

interface IndustryCardProps {
  industry: Industry;
  className?: string;
}

export function IndustryCard({ industry, className }: IndustryCardProps) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className={cn(
        'group flex h-full flex-col justify-between gap-8 border border-line-subtle bg-raised/40 p-7 transition-colors duration-300 hover:border-copper/60 hover:bg-raised',
        className
      )}
    >
      <div>
        <h3 className="font-display text-[1.375rem] leading-tight text-ink transition-colors duration-300 group-hover:text-copper-soft">
          {industry.title}
        </h3>
        <p className="body-md mt-3">{industry.tagline}</p>
      </div>
      <span className="label-eyebrow inline-flex items-center gap-2 text-ink-quiet">
        Sector overview
        <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" aria-hidden>
          <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      </span>
    </Link>
  );
}
