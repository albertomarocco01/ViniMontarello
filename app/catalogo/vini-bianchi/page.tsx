import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'I Vini Bianchi | Vini Montarello',
  description: 'I vini bianchi dell\'Azienda Agricola Montarello: Chardonnay e Moscato d\'Asti DOCG.',
};

export default function ViniBianchiPage() {
  return (
    <main
      className="min-h-dvh flex flex-col items-center justify-center px-6 pt-32 pb-24 relative bg-[url('https://plus.unsplash.com/premium_photo-1676590905367-12ff693f0afe?q=80&w=1224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center max-w-2xl">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.3em] uppercase text-brand-gold/70 hover:text-brand-gold transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          La cantina
        </Link>

        <p className="font-sans text-xs tracking-[0.35em] uppercase text-brand-gold mb-4">
          Selezione
        </p>
        <h1 className="font-display italic text-5xl md:text-7xl text-brand-sand mb-6 tracking-wide">
          I Vini Bianchi
        </h1>
        <div className="w-16 h-px bg-brand-gold mx-auto mb-8" />
        <p className="font-sans font-light text-lg text-white/60 leading-relaxed">
          Piemonte Chardonnay DOC · Moscato d&apos;Asti DOCG
        </p>
        <p className="font-sans text-sm text-white/40 mt-8">
          Pagina in costruzione — le schede vino arrivano presto.
        </p>
      </div>

      {/* Cross-link CTA */}
      <div className="relative z-10 mt-20 pb-4 flex flex-col items-center">
        <div className="w-px h-12 bg-brand-gold/30 mb-8" />
        <Link
          href="/catalogo/vini-rossi"
          className="group inline-flex flex-col items-center gap-3 text-center"
        >
          <span className="font-display italic text-xl md:text-2xl text-white/50 group-hover:text-brand-sand transition-colors duration-500 tracking-wide">
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
