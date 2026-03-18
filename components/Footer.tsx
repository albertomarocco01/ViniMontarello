import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contatti" className="bg-[#3A131A] text-[#FBF9F6] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-12 md:gap-x-12 text-center md:text-left transition-colors">
        
        {/* Brand & Address */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Link href="/" className="font-serif text-3xl tracking-wider select-none mb-2 hover:text-[#D4AF37] transition-colors">
            MONTARELLO
          </Link>
          <p className="font-sans text-sm text-[#E2DBD3] max-w-xs leading-relaxed">
            Azienda Agricola Montarello<br />
            <a 
              href="https://www.google.com/maps/place/44.835619,8.212942" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-[#D4AF37]"
            >
              Via Braglia 19<br />
              14040 Vigliano D'Asti (AT)
            </a><br />
            <span className="text-white/40 text-xs mt-2 block">Coordinate: 44.835619, 8.212942</span>
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-serif text-xl tracking-wide mb-2 text-[#D4AF37]">Contatti</h3>
          <p className="font-sans text-sm text-[#E2DBD3] flex flex-col space-y-4">
            <a href="tel:+390141953772" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="text-white/50 text-xs uppercase tracking-widest w-12 group-hover:text-[#D4AF37] transition-colors">Tel</span> 
              0141 953772
            </a>
            <a href="tel:+393470439525" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="text-white/50 text-xs uppercase tracking-widest w-12 group-hover:text-[#D4AF37] transition-colors">Cell</span> 
              347 0439525
            </a>
            <a href="mailto:cantaretto@libero.it" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="text-white/50 text-xs uppercase tracking-widest w-12 group-hover:text-[#D4AF37] transition-colors">Mail</span> 
              cantaretto@libero.it
            </a>
          </p>
        </div>

        {/* Fiscal Info */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-serif text-xl tracking-wide mb-2 text-[#D4AF37]">Azienda</h3>
          <p className="font-sans text-sm text-[#E2DBD3] leading-relaxed">
            P. IVA 01152430052
          </p>
          <p className="font-sans text-xs text-white/50 max-w-xs leading-relaxed mt-4">
          </p>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-xs tracking-wider text-white/40">
        &copy; {new Date().getFullYear()} Azienda Agricola Montarello. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
