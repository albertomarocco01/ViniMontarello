import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import FooterWrapper from '@/components/FooterWrapper';
import PageTransition from '@/components/PageTransition';

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
    <html lang="it" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} font-sans flex flex-col min-h-screen`}>
        <Navigation />
        <main className="grow">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}
