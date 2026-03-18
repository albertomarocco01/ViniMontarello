import { winesData } from '@/lib/data';
import WineCard from '@/components/WineCard';

export default function ViniPage() {
  return (
    <div className="min-h-screen bg-[#F5F2EB] pt-32 pb-24 md:pt-48 md:pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 md:mb-32">
          <p className="font-sans text-sm tracking-[0.3em] uppercase mb-4 text-brand-wine">
            La Nostra Cantina
          </p>
          <h1 className="font-display italic text-6xl md:text-8xl text-brand-charcoal tracking-wide mb-8">
            I Nostri Vini
          </h1>
          <div className="w-24 h-px bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-x-12 md:gap-y-24">
          {winesData.map((wine, index) => (
            <WineCard key={wine.id} wine={wine} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
