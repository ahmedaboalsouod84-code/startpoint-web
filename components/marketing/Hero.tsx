'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

interface HeroProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
  imageAlt?: string;
  variant?: 'home' | 'inner';
}

export function Hero({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = '',
  variant = 'home',
}: HeroProps) {
  const reduce = useReducedMotion();
  const isHome = variant === 'home';

  return (
    <section className={`relative overflow-hidden ${isHome ? 'min-h-[92vh]' : 'min-h-[64vh]'} flex items-end`}>
      <motion.div
        initial={reduce ? false : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-base/55 to-base" />
        <div className="absolute inset-0 bg-gradient-to-r from-base/60 via-transparent to-transparent" />
      </motion.div>

      <Container className="relative z-10 pb-20 pt-32 md:pb-32 md:pt-40">
        <div className="max-w-4xl">
          {eyebrow && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow>{eyebrow}</Eyebrow>
            </motion.div>
          )}
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className={`${isHome ? 'display-1' : 'display-2'} mt-6 text-balance text-ink`}
          >
            {title}
          </motion.h1>
          {intro && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              className="body-lg mt-7 max-w-2xl text-pretty"
            >
              {intro}
            </motion.p>
          )}
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
              {secondaryCta && <Button href={secondaryCta.href} variant="ghost">{secondaryCta.label}</Button>}
            </motion.div>
          )}
        </div>
      </Container>

      {/* Scroll cue */}
      {isHome && (
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <Link href="#capabilities" className="group flex flex-col items-center gap-2 text-ink-muted">
            <span className="label-eyebrow">Explore</span>
            <span className="h-10 w-px bg-line-strong transition-all duration-700 group-hover:h-14 group-hover:bg-copper" />
          </Link>
        </div>
      )}
    </section>
  );
}
