import React from 'react';
import { motion } from 'motion/react';
import { Heart, Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Especialidades', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Resultados', href: '#results' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-primary">
            <Heart size={32} className="fill-primary/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-tight text-stone-900 leading-none">
              SORRISO<span className="text-primary">IDEAL</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Odontologia</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-stone-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent transition-all shadow-lg shadow-primary/20"
          >
            <Calendar size={16} />
            AGENDAR CONSULTA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-stone-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-stone-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl text-sm font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Calendar size={18} />
            AGENDAR CONSULTA
          </a>
        </motion.div>
      )}
    </nav>
  );
};
