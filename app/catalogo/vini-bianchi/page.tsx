import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { whiteWines } from '@/lib/data';

export const metadata: Metadata = {
  title: 'I Vini Bianchi | Vini Montarello',
  description: "I vini bianchi della Società Agricola Montarello: Chardonnay e Piemonte Chardonnay DOC.",
};

export default function ViniBianchiPage() {
  return (
    <main className="min-h-dvh bg-[#FFF8E6] text-brand-charcoal">

      {/* ── Hero header ── */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="https://plus.unsplash.com/premium_photo-1676590905367-12ff693f0afe?q=80&w=1224&auto=format&fit=crop"
          alt="Vini Bianchi"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20 px-6 text-center">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.3em] uppercase text-brand-gold/70 hover:text-brand-gold transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            La cantina
          </Link>
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-brand-gold mb-3">
            Selezione
          </p>
          <h1 className="font-display italic text-4xl md:text-6xl text-brand-sand tracking-wide">
            I Vini Bianchi
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-5" />
        </div>
      </div>

      {/* ── Grid ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whiteWines.map((wine) => (
            <Link
              key={wine.id}
              href={`/catalogo/vini-bianchi/${wine.slug}`}
              className="group block"
            >
              {/* Image frame */}
              <div className="relative aspect-3/4 overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={wine.imageUrl}
                  alt={wine.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/50 to-transparent" />
              </div>

              {/* Name */}
              <div className="mt-4 text-center px-2">
                <div className="w-6 h-px bg-brand-gold/50 mx-auto mb-3 transition-all duration-300 group-hover:w-10 group-hover:bg-brand-gold" />
                <h2 className="font-display italic text-xl text-brand-charcoal tracking-wide leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {wine.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Cross-link CTA ── */}
      <div className="flex flex-col items-center pb-20 px-6">
        <div className="w-px h-12 bg-brand-gold/30 mb-8" />
        <Link
          href="/catalogo/vini-rossi"
          className="group inline-flex flex-col items-center gap-3 text-center"
        >
          <span className="font-display italic text-xl md:text-2xl text-brand-charcoal/50 group-hover:text-brand-charcoal transition-colors duration-500 tracking-wide">
            E se invece volessi del Rosso&hellip;
          </span>
          <span className="block w-0 group-hover:w-full h-px bg-brand-gold/60 transition-all duration-500 ease-in-out" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold/50 group-hover:text-brand-gold transition-colors duration-300">
            ← Scopri i Vini Rossi e Rosati
          </span>
        </Link>
      </div>

    </main>
  );
}
