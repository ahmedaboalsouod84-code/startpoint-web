'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils/cn';

interface FaqListProps {
  items: { q: string; a: string }[];
}

export function FaqList({ items }: FaqListProps) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <dl className="border-t border-line-subtle">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-line-subtle">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-copper-soft"
              aria-expanded={isOpen}
            >
              <dt className="font-display text-[1.0625rem] leading-snug md:text-[1.1875rem]">{item.q}</dt>
              <span
                aria-hidden
                className={cn(
                  'shrink-0 transition-transform duration-300',
                  isOpen ? 'rotate-45' : 'rotate-0'
                )}
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                  <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.25" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.dd
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="body-md max-w-3xl pb-7 pr-12 text-pretty">{item.a}</p>
                </motion.dd>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </dl>
  );
}
