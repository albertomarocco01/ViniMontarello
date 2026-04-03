import Link from 'next/link';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/catalogo', label: 'La cantina' },
];

const HEADING = 'font-sans text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-4';
const CONTACT_LINK =
  'group flex items-center gap-2.5 text-xs text-white/55 hover:text-white transition-colors';
const ICON_CLS =
  'text-brand-gold/60 group-hover:text-brand-gold transition-colors shrink-0';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1C0A06] text-brand-accent border-t border-brand-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">

        {/* ── Main grid (Brand | Esplora | Contatti | Dove ci troviamo) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 items-start">

          {/* ① Brand */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-display text-2xl tracking-[0.2em] text-brand-sand hover:text-brand-gold transition-colors select-none"
            >
              MONTARELLO
            </Link>
            <p className="font-sans text-xs text-white/40 leading-relaxed max-w-[220px]">
              Società Agricola nel cuore<br />del Monferrato dal 1968.
            </p>
          </div>

          {/* ② Esplora */}
          <div className="flex flex-col">
            <h3 className={HEADING}>Esplora</h3>
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

          {/* ③ Contatti */}
          <div className="flex flex-col">
            <h3 className={HEADING}>Contatti</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:+393470439525" className={CONTACT_LINK}>
                <Phone size={11} className={ICON_CLS} />
                347 0439525
              </a>
              <a href="mailto:cantaretto@libero.it" className={CONTACT_LINK}>
                <Mail size={11} className={ICON_CLS} />
                cantaretto@libero.it
              </a>
              <a
                href="mailto:vinimontarello@pec.it"
                className="group flex items-start gap-2.5 text-xs text-white/55 hover:text-white transition-colors"
              >
                <FileText size={11} className={`${ICON_CLS} mt-0.5`} />
                <span>
                  vinimontarello@pec.it
                  <span className="block text-[9px] text-white/25 tracking-[0.2em] uppercase mt-0.5">
                    PEC
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* ④ Dove ci troviamo */}
          <div className="flex flex-col">
            <h3 className={HEADING}>Dove ci troviamo</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Via+Braglia+19,+Vigliano+d'Asti"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-2.5 text-xs text-white/55 hover:text-white transition-colors"
              aria-label="Apri indirizzo su Google Maps"
            >
              <MapPin
                size={11}
                className={`${ICON_CLS} mt-0.5`}
              />
              <span className="leading-relaxed group-hover:underline decoration-brand-gold/40 underline-offset-2">
                Via Braglia 19<br />
                14040 Vigliano d&apos;Asti (AT)
              </span>
            </a>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 pt-5 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-sans text-[10px] text-white/20 tracking-wider">
            &copy; {new Date().getFullYear()} Società Agricola Montarello. Tutti i diritti riservati.
          </p>
          <p className="font-sans text-[10px] text-white/15 tracking-wider">
            P. IVA 01152430052
          </p>
        </div>
      </div>
    </footer>
  );
}
