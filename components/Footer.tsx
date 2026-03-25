import Link from 'next/link';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';

const NAV_LINKS = [
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/catalogo', label: 'La cantina' },
  { href: '/catalogo/vini-rossi', label: 'I vini rossi' },
  { href: '/catalogo/vini-bianchi', label: 'I vini bianchi' },
  { href: '/contatti', label: 'Contatti' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1C0A06] text-brand-accent border-t border-brand-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 items-start">

          {/* Esplora */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-gold">
              Esplora
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/55 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contatti */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-gold">
              Contatti
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+393470439525"
                className="group flex items-center gap-2.5 text-xs text-white/55 hover:text-white transition-colors"
              >
                <Phone
                  size={11}
                  className="text-brand-gold/60 group-hover:text-brand-gold transition-colors shrink-0"
                />
                347 0439525
              </a>
              <a
                href="mailto:info@vinimontarello.it"
                className="group flex items-center gap-2.5 text-xs text-white/55 hover:text-white transition-colors"
              >
                <Mail
                  size={11}
                  className="text-brand-gold/60 group-hover:text-brand-gold transition-colors shrink-0"
                />
                info@vinimontarello.it
              </a>
              <a
                href="mailto:vinimontarello@pec.it"
                className="group flex items-start gap-2.5 text-xs text-white/55 hover:text-white transition-colors"
              >
                <FileText
                  size={11}
                  className="text-brand-gold/60 group-hover:text-brand-gold transition-colors shrink-0 mt-0.5"
                />
                <span>
                  vinimontarello@pec.it
                  <span className="block text-[9px] text-white/25 tracking-[0.2em] uppercase mt-0.5">
                    PEC
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link
              href="/"
              className="font-display text-2xl tracking-[0.2em] text-brand-sand hover:text-brand-gold transition-colors select-none"
            >
              MONTARELLO
            </Link>
            <p className="font-sans text-xs text-white/40 leading-relaxed max-w-[200px]">
              Azienda Agricola nel cuore<br />del Monferrato dal 1968.
            </p>
          </div>

          {/* Dove ci troviamo + Map placeholder */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-gold">
              Dove ci troviamo
            </h3>

            {/* Abstract map tile */}
            <a
              href="https://www.google.com/maps/place/44.835619,8.212942"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apri la mappa di Vigliano d'Asti"
              className="group relative block w-full max-w-[160px] aspect-square overflow-hidden rounded-sm"
            >
              {/* Vineyard gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-[#2C4A1E] via-[#375824]/80 to-[#1A2E10] group-hover:brightness-110 transition-all duration-400" />

              {/* Map grid overlay */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.12]"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="mapgrid" width="18" height="18" patternUnits="userSpaceOnUse">
                    <path d="M 18 0 L 0 0 0 18" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapgrid)" />
              </svg>

              {/* Contour lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-25"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M 0 55 Q 20 50 45 57 T 100 53" stroke="#D4AF37" strokeWidth="0.8" fill="none" />
                <path d="M 0 68 Q 30 63 58 70 T 100 66" stroke="#D4AF37" strokeWidth="0.6" fill="none" />
                <path d="M 0 80 Q 25 76 52 82 T 100 79" stroke="#D4AF37" strokeWidth="0.4" fill="none" />
              </svg>

              {/* Pin + label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                <MapPin
                  size={22}
                  strokeWidth={1.5}
                  className="text-brand-gold drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                />
                <span className="font-sans text-[8px] tracking-[0.18em] uppercase text-white/75 text-center leading-tight px-2">
                  Vigliano<br />d&apos;Asti
                </span>
              </div>

              {/* Hover scrim */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </a>

            <p className="font-sans text-xs text-white/50 leading-relaxed">
              Via Braglia 19<br />
              14040 Vigliano d&apos;Asti (AT)
            </p>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 pt-5 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-sans text-[10px] text-white/20 tracking-wider">
            &copy; {new Date().getFullYear()} Azienda Agricola Montarello. Tutti i diritti riservati.
          </p>
          <p className="font-sans text-[10px] text-white/15 tracking-wider">
            P. IVA 01152430052
          </p>
        </div>
      </div>
    </footer>
  );
}
