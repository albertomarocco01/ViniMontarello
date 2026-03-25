import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contatti | Vini Montarello',
  description: 'Contatta l\'Azienda Agricola Montarello. Indirizzo, telefono ed email per raggiungerci nel cuore del Monferrato.',
};

export default function ContattiPage() {
  return (
    <main className="min-h-dvh bg-[#3A131A] text-brand-sand flex flex-col items-center justify-center px-6 pt-32 pb-24">

      {/* Header */}
      <div className="text-center mb-16 md:mb-24">
        <p className="font-sans text-xs tracking-[0.35em] uppercase text-brand-gold mb-4">
          Azienda Agricola
        </p>
        <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide">
          Contatti
        </h1>
        <div className="w-16 md:w-24 h-px bg-brand-gold mx-auto" />
      </div>

      {/* Contact grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 max-w-5xl w-full">

        {/* Address */}
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-brand-gold shrink-0" />
            <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold">Dove siamo</h2>
          </div>
          <div className="font-sans text-sm text-brand-accent leading-loose">
            <p className="font-light mb-1">Azienda Agricola Montarello</p>
            <a
              href="https://www.google.com/maps/place/44.835619,8.212942"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-brand-gold/40 hover:decoration-brand-gold"
            >
              Via Braglia 19<br />
              14040 Vigliano D&apos;Asti (AT)
            </a>
            <p className="text-xs text-white/40 mt-3">44.835619, 8.212942</p>
          </div>
          <a
            href="https://www.google.com/maps/place/44.835619,8.212942"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase border border-brand-gold/50 text-brand-gold px-6 py-3 hover:bg-brand-gold hover:text-black transition-all duration-400"
          >
            Apri in Maps
          </a>
        </div>

        {/* Phone & Email */}
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-brand-gold shrink-0" />
            <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold">Telefono</h2>
          </div>
          <div className="font-sans text-sm text-brand-accent flex flex-col gap-4 leading-loose">
            <a
              href="tel:+390141953772"
              className="group flex items-center gap-3 hover:text-white transition-colors"
            >
              <span className="text-white/40 text-xs uppercase tracking-widest w-10 group-hover:text-brand-gold transition-colors">Tel</span>
              0141 953772
            </a>
            <a
              href="tel:+393470439525"
              className="group flex items-center gap-3 hover:text-white transition-colors"
            >
              <span className="text-white/40 text-xs uppercase tracking-widest w-10 group-hover:text-brand-gold transition-colors">Cell</span>
              347 0439525
            </a>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <Mail size={18} className="text-brand-gold shrink-0" />
            <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold">Email</h2>
          </div>
          <a
            href="mailto:cantaretto@libero.it"
            className="font-sans text-sm text-brand-accent hover:text-white transition-colors underline underline-offset-4 decoration-brand-gold/40 hover:decoration-brand-gold"
          >
            cantaretto@libero.it
          </a>
        </div>

        {/* Fiscal & Brand */}
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
          <div className="flex items-center gap-3">
            <h2 className="font-sans text-xs tracking-[0.3em] uppercase text-brand-gold">Azienda</h2>
          </div>
          <div className="font-sans text-sm text-brand-accent leading-loose">
            <p className="font-light mb-1">Azienda Agricola Montarello</p>
            <p className="text-white/50 text-xs">P. IVA 01152430052</p>
          </div>
          <div className="mt-4 border-t border-white/10 pt-6 w-full">
            <Link
              href="/"
              className="font-display text-2xl tracking-wider text-white/40 hover:text-brand-gold transition-colors select-none"
            >
              MONTARELLO
            </Link>
            <p className="font-sans text-xs text-white/30 mt-2 leading-relaxed">
              Nel cuore del Monferrato dal 1968.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
