'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Utensils, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Wine } from '@/lib/data';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

type Props = {
  wine: Wine;
  backHref: string;
  backLabel: string;
};

export default function WineDetailLayout({ wine, backHref, backLabel }: Props) {
  return (
    <main className="min-h-dvh bg-[#FFF8E6] text-brand-charcoal">

      {/* ── Top navigation ── */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-0">
        <motion.div {...fadeUp(0)}>
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.3em] uppercase text-brand-gold/70 hover:text-brand-gold transition-colors"
          >
            <ArrowLeft size={14} />
            {backLabel}
          </Link>
        </motion.div>
      </div>

      {/* ── Split layout ── */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <div className="relative aspect-3/4 w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={wine.imageUrl}
                alt={wine.name}
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="flex flex-col justify-center">

            {/* Label */}
            <motion.p {...fadeUp(0.2)} className="font-sans text-xs tracking-[0.35em] uppercase text-brand-gold mb-4">
              Scheda Vino
            </motion.p>

            {/* Name */}
            <motion.h1 {...fadeUp(0.3)} className="font-display italic text-4xl md:text-5xl lg:text-6xl text-brand-charcoal leading-tight tracking-wide">
              {wine.name}
            </motion.h1>

            {/* Divider */}
            <motion.div {...fadeUp(0.38)}>
              <div className="w-16 h-px bg-brand-gold my-7" />
            </motion.div>

            {/* Description */}
            <motion.p {...fadeUp(0.44)} className="font-sans font-light text-base md:text-lg text-brand-charcoal/75 leading-[1.9]">
              {wine.description}
            </motion.p>

            {/* Details box */}
            <motion.div
              {...fadeUp(0.54)}
              className="mt-8 rounded-2xl border border-stone-200 bg-stone-50/60 p-6 space-y-5"
            >
              {/* Pairing */}
              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                    <Utensils size={16} className="text-brand-gold" />
                  </div>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-1">
                    Abbinamento
                  </p>
                  <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed">
                    {wine.pairing}
                  </p>
                </div>
              </div>

              {/* Divider inside box */}
              <div className="h-px bg-stone-200" />

              {/* Temperature */}
              <div className="flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                    <Thermometer size={16} className="text-brand-gold" />
                  </div>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-1">
                    Temperatura di Servizio
                  </p>
                  <p className="font-display italic text-xl text-brand-charcoal">
                    {wine.temperature}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
