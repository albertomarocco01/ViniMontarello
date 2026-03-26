'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { aboutText } from '@/lib/data';
import Footer from '@/components/Footer';

const SLIDE_EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLElement>(null);

  const scrollToSlide2 = useCallback(() => {
    slide2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="h-dvh overflow-y-auto overflow-x-hidden overscroll-y-contain snap-y snap-mandatory scroll-smooth bg-[#FFF8E6] text-[#4B5749]"
    >
      {/* ── Slide 1: Hero ── */}
      <section className="h-dvh snap-start snap-always relative flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?q=80&w=2070&auto=format&fit=crop"
            alt="Vigneto Astigiano al tramonto"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full text-brand-sand">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-4 md:mb-6 text-brand-gold"
          >
            Azienda Agricola
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: SLIDE_EASE }}
            className="font-display italic font-light text-5xl md:text-8xl lg:text-9xl tracking-wide mb-4 md:mb-6"
          >
            Montarello
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="font-sans text-base md:text-xl font-light tracking-wide max-w-2xl text-white/90"
          >
            Storia, tradizione e passione nel cuore del Monferrato dal 1968.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <button
            onClick={scrollToSlide2}
            className="flex flex-col items-center gap-3 text-white/70 hover:text-brand-gold transition-colors duration-300"
            aria-label="Scorri verso il basso"
          >
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase">SCOPRI</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            >
              <ChevronDown size={24} strokeWidth={1.5} />
            </motion.div>
          </button>
        </motion.div>
      </section>

      {/* ── Slide 2: Le nostre radici ── */}
      <section
        ref={slide2Ref}
        id="radici"
        className="h-dvh snap-start snap-always relative flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center px-6"
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: SLIDE_EASE }}
          viewport={{ root: scrollContainerRef, once: false, amount: 0.25 }}
          className="max-w-4xl w-full mx-auto text-center z-10"
        >
          <h2 className="font-display italic text-4xl md:text-6xl lg:text-7xl text-brand-sand mb-6 md:mb-8 drop-shadow-lg">
            {aboutText.chiSiamo.title}
          </h2>
          <div className="w-16 md:w-24 h-px bg-brand-gold mx-auto mb-8 md:mb-10 shadow-sm" />
          <p className="font-sans font-light text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed text-balance drop-shadow mb-10 md:mb-14">
            {aboutText.chiSiamo.content}
          </p>
          <Link
            href="/chi-siamo"
            className="group inline-flex items-center gap-4 border border-brand-gold text-brand-gold px-8 md:px-12 py-4 md:py-5 uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-brand-gold hover:text-black transition-all duration-500"
          >
            <span>Scopri chi siamo</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </section>

      {/* ── Slide 3: La nostra selezione / I nostri vini ── */}
      <section
        id="esplora"
        className="h-dvh snap-start snap-always relative flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center px-6"
      >
        <div className="absolute inset-0 bg-black/65 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: SLIDE_EASE }}
          viewport={{ root: scrollContainerRef, once: false, amount: 0.25 }}
          className="max-w-3xl mx-auto text-center z-10"
        >
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-4 text-brand-gold drop-shadow">
            La Nostra Selezione
          </p>
          <h2 className="font-display italic text-5xl md:text-7xl lg:text-8xl mb-6 md:mb-8 tracking-wide text-brand-sand drop-shadow-xl">
            I Nostri Vini
          </h2>
          <div className="w-24 md:w-32 h-px bg-brand-gold mx-auto mb-10 md:mb-12 shadow-sm" />
          <p className="font-sans text-base md:text-xl lg:text-2xl font-light text-white/90 mb-10 md:mb-12 text-balance drop-shadow">
            La perfezione di un vino nasce dalla pazienza e dalla dedizione autentica.
          </p>
          <Link
            href="/catalogo"
            className="group inline-flex items-center gap-4 border border-brand-gold text-brand-gold px-8 md:px-12 py-4 md:py-5 uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-brand-gold hover:text-black transition-all duration-500"
          >
            <span>Esplora il catalogo completo</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </section>

      {/* ── Slide 4: Footer (natural height, snaps to its own end) ── */}
      <div className="snap-end h-auto shrink-0">
        <Footer />
      </div>
    </div>
  );
}
