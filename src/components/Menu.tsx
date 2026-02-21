import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { cn } from '../lib/utils';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<'Antipasti' | 'Primi' | 'Secondi' | 'Dolci'>('Antipasti');
  const categories: ('Antipasti' | 'Primi' | 'Secondi' | 'Dolci')[] = ['Antipasti', 'Primi', 'Secondi', 'Dolci'];

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Nosso Menu</h2>
          <div className="w-24 h-px bg-primary mx-auto mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-sm uppercase tracking-widest pb-2 transition-all border-b-2",
                  activeCategory === category 
                    ? "border-primary text-primary font-bold" 
                    : "border-transparent text-stone-400 hover:text-stone-600"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 group"
              >
                <div className="relative overflow-hidden rounded-2xl w-full sm:w-32 h-32 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif font-medium">{item.name}</h3>
                    <span className="text-primary font-serif font-bold">{item.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed italic">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
