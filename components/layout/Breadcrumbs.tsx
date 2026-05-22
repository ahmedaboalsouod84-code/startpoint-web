import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { cn } from '@/lib/utils/cn';

interface Crumb {
  name: string;
  href: string;
}

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className={cn('label-eyebrow flex flex-wrap items-center gap-2 text-ink-quiet', className)}>
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={c.href} className="inline-flex items-center gap-2">
              {!isLast ? (
                <Link href={c.href} className="transition-colors hover:text-copper">{c.name}</Link>
              ) : (
                <span className="text-ink">{c.name}</span>
              )}
              {!isLast && <span aria-hidden className="text-ink-quiet">/</span>}
            </span>
          );
        })}
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
