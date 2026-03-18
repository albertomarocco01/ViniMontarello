'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/#storia', label: 'Chi Siamo' },
    { href: '/vini', label: 'I Vini' },
    { href: '/#contatti', label: 'Contatti' },
  ];

  const isHome = pathname === '/';
  const navClass = isScrolled || !isHome || isOpen
    ? 'bg-[#FBF9F6]/95 backdrop-blur-md shadow-sm text-[#2C2C2C]'
    : 'bg-transparent text-white';

  const linkClass = isScrolled || !isHome || isOpen
    ? 'hover:text-[#8B2635]'
    : 'hover:text-amber-200';

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="font-display text-3xl tracking-wider select-none">
          MONTARELLO
        </Link>
        <nav className="hidden md:flex gap-8 font-sans text-sm tracking-widest uppercase">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`transition-colors ${pathname === link.href ? 'opacity-50' : ''} ${linkClass}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FBF9F6] text-[#2C2C2C] border-t border-[#E2DBD3]/30 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-6 font-sans text-sm tracking-widest uppercase items-center">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#8B2635] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
