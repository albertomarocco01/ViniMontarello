import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { redWines } from '@/lib/data';
import WineDetailLayout from '@/components/WineDetailLayout';

export function generateStaticParams() {
  return redWines.map((wine) => ({ slug: wine.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const wine = redWines.find((w) => w.slug === slug);
  if (!wine) return {};
  return {
    title: `${wine.name} | Vini Montarello`,
    description: wine.description,
  };
}

export default async function ViniRossiSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wine = redWines.find((w) => w.slug === slug);

  if (!wine) notFound();

  return (
    <WineDetailLayout
      wine={wine}
      backHref="/catalogo/vini-rossi"
      backLabel="Torna ai Vini Rossi"
    />
  );
}
