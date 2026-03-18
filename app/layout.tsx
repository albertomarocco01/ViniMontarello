import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { LenisProvider } from '@/components/LenisProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' });

export const metadata: Metadata = {
  title: 'Vini Montarello | Azienda Agricola',
  description: 'Azienda Agricola Montarello: storia, tradizione e vini nel cuore del Monferrato.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} font-sans flex flex-col min-h-screen`}>
        <LenisProvider>
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
