'use client';

import { historyData } from '@/lib/data';
import { motion } from 'framer-motion';

export default function HistorySection() {
  return (
    <section id="storia" className="py-24 md:py-40 bg-brand-sand text-brand-charcoal overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 md:mb-32"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-brand-wine mb-6 tracking-wide">
            Le Nostre Radici
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto"></div>
        </motion.div>

        <div className="space-y-16 md:space-y-32">
          {historyData.map((block, index) => (
            <motion.div 
              key={block.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 text-lg md:text-xl font-sans font-light leading-relaxed text-balance text-[#4A4A4A]">
                <p>{block.text}</p>
              </div>

              {block.image && (
                <div className="flex-1 w-full relative z-0">
                  <div className="relative aspect-square md:aspect-4/5 overflow-hidden w-full max-w-md mx-auto">
                    <img 
                      src={block.image} 
                      alt={block.alt} 
                      className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
