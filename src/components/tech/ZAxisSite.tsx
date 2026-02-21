import React from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'motion/react';
import { Cpu, Globe, Zap, Shield, ChevronRight, Github, Twitter, Layers } from 'lucide-react';

const Section = ({ children, index, scrollProgress }: { children: React.ReactNode, index: number, scrollProgress: any }) => {
  // Objects start far in the background and move towards the viewer
  const z = useTransform(scrollProgress, [index * 0.2, (index + 1) * 0.2], [-2000, 1000]);
  const opacity = useTransform(scrollProgress, [index * 0.2, index * 0.2 + 0.05, (index + 1) * 0.2 - 0.05, (index + 1) * 0.2], [0, 1, 1, 0]);
  const scale = useTransform(scrollProgress, [index * 0.2, (index + 1) * 0.2], [0.2, 2]);
  const blur = useTransform(scrollProgress, [index * 0.2, index * 0.2 + 0.05, (index + 1) * 0.2], ['40px', '0px', '20px']);

  return (
    <motion.section
      style={{ 
        z, 
        opacity, 
        scale,
        filter: `blur(${blur})`,
        transformStyle: 'preserve-3d'
      }}
      className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none"
    >
      <div className="max-w-4xl w-full pointer-events-auto">
        {children}
      </div>
    </motion.section>
  );
};

