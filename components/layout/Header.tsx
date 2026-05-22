'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils/cn';
import { services } from '@/content/services';

const primaryNav: { label: string; href: string; mega?: 'services' }[] = [
  { label: 'Services', href: '/services', mega: 'services' },
  { label: 'Work', href: '/work' },
  { label: 'Industries', href: '/industries' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background,border,backdrop-filter] duration-500',
        scrolled || mobileOpen
          ? 'border-b border-line-subtle bg-base/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <Container size="wide" className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="Start Point home" className="relative z-10">
          <Logo />
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li
                key={item.href}
                onMouseEnter={() => setMegaOpen(item.mega === 'services')}
              >
                <Link
                  href={item.href}
                  className="inline-flex h-10 items-center rounded-sm px-3 text-[0.875rem] text-ink-muted transition-colors hover:text-ink focus-visible:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/quote" size="sm" className="hidden md:inline-flex">
            Request a quote
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line-strong text-ink md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
              {mobileOpen ? (
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <>
                  <path d="M4 7h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
                </>
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Services mega menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden border-b border-line-subtle bg-base/95 backdrop-blur-xl md:block"
          >
            <Container size="wide" className="grid grid-cols-2 gap-x-12 gap-y-3 py-10 lg:grid-cols-3">
              <div className="col-span-1 lg:col-span-1">
                <p className="label-eyebrow">Services</p>
                <p className="body-md mt-4 max-w-xs">
                  One studio. Concept, fabrication, print, install — under one Riyadh roof.
                </p>
                <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-[0.875rem] text-copper hover:text-copper-soft">
                  All services
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none"><path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.25" /></svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:col-span-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex flex-col gap-1 rounded-sm px-3 py-3 transition-colors hover:bg-raised"
                  >
                    <span className="font-display text-[1rem] leading-snug text-ink transition-colors group-hover:text-copper-soft">
                      {s.title}
                    </span>
                    <span className="text-[0.8125rem] leading-snug text-ink-muted">
                      {s.tagline}
                    </span>
                  </Link>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-base md:hidden"
          >
            <Container className="flex flex-col gap-6 py-10">
              <nav aria-label="Mobile">
                <ul className="divide-y divide-line-subtle border-y border-line-subtle">
                  {primaryNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-5 font-display text-[1.5rem] text-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="block py-5 font-display text-[1.5rem] text-ink"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <Button href="/quote" size="lg" className="mt-4 w-full">
                Request a quote
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
