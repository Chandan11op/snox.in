import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe2, Award } from 'lucide-react';

export default function Overview() {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: 'Uncompromising Quality',
      description: 'Manufactured with premium grade 316L stainless steel, passing rigorous QA tests to ensure zero-defect delivery.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Precision Engineering',
      description: 'Advanced CNC machining ensures perfect tolerances for leak-proof sealing and smooth operation.'
    },
    {
      icon: <Globe2 size={32} />,
      title: 'Global Standards',
      description: 'Fully compliant with international sanitary and industrial standards including FDA, 3A, and ISO.'
    },
    {
      icon: <Award size={32} />,
      title: 'Industry Expertise',
      description: 'Over two decades of specialized experience delivering tailored solutions for critical flow applications.'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Setting the Standard in <span className="text-accent">Flow Control</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At SNOX, we don't just manufacture valves; we engineer reliability. Our state-of-the-art facilities produce fluid control components that industries trust for their most critical operations. From hygienic dairy processes to harsh chemical environments, our products deliver unmatched performance.
            </p>
            
            <div className="flex items-center space-x-8 mb-10">
              <div>
                <span className="block text-4xl font-display font-bold text-primary mb-1">20+</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Years Exp.</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <span className="block text-4xl font-display font-bold text-primary mb-1">5k+</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Clients</span>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <span className="block text-4xl font-display font-bold text-primary mb-1">100%</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Tested</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-industrial-chrome p-8 rounded-2xl border border-gray-100 hover:border-accent/30 transition-colors group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
