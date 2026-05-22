import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface CapabilityCardProps {
  no: string;
  title: string;
  body: string;
  href: string;
  className?: string;
}

export function CapabilityCard({ no, title, body, href, className }: CapabilityCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col gap-6 border-t border-line-subtle py-10 transition-colors duration-300 hover:border-copper',
        className
      )}
    >
      <div className="flex items-baseline justify-between">
        <span className="label-eyebrow text-ink-quiet">{no}</span>
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 -translate-x-1 text-ink-quiet opacity-0 transition-all duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-0 group-hover:text-copper group-hover:opacity-100"
          fill="none"
          aria-hidden
        >
          <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className="display-4 text-balance transition-colors duration-300 group-hover:text-copper-soft">
        {title}
      </h3>
      <p className="body-md text-pretty">{body}</p>
    </Link>
  );
}
