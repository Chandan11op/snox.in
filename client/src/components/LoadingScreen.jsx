import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sjLogo from '../assets/logo/sj.png';

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    // Simulate loading time (e.g. 2 seconds)
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-primary flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20"
        />
        <motion.img 
          src={sjLogo} 
          alt="Loading..." 
          className="h-24 w-auto relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full overflow-hidden"
        >
          <motion.div 
            className="h-full bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
