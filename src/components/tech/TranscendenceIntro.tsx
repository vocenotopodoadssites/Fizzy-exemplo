import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Power } from 'lucide-react';

interface TranscendenceIntroProps {
  onComplete: () => void;
}

export const TranscendenceIntro: React.FC<TranscendenceIntroProps> = ({ onComplete }) => {
  const [isTriggered, setIsTriggered] = React.useState(false);

  const handleTrigger = () => {
    setIsTriggered(true);
    setTimeout(onComplete, 3000);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-bg flex items-center justify-center overflow-hidden">
      {/* Star Field Background */}
      <div className="absolute inset-0 star-field opacity-20" />
      
      <AnimatePresence>
        {!isTriggered ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
            className="relative flex flex-col items-center"
          >
            {/* Pulsing Core */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 20px rgba(0, 240, 255, 0.2)',
                  '0 0 60px rgba(112, 0, 255, 0.4)',
                  '0 0 20px rgba(0, 240, 255, 0.2)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center relative"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleTrigger}
                className="w-24 h-24 rounded-full bg-bg flex items-center justify-center text-primary group transition-colors hover:text-white"
              >
                <Power size={40} className="group-hover:drop-shadow-[0_0_10px_#00F0FF]" />
              </motion.button>
              
              {/* Outer Rings - Added pointer-events-none to prevent blocking clicks */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-20px] border border-white/5 rounded-full pointer-events-none"
                  style={{ margin: i * -20 }}
                />
              ))}
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <h1 className="font-display text-2xl tracking-[0.5em] uppercase text-white/40">
                AETHER <span className="text-primary">PROTOCOL</span>
              </h1>
              <p className="font-mono text-[10px] mt-4 text-primary/40 tracking-widest">
                INICIALIZAR TRANSCENDÊNCIA DIGITAL
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Warp Speed Lines */}
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: (Math.random() - 0.5) * 100, 
                  y: (Math.random() - 0.5) * 100, 
                  z: -1000,
                  opacity: 0 
                }}
                animate={{ 
                  z: 1000,
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: Math.random() * 2,
                  ease: "easeIn"
                }}
                className="absolute w-0.5 h-0.5 bg-primary"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%`,
                  transform: 'translateZ(0)'
                }}
              />
            ))}

            {/* Central Tunnel Glow */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 20], opacity: [0, 1, 0] }}
              transition={{ duration: 2.5, ease: "easeIn" }}
              className="w-64 h-64 rounded-full bg-white blur-[100px] z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.5] }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-white font-display text-4xl md:text-6xl tracking-[1em] uppercase z-[60]"
            >
              TRANSCENDENDO
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
