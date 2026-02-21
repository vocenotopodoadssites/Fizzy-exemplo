import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, MousePointer2 } from 'lucide-react';

interface BottleOpenerProps {
  onOpen: () => void;
}

export const BottleOpener: React.FC<BottleOpenerProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = React.useState(false);
  const [pressure, setPressure] = React.useState(0);

  const handleOpen = () => {
    if (pressure < 100) {
      setPressure(prev => prev + 25);
      return;
    }
    
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-secondary flex items-center justify-center overflow-hidden p-6">
      {/* Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full"
      />

      <AnimatePresence>
        {!isOpening && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
            className="relative flex flex-col items-center w-full max-w-md"
          >
            {/* The Bottle Container */}
            <div className="relative w-48 md:w-56 h-[500px] flex flex-col items-center">
              {/* Bottle Body - 3D Look with Gradients */}
              <div className="absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-b from-white/20 to-white/5 rounded-[4rem] border border-white/20 backdrop-blur-2xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Liquid Level */}
                <motion.div 
                  animate={{ 
                    height: [`${70 + pressure/10}%`, `${72 + pressure/10}%`, `${70 + pressure/10}%`],
                    y: [0, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-0 left-0 right-0 bg-primary/80"
                >
                   {/* Bubbles in liquid */}
                   {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -300], 
                        x: [0, (Math.random() - 0.5) * 40],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 1 + Math.random() * 2, 
                        repeat: Infinity, 
                        delay: Math.random() * 2 
                      }}
                      className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
                      style={{ bottom: 0, left: `${Math.random() * 100}%` }}
                    />
                  ))}
                </motion.div>
                
                {/* Label */}
                <div className="absolute top-1/2 left-0 right-0 h-24 bg-white flex items-center justify-center -rotate-6 shadow-2xl z-10">
                  <span className="text-primary font-black text-5xl tracking-tighter">FIZZY</span>
                </div>
              </div>

              {/* Bottle Neck */}
              <div className="absolute top-[60px] w-16 h-24 bg-white/10 border-x border-white/20 backdrop-blur-md rounded-t-xl" />

              {/* Cap - The Interaction Point */}
              <motion.button
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-10 w-20 h-10 bg-white rounded-lg shadow-2xl flex items-center justify-center cursor-pointer z-20 group"
              >
                <div className="w-12 h-0.5 bg-primary/30 rounded-full mb-1" />
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none">
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap"
                  >
                    <MousePointer2 size={10} />
                    {pressure < 100 ? `PRESSIONE (${pressure}%)` : 'ABRA AGORA!'}
                  </motion.div>
                </div>
              </motion.button>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-white font-black text-4xl md:text-5xl tracking-tighter uppercase leading-none">
                SINTA A <br />
                <span className="text-primary">VIBRAÇÃO.</span>
              </h2>
              <p className="text-white/40 text-sm mt-4 font-medium tracking-widest uppercase">
                Clique na tampa para liberar o sabor
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Epic Opening Sequence */}
      <AnimatePresence>
        {isOpening && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-[110] flex items-center justify-center"
          >
            {/* Screen Flash */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-white z-[120]"
            />

            {/* Exploding Particles */}
            {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 0 }}
                animate={{ 
                  x: (Math.random() - 0.5) * 2000, 
                  y: (Math.random() - 0.5) * 2000,
                  scale: Math.random() * 3,
                  opacity: 0
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute w-4 h-4 bg-primary rounded-full"
              />
            ))}

            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: [0.5, 1.2, 1], opacity: 1, rotate: 0 }}
              className="text-white font-black text-7xl md:text-9xl italic tracking-tighter z-[130] drop-shadow-[0_0_30px_rgba(255,30,30,0.8)]"
            >
              BOOM!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
