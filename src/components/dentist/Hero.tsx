import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Soft Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-100 mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Especialista em Estética & Implantes</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-tight mb-6">
            O Sorriso que você <br />
            <span className="text-primary italic">sempre sonhou.</span>
          </h1>
          
          <p className="text-stone-500 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Tecnologia de ponta e cuidado humanizado para transformar sua autoestima através de implantes avançados e estética dental de alta performance.
          </p>
          
          <div className="flex flex-col sm:row gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-accent transition-all shadow-xl shadow-primary/20 group">
              AGENDAR AVALIAÇÃO
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-stone-600 border border-stone-200 px-8 py-4 rounded-full font-bold hover:bg-stone-50 transition-all">
              CONHECER TRATAMENTOS
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/patient-${i}/100/100`} 
                    alt="Patient" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-stone-900">2.000+ Sorrisos Transformados</p>
              <div className="flex items-center gap-1 text-primary">
                <ShieldCheck size={14} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Excelência Comprovada</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[500px] flex items-center justify-center"
        >
          {/* Abstract Dental/Smile Animation */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Central Glowing Orb */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-64 bg-primary/20 blur-[80px] rounded-full"
            />

            {/* Floating "Teeth" / Alignment Bars */}
            <div className="flex gap-3 items-center">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 40, opacity: 0 }}
                  animate={{ 
                    height: [40, 80 + Math.sin(i) * 40, 40],
                    opacity: 1,
                    backgroundColor: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)'
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeInOut" 
                  }}
                  className="w-4 rounded-full opacity-40"
                />
              ))}
            </div>

            {/* Sparkling Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                animate={{ 
                  y: [0, -100, 0],
                  x: [0, (i % 2 === 0 ? 50 : -50), 0],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2, 
                  repeat: Infinity, 
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
                className="absolute"
                style={{ 
                  top: `${40 + Math.random() * 20}%`, 
                  left: `${40 + Math.random() * 20}%` 
                }}
              >
                <Sparkles size={16 + Math.random() * 10} className="text-primary/40" />
              </motion.div>
            ))}

            {/* Floating Info Card (kept but styled for animation) */}
            <motion.div 
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-0 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-2xl z-20 border border-white"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold text-stone-900">Estética 3D</p>
                  <p className="text-stone-400 text-xs font-medium">Simulação Digital</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 left-0 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-2xl z-20 border border-white"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ShieldCheck className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold text-stone-900">Segurança</p>
                  <p className="text-stone-400 text-xs font-medium">Protocolo Suíço</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
