import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';
import { Container } from './Container';

interface SectionProps {
  as?: ElementType;
  id?: string;
  bleed?: boolean;
  pad?: 'sm' | 'md' | 'lg';
  size?: 'tight' | 'base' | 'wide';
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}

const padMap = {
  sm: 'py-16 md:py-20',
  md: 'py-20 md:py-28',
  lg: 'py-24 md:py-36',
};

export function Section({
  as: Tag = 'section',
  id,
  bleed = false,
  pad = 'md',
  size = 'base',
  className,
  innerClassName,
  children,
}: SectionProps) {
  return (
    <Tag id={id} className={cn('relative', padMap[pad], className)}>
      {bleed ? children : <Container size={size} className={innerClassName}>{children}</Container>}
    </Tag>
  );
}
