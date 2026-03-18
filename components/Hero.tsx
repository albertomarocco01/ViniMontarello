'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?q=80&w=2070&auto=format&fit=crop" 
          alt="Vigneto Astigiano al tramonto" 
          className="w-full h-full object-cover"
        />
        {/* <!-- INSERT AI IMAGE: Asti vineyard at golden hour --> */}
      </motion.div>

      <div className="relative z-20 text-center px-6 mt-16 text-[#FBF9F6]">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-amber-100"
        >
          Azienda Agricola
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-wide mb-8"
        >
          Montarello
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-sans text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto text-gray-200"
        >
          Storia, tradizione e passione nel cuore del Monferrato dal 1968.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
      >
        <span className="font-sans text-xs tracking-[0.2em] uppercase text-white/70">Scorri</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
