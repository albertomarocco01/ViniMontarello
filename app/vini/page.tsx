import { winesData } from '@/lib/data';
import WineCard from '@/components/WineCard';

export default function ViniPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F6] pt-32 pb-24 md:pt-48 md:pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20 md:mb-32">
          <p className="font-sans text-sm tracking-[0.3em] uppercase mb-4 text-[#8B2635]">
            La Nostra Cantina
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#2C2C2C] tracking-wide mb-8">
            I Nostri Vini
          </h1>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto"></div>
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
