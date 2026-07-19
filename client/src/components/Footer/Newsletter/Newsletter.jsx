import React from "react";
import iso9001 from "../../../assets/iso_9001.png";
import iso14001 from "../../../assets/iso_14001.png";
import iso45001 from "../../../assets/iso_45001.png";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4 block"
        >
          SNOX.
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight"
        >
          Certified Dealer With <br className="hidden md:block"/> Best Products
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80 hover:opacity-100 transition-opacity"
        >
            <img src={iso9001} alt="ISO 9001" className="h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src={iso14001} alt="ISO 14001" className="h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src={iso45001} alt="ISO 45001" className="h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
