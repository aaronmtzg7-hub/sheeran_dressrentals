import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Instagram, ChevronRight } from 'lucide-react';
import { 
  MapPin,
  Clock,
} from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Esencia', href: '#esencia' },
    { name: 'Colección', href: '#coleccion' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-black-deep">
            <Menu size={24} />
          </button>
          <div className="hidden lg:flex gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a key={link.name} href={link.href} className="text-xs uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className={`text-2xl md:text-3xl font-serif tracking-widest transition-all duration-500 ${isScrolled ? 'text-black-deep' : 'text-black-deep lg:text-white'}`}>
            SHEERAN
          </h1>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex gap-8">
            {navLinks.slice(3).map((link) => (
              <a key={link.name} href={link.href} className="text-xs uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-gold hover:scale-110 transition-transform">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black-deep z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-white text-2xl font-serif tracking-widest">SHEERAN</h2>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-3xl font-serif italic hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto flex gap-6 text-gold">
              <Instagram size={24} />
              <MessageCircle size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;