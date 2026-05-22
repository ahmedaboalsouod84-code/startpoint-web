import Image from 'next/image';
import Link from 'next/link';
import type { Insight } from '@/types/content';
import { Tag } from '@/components/ui/Tag';
import { cn } from '@/lib/utils/cn';

const kindLabel: Record<Insight['kind'], string> = {
  article: 'Article',
  guide: 'Guide',
  comparison: 'Comparison',
};

export function InsightCard({ insight, className }: { insight: Insight; className?: string }) {
  const href =
    insight.kind === 'guide'
      ? `/insights/guides/${insight.slug}`
      : insight.kind === 'comparison'
        ? `/insights/comparisons/${insight.slug}`
        : `/insights/${insight.slug}`;
  return (
    <Link href={href} className={cn('group block', className)}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
        <Image
          src={insight.heroImage}
          alt={insight.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-[1100ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-base/10 to-transparent" />
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Tag>{kindLabel[insight.kind]}</Tag>
        <Tag>{insight.readingMinutes} min</Tag>
      </div>
      <h3 className="mt-4 font-display text-[1.25rem] leading-snug text-ink transition-colors duration-300 group-hover:text-copper-soft">
        {insight.title}
      </h3>
      <p className="body-md mt-3 text-pretty">{insight.excerpt}</p>
    </Link>
  );
}
