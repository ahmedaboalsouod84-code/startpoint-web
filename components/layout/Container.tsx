import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type Size = 'tight' | 'base' | 'wide';

interface ContainerProps {
  as?: ElementType;
  size?: Size;
  className?: string;
  children: ReactNode;
}

const sizeMap: Record<Size, string> = {
  tight: 'container-tight',
  base: 'container-base',
  wide: 'container-wide',
};

export function Container({ as: Tag = 'div', size = 'base', className, children }: ContainerProps) {
  return <Tag className={cn(sizeMap[size], className)}>{children}</Tag>;
}
