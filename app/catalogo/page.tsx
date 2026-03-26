import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'La Nostra Cantina | Vini Montarello',
  description: 'Scopri la selezione completa dei vini Montarello: rossi e bianchi del Monferrato.',
};

const categories = [
  {
    href: '/catalogo/vini-rossi',
    label: 'I Vini Rossi',
    sub: 'Barbera · Grignolino · Dolcetto · Freisa',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-[#8B2635]/60',
  },
  {
    href: '/catalogo/vini-bianchi',
    label: 'I Vini Bianchi',
    sub: 'Chardonnay · Moscato d\'Asti',
    image: 'https://images.unsplash.com/photo-1597905722448-a1df7c00000a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    accent: 'from-[#4B5749]/60',
  },
] as const;

export default function CatalogoPage() {
  return (
    <main className="min-h-dvh bg-[#1C1008] text-brand-sand flex flex-col items-center justify-center px-6 pt-24 pb-16">

      {/* Header */}
      <div className="text-center mb-12 md:mb-20">
        <p className="font-sans text-xs tracking-[0.35em] uppercase text-brand-gold mb-4">
          La nostra selezione
        </p>
        <h1 className="font-display italic text-5xl md:text-7xl mb-6 tracking-wide">
          La Cantina
        </h1>
        <div className="w-16 md:w-24 h-px bg-brand-gold mx-auto mb-6" />
        <p className="font-sans font-light text-base md:text-lg text-white/60 max-w-md mx-auto leading-relaxed">
          Scegli la tua selezione e scopri ogni vino nel dettaglio.
        </p>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl w-full">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group relative overflow-hidden aspect-4/3 md:aspect-3/4 flex flex-col justify-end"
          >
            {/* Background image */}
            <img
              src={cat.image}
              alt={cat.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-linear-to-t ${cat.accent} to-black/80`} />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold mb-2 opacity-80">
                {cat.sub}
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-white mb-4 group-hover:text-brand-gold transition-colors duration-300">
                {cat.label}
              </h2>
              <div className="flex items-center gap-3 text-white/60 group-hover:text-brand-gold transition-colors duration-300">
                <span className="font-sans text-xs tracking-[0.2em] uppercase">Scopri</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
