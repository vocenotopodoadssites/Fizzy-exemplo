import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
        isScrolled ? "glass py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-8">
        <a href="#" className="text-2xl font-serif font-bold tracking-widest text-primary">
          BELLA ITALIA
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-wider">
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
        </div>
      </div>
      
      <button
        onClick={onReserveClick}
        className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md active:scale-95"
      >
        RESERVAR MESA
      </button>
    </motion.nav>
  );
};
