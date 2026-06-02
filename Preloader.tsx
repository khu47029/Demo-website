import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600; // 1.6 seconds for excellent user experience
    const interval = 20;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0b0d] px-4"
      >
        {/* Subtle radial golden back glow */}
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#d4af37]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-md w-full">
          {/* Logo element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold block mb-2">
              XXXX • XXXX
            </span>
            <h1 className="text-3xl md:text-4xl font-serif-luxury tracking-widest text-white uppercase font-light">
              XXXX
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent mx-auto mt-3" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 block mt-2">
              Unisex Salon
            </span>
          </motion.div>

          {/* Premium Progress Bar */}
          <div className="w-full max-w-[240px] bg-stone-900 h-[2px] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa8620]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Loading details */}
          <div className="flex justify-between w-full max-w-[240px] mt-3 text-[11px] tracking-widest text-stone-400 font-sans">
            <span className="uppercase">Curating Premium Experience</span>
            <span className="text-[#d4af37] font-medium">{Math.min(100, Math.floor(progress))}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
