import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Shield, Star, Zap, Smile } from 'lucide-react';

const services = [
  {
    title: 'Implantes Dentários',
    icon: Shield,
    description: 'Recupere a função e a estética com implantes de titânio e coroas de porcelana de alta durabilidade.',
    features: ['Carga Imediata', 'Sedação Consciente', 'Planejamento Digital']
  },
  {
    title: 'Facetas & Lentes',
    icon: Sparkles,
    description: 'Transforme a cor e o formato dos seus dentes com lentes de contato de porcelana ultra-finas.',
    features: ['Mínimo Desgaste', 'Cor Natural', 'Alta Resistência']
  },
  {
    title: 'Clareamento Laser',
    icon: Zap,
    description: 'Dentes visivelmente mais brancos em poucas sessões com tecnologia laser indolor.',
    features: ['Resultado Imediato', 'Proteção do Esmalte', 'Personalizado']
  },
  {
    title: 'Invisalign®',
    icon: Smile,
    description: 'Alinhamento dental discreto e confortável com os alinhadores transparentes mais famosos do mundo.',
    features: ['Removível', 'Previsibilidade', 'Estético']
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            Nossas Especialidades
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4"
          >
            Tratamentos de <span className="text-primary italic">Alta Performance.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-stone-100 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-wider">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
