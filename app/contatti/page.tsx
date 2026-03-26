import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Grape } from 'lucide-react';

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
            Azienda Agricola Montarello
        </p>
        <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide">
          Contatti
        </h1>
        <div className="w-16 md:w-24 h-px bg-brand-gold mx-auto" />
      </div>

      {/* Contact grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl w-full">

        {/* Address Card */}
        <div className="group relative flex flex-col items-center md:items-start text-center md:text-left bg-black/20 backdrop-blur-sm border border-brand-gold/10 p-10 md:p-12 transition-colors hover:bg-black/30 hover:border-brand-gold/30">
          <MapPin size={28} strokeWidth={1} className="text-brand-gold shrink-0 mb-6 group-hover:scale-110 transition-transform duration-500" />
          <h2 className="font-sans text-sm tracking-[0.3em] uppercase text-brand-gold mb-8">Dove siamo</h2>
          <div className="font-sans text-base text-brand-accent leading-loose grow">
            <p className="font-light mb-2 text-white/90">Azienda Agricola Montarello</p>
            <a
              href="https://www.google.com/maps/place/44.835619,8.212942"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-brand-gold/30 hover:decoration-brand-gold"
            >
              Via Braglia 19<br />
              14040 Vigliano D&apos;Asti (AT)
            </a>
            <p className="font-sans text-xs tracking-widest text-white/40 mt-6 uppercase">44.835619, 8.212942</p>
          </div>
          <a
            href="https://www.google.com/maps/place/44.835619,8.212942"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block font-sans text-xs tracking-[0.2em] uppercase border border-brand-gold/40 text-brand-gold px-8 py-4 hover:bg-brand-gold hover:text-black transition-all duration-500 w-full md:w-auto text-center"
          >
            Apri in Maps
          </a>
        </div>

        {/* Phone & Email Card */}
        <div className="group relative flex flex-col items-center md:items-start text-center md:text-left bg-black/20 backdrop-blur-sm border border-brand-gold/10 p-10 md:p-12 transition-colors hover:bg-black/30 hover:border-brand-gold/30">
          <Phone size={28} strokeWidth={1} className="text-brand-gold shrink-0 mb-6 group-hover:scale-110 transition-transform duration-500" />
          <h2 className="font-sans text-sm tracking-[0.3em] uppercase text-brand-gold mb-8">Telefono</h2>
          <div className="font-sans text-base text-brand-accent flex flex-col gap-6 leading-relaxed w-full">
            <a
              href="tel:+390141953772"
              className="group/tel flex flex-col md:flex-row md:items-center gap-2 md:gap-4 hover:text-white transition-colors border-b border-brand-gold/10 pb-6 w-full"
            >
              <span className="text-brand-gold/60 text-xs uppercase tracking-[0.2em] md:w-16">Tel</span>
              <span className="text-lg font-light tracking-wide">0141 953772</span>
            </a>
            <a
              href="tel:+393470439525"
              className="group/tel flex flex-col md:flex-row md:items-center gap-2 md:gap-4 hover:text-white transition-colors border-b border-brand-gold/10 pb-6 w-full"
            >
              <span className="text-brand-gold/60 text-xs uppercase tracking-[0.2em] md:w-16">Cell</span>
              <span className="text-lg font-light tracking-wide">347 0439525</span>
            </a>
            
            <div className="pt-2 flex flex-col items-center md:items-start w-full">
               <Mail size={28} strokeWidth={1} className="text-brand-gold mb-6 mt-2 group-hover:scale-110 transition-transform duration-500" />
              <a
                href="mailto:cantaretto@libero.it"
                className="font-sans text-base text-brand-accent hover:text-white transition-colors underline underline-offset-8 decoration-brand-gold/30 hover:decoration-brand-gold"
              >
                cantaretto@libero.it
              </a>
            </div>
          </div>
        </div>

        {/* Fiscal & Brand Card */}
        <div className="group relative flex flex-col items-center text-center bg-black/20 backdrop-blur-sm border border-brand-gold/10 p-10 md:p-12 transition-colors hover:bg-black/30 hover:border-brand-gold/30">
          <div className="flex flex-col items-center w-full">
            <Grape size={28} strokeWidth={1} className="text-brand-gold shrink-0 mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h2 className="font-sans text-sm tracking-[0.3em] uppercase text-brand-gold mb-8">Azienda</h2>
            <div className="font-sans text-base text-brand-accent leading-loose">
              <p className="font-light mb-2 text-white/90">Azienda Agricola Montarello</p>
              <p className="text-brand-gold/60 font-sans tracking-widest text-sm">P. IVA 01152430052</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-gold/10 w-full flex flex-col items-center">
            <Link
              href="/"
              className="font-display text-3xl tracking-widest text-[#FFF8E6]/80 hover:text-brand-gold transition-colors select-none"
            >
              MONTARELLO
            </Link>
            <p className="font-sans text-sm tracking-wide text-brand-gold/60 mt-4 leading-relaxed italic">
              Nel cuore del Monferrato dal 1968.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
