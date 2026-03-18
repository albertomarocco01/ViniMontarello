import Hero from '@/components/Hero';
import HistorySection from '@/components/HistorySection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Moved CTA Section immediately after Hero */}
      <section id="esplora" className="py-24 bg-brand-charcoal text-brand-sand text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl mb-6 tracking-wide text-brand-gold">
            Scopri i Frutti del Nostro Lavoro
          </h2>
          <p className="font-sans text-lg md:text-xl font-light text-brand-accent mb-10 text-balance">
            La perfezione di un vino nasce dalla pazienza e dalla dedizione autentica.
          </p>
          <Link 
            href="/vini"
            className="group flex items-center justify-center gap-4 mx-auto border border-brand-wine text-brand-sand px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-brand-wine transition-all duration-300 w-max"
          >
            Esplora i Vini
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      <HistorySection />

    </div>
  );
}
