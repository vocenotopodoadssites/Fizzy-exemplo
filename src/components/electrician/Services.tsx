import React from 'react';
import { motion } from 'motion/react';
import { Home, Factory, Zap, Wrench, ShieldAlert, Lightbulb } from 'lucide-react';

const services = [
  {
    title: 'Residencial',
    icon: Home,
    description: 'Instalações completas, quadros de energia, iluminação LED e reparos em geral para sua casa.',
    features: ['Instalação de Chuveiros', 'Troca de Fiação', 'Quadros de Disjuntores'],
    color: 'bg-blue-500'
  },
  {
    title: 'Industrial',
    icon: Factory,
    description: 'Manutenção de máquinas, painéis de comando, subestações e projetos de alta tensão.',
    features: ['Painéis Elétricos', 'Motores Trifásicos', 'Projetos NR-10'],
    color: 'bg-orange-500'
  },
  {
    title: 'Emergência 24h',
    icon: ShieldAlert,
    description: 'Atendimento imediato para curtos-circuitos, quedas de energia e panes elétricas críticas.',
    features: ['Diagnóstico Rápido', 'Reparo Imediato', 'Disponibilidade Total'],
    color: 'bg-red-500'
  },
  {
    title: 'Iluminação',
    icon: Lightbulb,
    description: 'Projetos luminotécnicos modernos para ambientes internos e externos com foco em economia.',
    features: ['LED de Alta Eficiência', 'Automação Residencial', 'Sensores de Presença'],
    color: 'bg-yellow-500'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-surface">
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
            className="text-4xl md:text-5xl font-bold text-secondary mt-4"
          >
            Soluções Elétricas <br className="hidden md:block" /> para <span className="text-primary">Qualquer Desafio.</span>
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
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-wider">
                    <Zap size={12} className="text-primary" />
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
