import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/content';
import { Tag } from '@/components/ui/Tag';
import { cn } from '@/lib/utils/cn';

interface WorkCardProps {
  project: Project;
  className?: string;
  aspect?: 'tall' | 'wide' | 'square';
  index?: number;
}

const aspectMap = {
  tall: 'aspect-[3/4]',
  wide: 'aspect-[16/10]',
  square: 'aspect-[5/4]',
};

export function WorkCard({ project, className, aspect = 'square', index }: WorkCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn('group block', className)}
    >
      <div className={cn('relative overflow-hidden rounded-sm bg-raised', aspectMap[aspect])}>
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/85 via-base/20 to-transparent opacity-90" />
        {typeof index === 'number' && (
          <span className="absolute left-5 top-5 label-eyebrow text-ink-muted">
            {String(index).padStart(2, '0')}
          </span>
        )}
        <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="label-eyebrow text-ink-muted">{project.client} · {project.year}</p>
            <h3 className="mt-2 display-4 text-balance text-ink">{project.title}</h3>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Tag>{project.location}</Tag>
        <Tag>{project.service.replace(/-/g, ' ')}</Tag>
      </div>
    </Link>
  );
}
