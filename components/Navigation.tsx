'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VineE = () => (
  <span className="inline-block mx-1.5 align-middle transform -translate-y-px">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand-gold/90"
    >
      <path d="M16 10c0-3.3-2.7-6-6-6-3.3 0-6 2.7-6 6s2.7 6 6 6c1.7 0 3.3-.7 4.5-1.9L20 19" />
      <path d="M4 10h12" />
      <path d="M18 5.5l1.5-1.5" opacity="0.6" strokeWidth="1" />
      <circle cx="19.5" cy="4" r="0.8" fill="currentColor" opacity="0.5" />
    </svg>
  </span>
);

interface NavLink {
  href: string;
  label: React.ReactNode;
  children?: { href: string; label: React.ReactNode }[];
}

const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  {
    href: '/catalogo',
    label: 'La nostra cantina',
    children: [
      {
        href: '/catalogo/vini-rossi',
        label: (
          <>
            Vini Rossi <VineE /> Rosati
          </>
        ),
      },
      { href: '/catalogo/vini-bianchi', label: 'Vini Bianchi' },
    ],
  },
  { href: '/contatti', label: 'Contatti' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [cantineOpen, setCantineOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md text-white transition-all"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-display text-3xl tracking-wider select-none [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]"
        >
          MONTARELLO
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 font-sans text-sm tracking-widest uppercase items-center">
          {NAV_LINKS.map((link) => {
            if (link.children) {
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 transition-colors duration-300 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)] hover:text-brand-gold ${
                      isActive(link.href) ? 'text-brand-gold' : ''
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className="mt-px group-hover:rotate-180 transition-transform duration-300"
                    />
                  </Link>

                  {/* Dropdown panel */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="w-52 bg-black/75 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-5 py-4 text-xs tracking-widest uppercase transition-colors duration-200 hover:bg-white/10 hover:text-brand-gold ${
                            pathname === child.href
                              ? 'text-brand-gold bg-white/5'
                              : 'text-white/85'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)] hover:text-brand-gold ${
                  isActive(link.href) ? 'text-brand-gold' : ''
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-5 font-sans text-sm tracking-widest uppercase items-center">
              {NAV_LINKS.map((link) => {
                if (link.children) {
                  return (
                    <div key={link.href} className="flex flex-col items-center gap-3 w-full">
                      <div className="flex items-center gap-2">
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`transition-colors hover:text-brand-gold ${
                            isActive(link.href) ? 'text-brand-gold' : ''
                          }`}
                        >
                          {link.label}
                        </Link>
                        <button
                          onClick={() => setCantineOpen(!cantineOpen)}
                          aria-label="Espandi sottomenu"
                          className="text-white/50 hover:text-brand-gold transition-colors"
                        >
                          <ChevronDown
                            size={13}
                            className={`transition-transform duration-300 ${cantineOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </div>

                      <AnimatePresence>
                        {cantineOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-col items-center gap-4 overflow-hidden w-full"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-xs tracking-widest transition-colors hover:text-brand-gold ${
                                  pathname === child.href
                                    ? 'text-brand-gold'
                                    : 'text-white/65'
                                }`}
                              >
                                — {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors hover:text-brand-gold ${
                      isActive(link.href) ? 'text-brand-gold' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
