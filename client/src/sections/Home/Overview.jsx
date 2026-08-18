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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-4 sm:mb-5 md:mb-6 leading-tight">
              Setting the Standard in{' '}
              <span className="text-accent">Flow Control</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              At SNOX, we don't just manufacture valves; we engineer reliability. Our state-of-the-art facilities produce fluid control components that industries trust for their most critical operations. From hygienic dairy processes to harsh chemical environments, our products deliver unmatched performance.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-y-6 mb-8 sm:mb-10">

              <div className="pr-5 sm:pr-8">
                <span className="block text-3xl sm:text-4xl font-display font-bold text-primary mb-1">
                  20+
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Years Exp.
                </span>
              </div>

              <div className="w-px h-10 sm:h-12 bg-gray-200"></div>

              <div className="px-5 sm:px-8">
                <span className="block text-3xl sm:text-4xl font-display font-bold text-primary mb-1">
                  5k+
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Clients
                </span>
              </div>

              <div className="w-px h-10 sm:h-12 bg-gray-200"></div>

              <div className="pl-5 sm:pl-8">
                <span className="block text-3xl sm:text-4xl font-display font-bold text-primary mb-1">
                  100%
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Tested
                </span>
              </div>

            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-industrial-chrome p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-100 hover:border-accent/30 transition-colors group"
              >

                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-primary mb-2 sm:mb-3 leading-snug">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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