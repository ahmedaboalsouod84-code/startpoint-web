import type { ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { cn } from '@/lib/utils/cn';

interface CtaBlockProps {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
}

export function CtaBlock({
  eyebrow = 'Start a project',
  title,
  body,
  primary = { label: 'Request a quote', href: '/quote' },
  secondary = { label: 'Talk to the studio', href: '/contact' },
  className,
}: CtaBlockProps) {
  return (
    <section className={cn('relative overflow-hidden border-y border-line-subtle bg-raised/40 py-24 md:py-32', className)}>
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="display-2 mt-6 text-balance">{title}</h2>
            {body && <p className="body-lg mt-7 max-w-2xl text-pretty">{body}</p>}
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Button href={primary.href} size="lg">{primary.label}</Button>
            <Button href={secondary.href} variant="ghost" size="lg">{secondary.label}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
