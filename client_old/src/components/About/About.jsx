import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { ShieldCheck, Factory, Settings, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Engineering <br/> Excellence.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              SNOX® is a global manufacturer and supplier of stainless steel sanitary valves, fittings, tubing, and flow-control solutions. We serve the dairy, food processing, beverage, pharmaceutical, and chemical industries with precision-engineered products.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-12 rounded-3xl border border-slate-100"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-lg text-slate-600">To deliver uncompromising quality in sanitary flow control, ensuring our clients achieve the highest levels of safety and efficiency in their high-purity processing systems.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-12 rounded-3xl text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg text-slate-300">To be the world's most trusted partner for stainless steel fluid handling components, driven by innovation, metallurgy expertise, and exceptional manufacturing standards.</p>
          </motion.div>
        </div>

        <SectionHeading 
          badge="Why SNOX"
          title="Manufacturing Supremacy"
          subtitle="Designed for hygienic applications, SNOX products deliver corrosion resistance, reliable performance, and strict compliance with FDA and ASME standards."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          {[
            { icon: Factory, title: "State-of-the-art Facilities", desc: "Advanced CNC machining and automated polishing." },
            { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous spectrometer analysis for material grade validation." },
            { icon: Settings, title: "Precision Design", desc: "Zero dead-leg designs preventing bacterial entrapment." },
            { icon: Users, title: "Global Support", desc: "Dedicated engineering assistance for complex installations." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-6 text-slate-900">
                <item.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
