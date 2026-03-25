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
      className="min-h-dvh flex flex-col items-center justify-center px-6 pt-32 pb-24 relative bg-[url('https://images.unsplash.com/photo-1606859580459-00f7457223b0?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center max-w-2xl">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.3em] uppercase text-[#D4AF37]/70 hover:text-[#D4AF37] transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          La cantina
        </Link>

        <p className="font-sans text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-4">
          Selezione
        </p>
        <h1 className="font-display italic text-5xl md:text-7xl text-[#FBF9F6] mb-6 tracking-wide">
          I Vini Bianchi
        </h1>
        <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
        <p className="font-sans font-light text-lg text-white/60 leading-relaxed">
          Piemonte Chardonnay DOC · Moscato d&apos;Asti DOCG
        </p>
        <p className="font-sans text-sm text-white/40 mt-8">
          Pagina in costruzione — le schede vino arrivano presto.
        </p>
      </div>
    </main>
  );
}
