import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Réalisations', href: '#portfolio' },
    { name: 'Méthodologie', href: '#process' },
    { name: 'À Propos', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-heading font-bold text-2xl text-primary">
          <div className="bg-primary text-white p-1.5 rounded-lg">
            <BarChart2 size={24} />
          </div>
          <span className={scrolled ? 'text-gray-900' : 'text-white drop-shadow-md'}>
            Lean<span className="text-primary">Tech</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium text-sm transition-colors hover:text-secondary ${scrolled ? 'text-gray-600' : 'text-white/90 hover:text-white drop-shadow-sm'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-secondary hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md"
          >
            Me Contacter
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-gray-900" size={28} />
          ) : (
            <Menu className={scrolled ? "text-gray-900" : "text-white"} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-gray-600 font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-primary text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Demander un devis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;