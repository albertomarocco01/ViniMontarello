import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { whiteWines } from '@/lib/data';
import WineDetailLayout from '@/components/WineDetailLayout';

export function generateStaticParams() {
  return whiteWines.map((wine) => ({ slug: wine.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const wine = whiteWines.find((w) => w.slug === slug);
  if (!wine) return {};
  return {
    title: `${wine.name} | Vini Montarello`,
    description: wine.description,
  };
}

export default async function ViniBianchiSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wine = whiteWines.find((w) => w.slug === slug);

  if (!wine) notFound();

  return (
    <WineDetailLayout
      wine={wine}
      backHref="/catalogo/vini-bianchi"
      backLabel="Torna ai Vini Bianchi"
    />
  );
}
