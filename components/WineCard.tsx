'use client';

import { motion } from 'framer-motion';

interface WineCardProps {
  wine: {
    id: string;
    name: string;
    type: string;
    description: string;
    image: string;
  };
  index: number;
}

export default function WineCard({ wine, index }: WineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col items-center text-center max-w-sm mx-auto w-full"
    >
      <div className="w-full aspect-[3/4] overflow-hidden bg-[#E2DBD3] mb-8 relative">
        <motion.img 
          src={wine.image}
          alt={wine.name}
          className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-700"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="absolute inset-4 border border-white/0 group-hover:border-white/30 transition-colors duration-500 z-10 pointer-events-none" />
      </div>

      <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#8B2635] mb-3">
        {wine.type}
      </p>
      <h3 className="font-serif text-2xl md:text-3xl text-[#2C2C2C] mb-4 tracking-wide">
        {wine.name}
      </h3>
      <p className="font-sans text-sm font-light leading-relaxed text-[#666666] text-balance">
        {wine.description}
      </p>
      
      <div className="mt-8 h-[1px] w-12 bg-[#D4AF37] group-hover:w-24 transition-all duration-500" />
    </motion.div>
  );
}
