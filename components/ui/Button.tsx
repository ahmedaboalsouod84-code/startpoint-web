import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type Variant = 'primary' | 'ghost' | 'link';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = BaseProps & ComponentProps<'button'> & { href?: undefined };
type ButtonAsLink = BaseProps & { href: string } & Omit<ComponentProps<typeof Link>, 'href'>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium leading-none transition-[color,background,border,transform] duration-300 ease-[var(--ease-out-soft)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50';

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-[0.8125rem]',
  md: 'h-11 px-5 text-[0.875rem]',
  lg: 'h-13 px-6 text-[0.9375rem]',
};

const variants: Record<Variant, string> = {
  primary:
    'rounded-sm bg-copper text-base hover:bg-copper-soft active:translate-y-[1px]',
  ghost:
    'rounded-sm border border-line-strong text-ink hover:border-copper hover:text-copper-soft',
  link:
    'h-auto px-0 text-ink hover:text-copper underline-offset-[6px] hover:underline decoration-copper/60 decoration-1',
};

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, sizes[size], variants[variant], className);
  if ('href' in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
        {variant !== 'link' && <Arrow />}
      </Link>
    );
  }
  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
      {variant !== 'link' && <Arrow />}
    </button>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5" fill="none" aria-hidden>
      <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
