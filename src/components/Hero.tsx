import React from 'react';
import { motion } from 'motion/react';
import { Utensils } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/italian-food/1920/1080"
          alt="Italian Restaurant"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="flex items-center justify-center gap-2 text-sm uppercase tracking-[0.3em] mb-4 font-medium">
            <Utensils size={16} />
            Dal 1985
          </span>
          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
            A Essência da <br />
            <span className="italic">Cucina Italiana</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light opacity-90">
            Sabores autênticos, ingredientes frescos e a tradição que atravessa gerações no coração da cidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="px-8 py-3 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              VER MENU
            </a>
            <a
              href="#about"
              className="px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              NOSSA HISTÓRIA
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50"
      >
        <div className="w-px h-12 bg-white mx-auto" />
      </motion.div>
    </section>
  );
};
