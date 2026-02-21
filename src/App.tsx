import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TranscendenceIntro } from './components/tech/TranscendenceIntro';
import { ZAxisSite } from './components/tech/ZAxisSite';

export default function App() {
  const [isTranscended, setIsTranscended] = React.useState(false);

  React.useEffect(() => {
    if (!isTranscended) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isTranscended]);

  return (
    <div className="min-h-screen bg-bg">
      <AnimatePresence mode="wait">
        {!isTranscended ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <TranscendenceIntro onComplete={() => setIsTranscended(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <ZAxisSite />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
