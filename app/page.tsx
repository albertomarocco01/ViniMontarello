import Hero from '@/components/Hero';
import HistorySection from '@/components/HistorySection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HistorySection />

      {/* CTA Section */}
      <section className="py-24 md:py-40 bg-[#2C2C2C] text-[#FBF9F6] text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl mb-8 tracking-wide">
            Scopri i Frutti del Nostro Lavoro
          </h2>
          <p className="font-sans text-lg md:text-xl font-light text-[#E2DBD3] mb-12 text-balance">
            La tradizione del modo di “fare” il vino come lo facevano i nonni, pur nella modernità degli impianti e attrezzature.
          </p>
          <Link 
            href="/vini"
            className="group flex items-center justify-center gap-4 mx-auto border border-[#8B2635] text-[#FBF9F6] px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#8B2635] transition-all duration-300 w-max"
          >
            Esplora i Vini
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}
