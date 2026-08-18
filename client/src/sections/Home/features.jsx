import { motion } from 'framer-motion';
import { ShieldCheck, Settings, Award, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Uncompromising Quality",
      description: "Manufactured to exact ASME BPE standards ensuring absolute hygienic safety and zero contamination risks."
    },
    {
      icon: <Settings size={32} />,
      title: "Precision Engineering",
      description: "State-of-the-art CNC machining delivers perfect tolerances for seamless integration and leak-proof performance."
    },
    {
      icon: <Award size={32} />,
      title: "Certified Materials",
      description: "Fully traceable SS304 and SS316L stainless steel with complete material certification provided on request."
    },
    {
      icon: <Users size={32} />,
      title: "Expert Support",
      description: "Our engineering team provides dedicated consultation for complex sanitary system designs and installations."
    }
  ];

  return (
    <section className="section bg-secondary">
      <div className="container px-4 sm:px-6 lg:px-8">

        <div className="features-header text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="h2 mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            The Standard of Excellence
          </h2>

          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Why leading pharmaceutical and dairy companies trust our fluid control solutions for their critical process lines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card glass p-5 sm:p-6 md:p-7 lg:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

              <div className="feature-icon-wrapper mb-4 sm:mb-5 md:mb-6">
                {feature.icon}
              </div>

              <h3 className="h3 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">
                {feature.title}
              </h3>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