export const ZAxisSite: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = React.useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setActiveSection(Math.floor(latest * 5));
  });

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-bg overflow-x-hidden">
      {/* Persistent Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 star-field opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(112,0,255,0.15),transparent_70%)]" />
      </div>

      {/* Fixed HUD */}
      <nav className="fixed top-0 left-0 right-0 z-[150] p-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.5)]">
            <Layers className="text-bg" size={24} />
          </div>
          <span className="font-display text-xl tracking-widest">AETHER</span>
        </div>
        <div className="hidden md:flex items-center gap-12 font-mono text-[10px] tracking-[0.3em] text-white/40">
          <a href="#" className="hover:text-primary transition-colors">CORE</a>
          <a href="#" className="hover:text-primary transition-colors">NETWORK</a>
          <a href="#" className="hover:text-primary transition-colors">QUANTUM</a>
          <a href="#" className="hover:text-primary transition-colors">TERMINAL</a>
        </div>
        <button className="px-6 py-2 border border-primary/20 rounded-full font-mono text-[10px] tracking-widest hover:bg-primary hover:text-bg transition-all">
          CONNECT_NODE
        </button>
      </nav>

      {/* Scroll Indicator HUD */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 z-[150] flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: activeSection === i ? 1.5 : 1,
              backgroundColor: activeSection === i ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)',
              boxShadow: activeSection === i ? '0 0 10px var(--color-primary)' : 'none'
            }}
            className="w-1 h-8 rounded-full transition-all duration-300"
          />
        ))}
      </div>

      {/* 3D Scene Container */}
      <div className="fixed inset-0 perspective-1000 preserve-3d">
        
        {/* Section 0: Hero */}
        <Section index={0} scrollProgress={smoothProgress}>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 border border-primary/30 rounded-full text-primary font-mono text-[10px] tracking-[0.5em] mb-8"
            >
              SYSTEM_READY // VER 4.0.2
            </motion.div>
            <h1 className="font-display text-6xl md:text-9xl leading-none tracking-tighter mb-8 text-glow">
              BEYOND <br /> <span className="text-secondary">REALITY.</span>
            </h1>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Navegue pelas camadas da infraestrutura quântica. Onde o código se torna consciência e a latência deixa de existir.
            </p>
            <div className="mt-12 flex justify-center gap-8">
              <div className="flex flex-col items-center">
                <span className="font-mono text-primary text-2xl">0.001ms</span>
                <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Latency</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="font-mono text-primary text-2xl">∞ TB/s</span>
                <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Bandwidth</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 1: The Core */}
        <Section index={1} scrollProgress={smoothProgress}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full aspect-square glass-morphism rounded-3xl flex items-center justify-center relative overflow-hidden group">
                <Cpu size={120} className="text-primary group-hover:scale-110 transition-transform duration-700" />
                {/* Animated Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-2xl shadow-2xl">
                <Zap className="text-white" size={32} />
              </div>
            </div>
            <div>
              <h2 className="font-display text-5xl mb-8">NEURAL <span className="text-primary">CORE.</span></h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Nossa arquitetura de processamento neural distribuído permite que aplicações escalem instantaneamente através de múltiplos planos dimensionais.
              </p>
              <ul className="space-y-4">
                {['Sincronização Atômica', 'Criptografia de Fluxo', 'Auto-Reparo de Malha'].map(item => (
                  <li key={item} className="flex items-center gap-4 font-mono text-xs text-primary/80">
                    <ChevronRight size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Section 2: Global Mesh */}
        <Section index={2} scrollProgress={smoothProgress}>
          <div className="text-center max-w-3xl mx-auto">
            <Globe size={80} className="text-secondary mx-auto mb-12 animate-pulse" />
            <h2 className="font-display text-5xl md:text-7xl mb-8">GLOBAL <span className="text-accent">MESH.</span></h2>
            <p className="text-white/60 text-xl leading-relaxed mb-12">
              Uma rede sem fronteiras, alimentada por satélites de órbita baixa e cabos submarinos de fibra quântica. A internet como ela deveria ser.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-24 glass-morphism rounded-xl flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Section 3: Security */}
        <Section index={3} scrollProgress={smoothProgress}>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="font-display text-5xl mb-8">IMMUTABLE <span className="text-primary">SHIELD.</span></h2>
              <p className="text-white/60 text-lg mb-8">
                Proteção absoluta contra ameaças conhecidas e desconhecidas. Nossa IA de segurança antecipa ataques antes mesmo de serem concebidos.
              </p>
              <button className="bg-white text-bg px-8 py-4 rounded-xl font-bold tracking-widest uppercase text-xs hover:bg-primary transition-colors">
                Ver Protocolos
              </button>
            </div>
            <div className="flex-1 order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64">
                <Shield size={200} className="text-primary opacity-20 absolute inset-0" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-primary/40 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border border-secondary/40 rounded-full"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Section 4: Footer / Contact */}
        <Section index={4} scrollProgress={smoothProgress}>
          <div className="text-center">
            <h2 className="font-display text-5xl md:text-8xl mb-12">JOIN THE <span className="text-primary italic">FUTURE.</span></h2>
            <div className="flex justify-center gap-12 mb-20">
              <a href="#" className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-2">
                <Github size={32} />
                <span className="font-mono text-[8px] tracking-widest uppercase">Source</span>
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-2">
                <Twitter size={32} />
                <span className="font-mono text-[8px] tracking-widest uppercase">Network</span>
              </a>
            </div>
            <div className="p-12 glass-morphism rounded-[3rem] max-w-2xl mx-auto">
              <p className="font-mono text-primary mb-6 tracking-widest">PRONTO PARA TRANSCENDER?</p>
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="ID_USUARIO@AETHER.COM" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 font-mono text-xs outline-none focus:border-primary"
                />
                <button className="bg-primary text-bg px-8 py-4 rounded-2xl font-black text-xs tracking-widest uppercase">
                  ENTER
                </button>
              </div>
            </div>
            <p className="mt-20 font-mono text-[8px] text-white/20 tracking-[0.5em]">
              © 2026 AETHER TRANSCENDENCE CORP // ALL RIGHTS RESERVED
            </p>
          </div>
        </Section>

      </div>

      {/* Scroll Progress HUD (Bottom) */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[150] flex items-center gap-8">
        <span className="font-mono text-[8px] text-white/20 tracking-widest">DEPTH_LEVEL</span>
        <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            style={{ scaleX: smoothProgress }}
            className="h-full bg-primary origin-left"
          />
        </div>
        <span className="font-mono text-[8px] text-primary tracking-widest">
          {Math.round(smoothProgress.get() * 100)}%
        </span>
      </div>
    </div>
  );
};
