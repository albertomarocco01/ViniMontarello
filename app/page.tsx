import Hero from '@/components/Hero';
import { aboutText } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <div className="h-screen w-full relative">
        <Hero />
      </div>

      {/* 2. Chi Siamo / Le Nostre Radici */}
      <section 
        id="radici" 
        className="h-screen w-full relative flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center bg-fixed px-6"
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="max-w-4xl w-full mx-auto text-center z-10">
          <h2 className="font-display italic text-5xl md:text-7xl text-brand-sand mb-8 drop-shadow-lg">{aboutText.chiSiamo.title}</h2>
          <div className="w-24 h-px bg-brand-gold mx-auto mb-10 shadow-sm"></div>
          <p className="font-sans font-light text-xl md:text-2xl text-white/95 leading-relaxed text-balance drop-shadow">
            {aboutText.chiSiamo.content}
          </p>
        </div>
      </section>

      {/* 3. Cantina / Cellar Presentation */}
      <section 
        id="cantina" 
        className="h-screen w-full relative flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed px-6"
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="max-w-4xl w-full mx-auto text-center z-10">
          <h2 className="font-display italic text-5xl md:text-7xl text-brand-gold mb-8 drop-shadow-lg">{aboutText.cantina.title}</h2>
          <div className="w-24 h-px bg-brand-sand mx-auto mb-10 shadow-sm"></div>
          <p className="font-sans font-light text-xl md:text-2xl text-white/95 leading-relaxed text-balance drop-shadow">
            {aboutText.cantina.content}
          </p>
        </div>
      </section>

      {/* 4. I Vini CTA */}
      <section 
        id="esplora" 
        className="h-screen w-full relative flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed px-6"
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="max-w-3xl mx-auto text-center z-10">
          <p className="font-sans text-sm tracking-[0.3em] uppercase mb-4 text-brand-gold drop-shadow">La Nostra Selezione</p>
          <h2 className="font-display italic text-6xl md:text-8xl mb-8 tracking-wide text-brand-sand drop-shadow-xl">
            I Nostri Vini
          </h2>
          <div className="w-32 h-px bg-brand-gold mx-auto mb-12 shadow-sm"></div>
          <p className="font-sans text-lg md:text-2xl font-light text-white/90 mb-12 text-balance drop-shadow">
            La perfezione di un vino nasce dalla pazienza e dalla dedizione autentica.
          </p>
          <Link 
            href="/vini"
            className="group flex flex-col md:flex-row items-center justify-center gap-4 mx-auto border border-brand-gold text-brand-gold px-12 py-5 uppercase tracking-[0.2em] text-sm hover:bg-brand-gold hover:text-black transition-all duration-500 w-max"
          >
            <span>Esplora il Catalogo</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300 hidden md:block" />
          </Link>
        </div>
      </section>
    </div>
  );
}
