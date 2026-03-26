import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'I Vini Rossi | Vini Montarello',
  description: 'I vini rossi dell\'Azienda Agricola Montarello: Barbera d\'Asti, Grignolino, Dolcetto e Freisa.',
};

export default function ViniRossiPage() {
  return (
    <main
      className="min-h-dvh flex flex-col items-center justify-center px-6 pt-32 pb-24 relative bg-[url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/70" />

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
          I Vini Rossi
        </h1>
        <div className="w-16 h-px bg-brand-gold mx-auto mb-8" />
        <p className="font-sans font-light text-lg text-white/60 leading-relaxed">
          Barbera d&apos;Asti · Grignolino d&apos;Asti · Dolcetto · Freisa d&apos;Asti
        </p>
        <p className="font-sans text-sm text-white/40 mt-8">
          Pagina in costruzione — le schede vino arrivano presto.
        </p>
      </div>

      {/* Cross-link CTA */}
      <div className="relative z-10 mt-20 pb-4 flex flex-col items-center">
        <div className="w-px h-12 bg-brand-gold/30 mb-8" />
        <Link
          href="/catalogo/vini-bianchi"
          className="group inline-flex flex-col items-center gap-3 text-center"
        >
          <span className="font-display italic text-xl md:text-2xl text-white/50 group-hover:text-brand-sand transition-colors duration-500 tracking-wide">
            E se invece volessi del Bianco&hellip;
          </span>
          <span className="block w-0 group-hover:w-full h-px bg-brand-gold/60 transition-all duration-500 ease-in-out" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold/50 group-hover:text-brand-gold transition-colors duration-300">
            Scopri i Vini Bianchi →
          </span>
        </Link>
      </div>
    </main>
  );
}
