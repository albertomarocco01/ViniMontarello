import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1D] text-[#FBF9F6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Brand & Address */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Link href="/" className="font-serif text-3xl tracking-wider select-none mb-2">
            MONTARELLO
          </Link>
          <p className="font-sans text-sm text-[#E2DBD3] max-w-xs leading-relaxed">
            Azienda Agricola Montarello<br />
            Via Braglia 19<br />
            14040 Vigliano D'Asti (AT)<br />
            Coordinate: 44.835619, 8.212942
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-serif text-xl tracking-wide mb-2">Contatti</h3>
          <p className="font-sans text-sm text-[#E2DBD3] flex flex-col space-y-2">
            <span>Tel e Fax: 0141.95.37.72</span>
            <span>Cell: 347.043.95.25</span>
            <a href="mailto:cantaretto@libero.it" className="hover:text-white transition-colors underline underline-offset-4 decoration-[#8B2635]">
              cantaretto@libero.it
            </a>
          </p>
        </div>

        {/* Fiscal Info */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-serif text-xl tracking-wide mb-2">Azienda</h3>
          <p className="font-sans text-sm text-[#E2DBD3]">
            P. IVA 01152430052
          </p>
          <div className="mt-8">
            <Link href="/vini" className="inline-block border border-[#8B2635] text-[#FBF9F6] px-6 py-2 uppercase tracking-widest text-xs hover:bg-[#8B2635] transition-colors">
              I Nostri Vini
            </Link>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs tracking-wider text-gray-500">
        &copy; {new Date().getFullYear()} Azienda Agricola Montarello. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
