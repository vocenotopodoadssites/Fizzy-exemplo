import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Instagram, Twitter, Facebook, Target, ArrowRight, Star, Zap } from 'lucide-react';

const MiniBottle = ({ color = 'bg-primary', className = '', isKnocked = false }) => (
  <motion.div 
    animate={isKnocked ? { rotate: 95, y: 40, opacity: 0.3, scale: 0.9 } : { rotate: 0, y: 0, opacity: 1, scale: 1 }}
    className={`relative w-10 h-24 flex flex-col items-center flex-shrink-0 ${className}`}
  >
    <div className={`w-4 h-2 bg-stone-300 rounded-t-sm mb-0.5`} />
    <div className={`w-5 h-8 ${color} rounded-t-xl opacity-90`} />
    <div className={`w-10 h-14 rounded-b-2xl rounded-t-sm ${color} shadow-2xl flex items-center justify-center overflow-hidden relative`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
      <div className="w-full h-4 bg-white/20 rotate-[-45deg]" />
    </div>
  </motion.div>
);

export const SodaSite: React.FC = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [knockedDown, setKnockedDown] = React.useState<boolean[]>(new Array(6).fill(false));
  const [isThrowing, setIsThrowing] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const resetGame = () => {
    setKnockedDown(new Array(6).fill(false));
    setScore(0);
  };

  const handleThrow = (event: any, info: any) => {
    if (isThrowing) return;
    
    setIsThrowing(true);
    const targetIndex = Math.floor(Math.random() * 6);
    
    setTimeout(() => {
      setKnockedDown(prev => {
        const next = [...prev];
        if (!next[targetIndex]) {
          next[targetIndex] = true;
          setScore(s => s + 100);
        }
        return next;
      });
      setIsThrowing(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-8 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-primary font-black text-3xl tracking-tighter"
        >
          FIZZY.
        </motion.div>
        
        <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-secondary/60">
          {['Sabores', 'Artesanal', 'Planeta', 'Lojas'].map((item) => (
            <a key={item} href="#" className="hover:text-primary transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary/40 hover:text-secondary transition-colors">
            <Star size={14} />
            Membro Club
          </button>
          <button className="bg-secondary text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-primary transition-all active:scale-95">
            <ShoppingCart size={20} />
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section - Immersive */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.h2 
              style={{ y: heroY, opacity: 0.05 }}
              className="text-[30vw] font-black text-secondary leading-none whitespace-nowrap"
            >
              REFRESH REFRESH
            </motion.h2>
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ opacity: heroOpacity }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                <Zap size={14} className="fill-primary" />
                Nova Fórmula 2026
              </div>
              <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black text-secondary leading-[0.8] tracking-tighter mb-8">
                ABRA O <br />
                <span className="text-primary italic">ÉPICO.</span>
              </h1>
              <p className="text-xl text-stone-500 font-medium max-w-md mx-auto lg:mx-0 mb-12 leading-relaxed">
                Não é apenas um refrigerante. É uma explosão sensorial destilada em cada bolha. Artesanal, orgânico e puramente intenso.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button className="bg-secondary text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-primary transition-all shadow-2xl flex items-center gap-3 group">
                  EXPLORAR SABORES
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                    +50k Amantes <br /> de Fizz
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Massive Soda Can */}
              <div className="relative group">
                <motion.div
                  animate={{ y: [0, -30, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-64 md:w-80 lg:w-96 aspect-[1/2] bg-primary rounded-[4rem] shadow-[0_80px_150px_rgba(255,30,30,0.4)] flex flex-col items-center justify-center border-[12px] border-white/20 relative overflow-hidden"
                >
                  {/* Can Shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/30 pointer-events-none" />
                  
                  <div className="w-full h-40 bg-white flex items-center justify-center rotate-[-12deg] shadow-2xl relative z-10">
                    <span className="text-primary font-black text-7xl md:text-8xl tracking-tighter">FIZZY</span>
                    {/* Mini bottle over FIZZY */}
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 rotate-[20deg] animate-float">
                      <MiniBottle color="bg-primary" className="scale-110" />
                    </div>
                  </div>

                  {/* Bubbles inside can visual */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden opacity-20">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -400], opacity: [0, 1, 0] }}
                        transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                        className="absolute w-4 h-4 bg-white rounded-full"
                        style={{ left: `${Math.random() * 100}%`, bottom: '-20px' }}
                      />
                    ))}
                  </div>
                </motion.div>
                
                {/* Floating Badge */}
                <motion.div 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-accent rounded-full flex items-center justify-center p-4 shadow-2xl"
                >
                  <p className="text-secondary font-black text-[10px] text-center uppercase tracking-tighter leading-none">
                    100% <br /> NATURAL <br /> EXPLOSÃO
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-32 px-6 bg-secondary text-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                className="md:col-span-2 glass-card p-12 rounded-[3rem] flex flex-col justify-end min-h-[400px]"
              >
                <h3 className="text-5xl font-black mb-6">A CIÊNCIA DA <br /> <span className="text-primary">BOLHA PERFEITA.</span></h3>
                <p className="text-white/60 max-w-md">Nossa carbonatação é feita em temperatura glacial para garantir que cada gole seja tão refrescante quanto o primeiro.</p>
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.1 }}
                className="bg-primary p-12 rounded-[3rem] flex flex-col items-center justify-center text-center"
              >
                <div className="text-7xl font-black mb-4">0%</div>
                <p className="font-black uppercase tracking-widest text-xs">Açúcar Artificial</p>
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.2 }}
                className="bg-accent p-12 rounded-[3rem] flex flex-col justify-between text-secondary"
              >
                <Star size={40} className="fill-secondary" />
                <h4 className="text-3xl font-black">PREMIADO <br /> MUNDIALMENTE</h4>
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 glass-card p-12 rounded-[3rem] flex flex-col md:flex-row items-center gap-12"
              >
                <div className="flex-1">
                  <h3 className="text-4xl font-black mb-4">SUSTENTÁVEL POR <br /> NATUREZA.</h3>
                  <p className="text-white/60">Nossas latas são 100% recicláveis e nossa produção é neutra em carbono.</p>
                </div>
                <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <div className="w-16 h-16 bg-primary rounded-full animate-pulse" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Flavors Grid - Modernized */}
        <section id="flavors" className="py-32 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Coleção 2026</span>
                <h2 className="text-6xl md:text-8xl font-black text-secondary tracking-tighter leading-none">SABORES QUE <br /> <span className="text-stroke text-secondary">VIBRAM.</span></h2>
              </div>
              <p className="text-stone-500 max-w-xs font-medium">Uma seleção curada para os paladares mais exigentes e aventureiros.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: 'Classic Red', color: 'bg-primary', desc: 'O ícone. Intenso, vibrante e inesquecível.', tag: 'Best Seller' },
                { name: 'Electric Lime', color: 'bg-lime-500', desc: 'Uma descarga de energia cítrica pura.', tag: 'Fresh' },
                { name: 'Midnight Grape', color: 'bg-purple-600', desc: 'Doce, profundo e misterioso.', tag: 'Limited' }
              ].map((flavor, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -20 }}
                  className="group bg-white p-12 rounded-[4rem] shadow-xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all border border-stone-100 relative overflow-hidden"
                >
                  <div className="absolute top-8 right-8 bg-stone-100 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-stone-400">
                    {flavor.tag}
                  </div>
                  
                  <div className="flex justify-center mb-12">
                    <MiniBottle color={flavor.color} className="scale-[2] group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4">{flavor.name}</h3>
                  <p className="text-stone-500 mb-10 leading-relaxed">{flavor.desc}</p>
                  
                  <button className="w-full bg-stone-50 text-secondary py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] group-hover:bg-primary group-hover:text-white transition-all">
                    Adicionar ao Carrinho
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Arcade Knockdown Game - Polished */}
        <section className="py-32 px-6 bg-secondary text-white relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FF1E1E_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-block bg-primary/20 text-primary px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-primary/30">
              Arcade Mode
            </div>
            <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">DERRUBE A <span className="text-primary italic">SEDE!</span></h2>
            <p className="text-white/40 mb-16 uppercase tracking-[0.2em] font-bold text-sm">Arraste a bolinha e teste sua mira</p>
            
            <div className="relative h-[500px] bg-white/5 rounded-[4rem] border border-white/10 shadow-2xl flex flex-col items-center justify-between p-12 overflow-hidden backdrop-blur-sm">
              {/* Score Board */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Score</p>
                <div className="text-5xl font-black text-primary tabular-nums">{score.toString().padStart(4, '0')}</div>
              </div>

              {/* Bottles Row */}
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-10 items-end h-40 mt-20">
                {knockedDown.map((isKnocked, i) => (
                  <div key={i} className="relative group">
                    <MiniBottle 
                      color={i % 2 === 0 ? 'bg-primary' : 'bg-accent'} 
                      isKnocked={isKnocked} 
                      className="scale-110 md:scale-125"
                    />
                    {!isKnocked && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/20 rounded-full blur-sm" />}
                  </div>
                ))}
              </div>

              {/* Controls */}
              <div className="w-full flex justify-between items-center mt-12">
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Status</p>
                  <p className="text-xs font-bold text-primary">{isThrowing ? 'LANÇANDO...' : 'PRONTO'}</p>
                </div>
                
                <div className="relative">
                  <motion.div
                    drag
                    dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
                    dragElastic={0.6}
                    onDragEnd={handleThrow}
                    animate={isThrowing ? { y: -400, scale: 0.3, opacity: 0 } : { y: 0, scale: 1, opacity: 1 }}
                    className="w-20 h-20 bg-primary rounded-full shadow-[0_0_40px_rgba(255,30,30,0.5)] cursor-grab active:cursor-grabbing flex items-center justify-center text-white border-4 border-white/20"
                  >
                    <Target size={32} />
                  </motion.div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-widest text-white/40 whitespace-nowrap">
                    Arraste para cima
                  </div>
                </div>

                <button 
                  onClick={resetGame}
                  className="bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border border-white/10"
                >
                  Resetar
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - High Contrast */}
      <footer className="bg-secondary text-white py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-24">
            <div className="lg:col-span-2">
              <div className="text-primary font-black text-6xl tracking-tighter mb-10">FIZZY.</div>
              <h4 className="text-2xl font-black mb-6">INSCREVA-SE NA NOSSA <br /> <span className="text-primary">NEWSLETTER VIBRANTE.</span></h4>
              <div className="flex max-w-md">
                <input type="email" placeholder="seu@email.com" className="flex-1 bg-white/5 border border-white/10 rounded-l-2xl px-6 outline-none focus:border-primary transition-all" />
                <button className="bg-primary px-8 py-4 rounded-r-2xl font-black uppercase tracking-widest text-xs">OK</button>
              </div>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-widest text-primary mb-8">Navegação</h5>
              <ul className="space-y-4 text-stone-500 font-bold text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Produtos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">História</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustentabilidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lojas</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-widest text-primary mb-8">Social</h5>
              <div className="flex gap-6">
                <Instagram size={24} className="hover:text-primary cursor-pointer transition-colors" />
                <Twitter size={24} className="hover:text-primary cursor-pointer transition-colors" />
                <Facebook size={24} className="hover:text-primary cursor-pointer transition-colors" />
              </div>
              <p className="mt-12 text-stone-600 text-xs font-medium leading-relaxed">
                São Paulo, Brasil <br />
                Av. Brigadeiro Faria Lima, 4500 <br />
                contato@fizzy.com.br
              </p>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-stone-700">
            <p>© 2026 FIZZY BEVERAGES CO. TODOS OS DIREITOS RESERVADOS.</p>
            <div className="flex gap-8">
              <a href="#">Privacidade</a>
              <a href="#">Termos</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
