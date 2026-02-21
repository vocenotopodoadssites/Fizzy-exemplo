import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Clock, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#F27D26_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} className="fill-primary" />
            Eletricistas Certificados
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Energia Segura para sua <span className="text-primary italic">Casa ou Indústria.</span>
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Instalações, manutenções e reparos elétricos com o mais alto padrão de segurança e tecnologia. Atendimento 24h para emergências.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 group">
              SOLICITAR ORÇAMENTO
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
              NOSSOS SERVIÇOS
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-1">
              <ShieldCheck className="text-primary mb-2" />
              <span className="text-white font-bold">Segurança</span>
              <span className="text-stone-500 text-xs uppercase tracking-wider">Norma NR-10</span>
            </div>
            <div className="flex flex-col gap-1">
              <Clock className="text-primary mb-2" />
              <span className="text-white font-bold">24 Horas</span>
              <span className="text-stone-500 text-xs uppercase tracking-wider">Sempre Ativos</span>
            </div>
            <div className="flex flex-col gap-1">
              <Zap className="text-primary mb-2" />
              <span className="text-white font-bold">Agilidade</span>
              <span className="text-stone-500 text-xs uppercase tracking-wider">Reparo Rápido</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/professional-electrician/800/1000" 
              alt="Electrician at work" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Stats Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-4"
          >
            <div className="bg-green-100 p-3 rounded-full">
              <ShieldCheck className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">15+ Anos</p>
              <p className="text-stone-500 text-xs font-medium uppercase tracking-wider">De Experiência</p>
            </div>
          </motion.div>
          
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
