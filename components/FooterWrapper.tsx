'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

// Pages where the footer should not appear:
// - '/'  → footer is embedded inside the homepage snap container (page.tsx)
// - '/contatti' → dedicated contact page, footer would duplicate its content
const HIDDEN_ROUTES = ['/', '/contatti', '/catalogo/vini-bianchi', '/catalogo/vini-rossi'];

export default function FooterWrapper() {
  const pathname = usePathname();
  if (HIDDEN_ROUTES.includes(pathname)) return null;
  return <Footer />;
}
