import Link from 'next/link';

interface RelatedGridProps {
  title?: string;
  items: { title: string; href: string; meta?: string }[];
}

export function RelatedGrid({ title = 'Related', items }: RelatedGridProps) {
  if (!items?.length) return null;
  return (
    <div>
      <p className="label-eyebrow">{title}</p>
      <ul className="mt-6 grid gap-px overflow-hidden border border-line-subtle bg-line-subtle sm:grid-cols-2">
        {items.map((it) => (
          <li key={it.href} className="bg-base">
            <Link href={it.href} className="group flex items-center justify-between gap-4 p-6 transition-colors hover:bg-raised">
              <div>
                <p className="font-display text-[1.0625rem] leading-snug text-ink transition-colors group-hover:text-copper-soft">
                  {it.title}
                </p>
                {it.meta && <p className="mt-2 label-eyebrow text-ink-quiet">{it.meta}</p>}
              </div>
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-ink-quiet transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-copper" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
