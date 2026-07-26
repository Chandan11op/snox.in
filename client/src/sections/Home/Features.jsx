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
      <div className="container">
        <div className="features-header text-center mb-16">
          <h2 className="h2 mb-4">The Standard of Excellence</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Why leading pharmaceutical and dairy companies trust our fluid control solutions for their critical process lines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon-wrapper mb-6">
                {feature.icon}
              </div>
              <h3 className="h3 mb-3 text-md">{feature.title}</h3>
              <p className="text-sm text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
