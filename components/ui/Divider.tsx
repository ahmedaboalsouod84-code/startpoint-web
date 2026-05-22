import { cn } from '@/lib/utils/cn';

export function Divider({ label, className }: { label?: string; className?: string }) {
  if (!label) {
    return <hr className={cn('border-t border-line-subtle', className)} />;
  }
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <hr className="flex-1 border-t border-line-subtle" />
      <span className="label-eyebrow shrink-0">{label}</span>
      <hr className="flex-1 border-t border-line-subtle" />
    </div>
  );
}
