import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ 
  title, 
  subtitle, 
  badge,
  centered = false,
  light = false
}) => {
  return (
    <div className={`mb-16 md:mb-24 flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
      {badge && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 ${
            light ? 'bg-white/10 text-white' : 'bg-industrial-100 text-industrial-600'
          }`}
        >
          {badge}
        </motion.div>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 ${
          light ? 'text-white' : 'text-industrial-950'
        }`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className={`text-lg md:text-xl max-w-2xl ${
            light ? 'text-industrial-300' : 'text-industrial-500'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
