'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function ChiSiamoPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="h-dvh overflow-y-auto overflow-x-hidden overscroll-y-contain snap-y snap-mandatory scroll-smooth bg-[#FFF8E6] text-brand-charcoal will-change-scroll"
    >

      {/* ── Slide 1: 1968 ── */}
      <section className="h-dvh snap-start snap-always flex flex-col md:flex-row relative overflow-hidden">

        {/* Mobile: full-bleed background */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/Panorama.jpeg"
            alt="Panorama delle colline astigiane dal Bricco Montarello"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            quality={85}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Text half */}
        <div className="flex-1 flex flex-col justify-center px-8 py-24 md:py-16 md:px-16 lg:px-20 md:bg-[#FFF8E6] relative overflow-hidden">
          <span
            aria-hidden="true"
            className="hidden md:block absolute -bottom-6 -right-4 font-display leading-none select-none pointer-events-none text-[20rem] text-brand-gold/[0.07]"
          >
            1968
          </span>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            viewport={{ root: containerRef, once: true, amount: 0.35 }}
            className="relative z-10 max-w-lg"
          >
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-gold mb-6">
              Le Nostre Radici
            </p>
            <h2 className="font-display italic text-4xl md:text-5xl lg:text-[3.5rem] leading-tight mb-5 text-brand-sand md:text-brand-charcoal">
              1968: Le Origini<br />sul Bricco Montarello
            </h2>
            <div className="w-12 h-px bg-brand-gold mb-8" />
            <p className="font-sans font-light text-base md:text-lg text-white/85 md:text-brand-charcoal/75 leading-[1.9]">
              La nostra storia affonda le radici in uno spartiacque naturale tra Isola e
              Mongardino. In questa posizione privilegiata, dove lo sguardo abbraccia le
              colline astigiane dal Monviso fino al Monte Rosa, la nostra famiglia ha
              scelto di legare il proprio destino alla coltivazione della vite. È qui,
              in questo paesaggio incantevole, che è nata l&apos;anima dei nostri vini.
            </p>
          </motion.div>
        </div>

        {/* Image half — desktop only */}
        <div className="hidden md:block md:flex-1 relative overflow-hidden">
          <Image
            src="/images/Panorama.jpeg"
            alt="Panorama delle colline astigiane dal Bricco Montarello"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="50vw"
            quality={85}
          />
        </div>
      </section>

      {/* ── Slide 2: 1984 ── */}
      <section className="h-dvh snap-start snap-always flex flex-col md:flex-row relative overflow-hidden">

        {/* Mobile: full-bleed background */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/Filari.jpeg"
            alt="I filari della vigna al Ramello, ai piedi di Vigliano"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            quality={85}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Image half — desktop only (left) */}
        <div className="hidden md:block md:flex-1 relative overflow-hidden">
          <Image
            src="/images/Filari.jpeg"
            alt="I filari della vigna al Ramello, ai piedi di Vigliano"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="50vw"
            quality={85}
          />
        </div>

        {/* Text half */}
        <div className="flex-1 flex flex-col justify-center px-8 py-24 md:py-16 md:px-16 lg:px-20 md:bg-[#FFF8E6] relative overflow-hidden">
          <span
            aria-hidden="true"
            className="hidden md:block absolute -bottom-6 -left-4 font-display leading-none select-none pointer-events-none text-[20rem] text-brand-gold/[0.07]"
          >
            1984
          </span>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            viewport={{ root: containerRef, once: true, amount: 0.35 }}
            className="relative z-10 max-w-lg"
          >
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-gold mb-6">
              Il Territorio
            </p>
            <h2 className="font-display italic text-4xl md:text-5xl lg:text-[3.5rem] leading-tight mb-5 text-brand-sand md:text-brand-charcoal">
              1984: Il Radicamento<br />e il Territorio
            </h2>
            <div className="w-12 h-px bg-brand-gold mb-8" />
            <p className="font-sans font-light text-base md:text-lg text-white/85 md:text-brand-charcoal/75 leading-[1.9]">
              Con Giuseppe, l&apos;azienda compie un passo fondamentale trovando la sua
              dimora al Ramello, ai piedi di Vigliano. Questa nuova sede ha permesso di
              radicare profondamente la produzione, preparando il terreno a una vera e
              propria evoluzione stilistica e consolidando il nostro legame indissolubile
              con la terra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Slide 3: 2000 ── */}
      <section className="h-dvh snap-start snap-always flex flex-col md:flex-row relative overflow-hidden">

        {/* Mobile: full-bleed background */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/Vigna.jpeg"
            alt="La vigna di Pier Carlo, distese di viti nel Monferrato"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
            quality={85}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Text half */}
        <div className="flex-1 flex flex-col justify-center px-8 py-24 md:py-16 md:px-16 lg:px-20 md:bg-[#FFF8E6] relative overflow-hidden">
          <span
            aria-hidden="true"
            className="hidden md:block absolute -bottom-6 -right-4 font-display leading-none select-none pointer-events-none text-[20rem] text-brand-gold/[0.07]"
          >
            2000
          </span>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            viewport={{ root: containerRef, once: true, amount: 0.35 }}
            className="relative z-10 max-w-lg"
          >
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-gold mb-6">
              L&apos;Evoluzione
            </p>
            <h2 className="font-display italic text-4xl md:text-5xl lg:text-[3.5rem] leading-tight mb-5 text-brand-sand md:text-brand-charcoal">
              2000: L&apos;Evoluzione<br />e il Vino in Bottiglia
            </h2>
            <div className="w-12 h-px bg-brand-gold mb-8" />
            <p className="font-sans font-light text-base md:text-lg text-white/85 md:text-brand-charcoal/75 leading-[1.9]">
              L&apos;ingresso di Pier Carlo segna un nuovo impulso innovativo. Abbiamo
              saputo ascoltare il cambiamento: non più solo venditori di uve, ma veri e
              propri artigiani del vino. Dalla vigna alla bottiglia, curiamo oggi ogni
              dettaglio per offrire l&apos;autentica tradizione astigiana, interpretata
              con spirito contemporaneo e una passione immutata.
            </p>
          </motion.div>
        </div>

        {/* Image half — desktop only */}
        <div className="hidden md:block md:flex-1 relative overflow-hidden">
          <Image
            src="/images/Vigna.jpeg"
            alt="La vigna di Pier Carlo, distese di viti nel Monferrato"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
            sizes="50vw"
            quality={85}
          />
        </div>
      </section>

      {/* ── Footer ── */}
      <div className="snap-end h-auto shrink-0">
        <Footer />
      </div>

    </div>
  );
}
