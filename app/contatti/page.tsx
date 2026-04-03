import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, ShieldCheck, Grape } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contatti | Vini Montarello',
  description: 'Contatta la Società Agricola Montarello. Indirizzo, telefono ed email per raggiungerci nel cuore del Monferrato.',
};

export default function ContattiPage() {
  return (
    <main className="min-h-dvh bg-[#3A131A] text-brand-sand flex flex-col items-center justify-center px-6 pt-32 pb-24">

      {/* Header */}
      <div className="text-center mb-16 md:mb-24">
        <p className="font-sans text-xs tracking-[0.35em] uppercase text-brand-gold mb-4">
          Società Agricola Montarello
        </p>
        <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide">
          Contatti
        </h1>
        <div className="w-16 md:w-24 h-px bg-brand-gold mx-auto" />
      </div>

      {/* Contact grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl w-full">

        {/* ── Address Card with Map ── */}
        <div className="group relative flex flex-col items-center md:items-start text-center md:text-left bg-black/20 backdrop-blur-sm border border-brand-gold/10 p-10 md:p-12 transition-colors hover:bg-black/30 hover:border-brand-gold/30">
          <MapPin size={28} strokeWidth={1} className="text-brand-gold shrink-0 mb-6 group-hover:scale-110 transition-transform duration-500" />
          <h2 className="font-sans text-sm tracking-[0.3em] uppercase text-brand-gold mb-6">Dove siamo</h2>
          <div className="font-sans text-base text-brand-accent leading-relaxed mb-6">
            <p className="font-light mb-1 text-white/90">Società Agricola Montarello</p>
            <a
              href="https://www.google.com/maps/place/44.835619,8.212942"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-brand-gold/30 hover:decoration-brand-gold"
            >
              Via Braglia 19<br />
              14040 Vigliano D&apos;Asti (AT)
            </a>
          </div>

          {/* Embedded Map – fully interactive */}
          <div className="relative w-full aspect-4/3 overflow-hidden border border-brand-gold/15 mt-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2800!2d8.212942!3d44.835619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDUwJzA4LjIiTiA4wrAxMic0Ni42IkU!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Posizione Montarello su Google Maps"
            />
          </div>

          {/* External link below map */}
          <a
            href="https://www.google.com/maps/place/44.835619,8.212942"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 self-center md:self-start font-sans text-xs tracking-[0.2em] uppercase text-brand-gold/60 hover:text-brand-gold transition-colors"
          >
            Apri in Google Maps ↗
          </a>
        </div>

        {/* ── Phone, Email & Pec Card ── */}
        <div className="group relative flex flex-col items-center md:items-start text-center md:text-left bg-black/20 backdrop-blur-sm border border-brand-gold/10 p-10 md:p-12 transition-colors hover:bg-black/30 hover:border-brand-gold/30">

          {/* Telefono */}
          <Phone size={28} strokeWidth={1} className="text-brand-gold shrink-0 mb-5 group-hover:scale-110 transition-transform duration-500" />
          <h2 className="font-sans text-sm tracking-[0.3em] uppercase text-brand-gold mb-6">Telefono</h2>

          <a
            href="tel:+393470439525"
            className="flex items-center gap-4 hover:text-white transition-colors w-full border-b border-brand-gold/10 pb-7 mb-7"
          >
            <span className="text-brand-gold/60 text-xs uppercase tracking-[0.2em] shrink-0">Cell</span>
            <span className="text-lg font-light tracking-wide">347 0439525</span>
          </a>

          {/* Mail — inline come Cell */}
          <div className="flex items-center gap-4 w-full border-b border-brand-gold/10 pb-7 mb-7">
            <Mail size={20} strokeWidth={1.2} className="text-brand-gold shrink-0" />
            <div className="flex flex-col">
              <span className="text-brand-gold/60 text-[10px] uppercase tracking-[0.25em] mb-1">Mail</span>
              <a
                href="mailto:cantaretto@libero.it"
                className="font-sans text-base text-brand-accent hover:text-white transition-colors"
              >
                cantaretto@libero.it
              </a>
            </div>
          </div>

          {/* PEC — inline come Cell */}
          <div className="flex items-center gap-4 w-full">
            <ShieldCheck size={20} strokeWidth={1.2} className="text-brand-gold shrink-0" />
            <div className="flex flex-col">
              <span className="text-brand-gold/60 text-[10px] uppercase tracking-[0.25em] mb-1">Pec</span>
              <a
                href="mailto:vinimontarello@pec.it"
                className="font-sans text-base text-brand-accent hover:text-white transition-colors"
              >
                vinimontarello@pec.it
              </a>
            </div>
          </div>
        </div>

        {/* ── Società Card ── */}
        <div className="group relative flex flex-col items-center justify-between text-center bg-black/20 backdrop-blur-sm border border-brand-gold/10 p-10 md:p-12 transition-colors hover:bg-black/30 hover:border-brand-gold/30">

          {/* Dati societari */}
          <div className="flex flex-col items-center w-full">
            <Grape size={28} strokeWidth={1} className="text-brand-gold shrink-0 mb-5 group-hover:scale-110 transition-transform duration-500" />

            <h2 className="font-display italic text-2xl md:text-3xl text-brand-gold tracking-wide leading-snug mb-2">
              Società Agricola<br />Montarello SS
            </h2>
            <div className="w-10 h-px bg-brand-gold/40 mx-auto my-5" />
            <p className="font-sans text-sm text-white tracking-widest">
              P. IVA 01152430052
            </p>
          </div>

          {/* Brand */}
          <div className="mt-auto pt-10 border-t border-brand-gold/10 w-full flex flex-col items-center">
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
