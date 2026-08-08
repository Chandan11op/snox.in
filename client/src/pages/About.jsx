import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="text-accent" size={32} />,
      title: 'Precision Focus',
      desc: 'Every micron matters. Our engineering standards leave no room for error.'
    },
    {
      icon: <Lightbulb className="text-accent" size={32} />,
      title: 'Continuous Innovation',
      desc: 'Investing heavily in R&D to bring smarter, more efficient fluid control.'
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: 'Client Partnership',
      desc: 'We do not just sell valves; we build long-term engineering partnerships.'
    },
    {
      icon: <Award className="text-accent" size={32} />,
      title: 'Certified Excellence',
      desc: 'Committed to exceeding global quality benchmarks (ISO, FDA, 3A).'
    }
  ];

  return (
    <div className="bg-industrial-chrome min-h-screen pb-24">
      {/* Hero Section */}
      <div className="bg-primary text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/images/hero-bg.png" alt="SNOX Engineering Facility" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
          <motion.div 
            className="absolute -top-40 -left-40 w-96 h-96 bg-accent opacity-20 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-white"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            For over two decades, SNOX has been at the forefront of industrial fluid control, delivering uncompromising quality to the world's most demanding sectors.
          </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-premium border border-gray-100 p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Our Legacy of Quality</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded with a singular vision to redefine precision engineering in fluid mechanics, SNOX has grown from a specialized local workshop to a globally recognized manufacturer of premium valves and fittings.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our state-of-the-art manufacturing facility combines advanced CNC machining, rigorous metallurgical testing, and uncompromising quality assurance protocols. Whether it's a high-pressure chemical pipeline or an ultra-hygienic pharmaceutical process, SNOX products are trusted where failure is not an option.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
              <img 
                src="/assets/products/BALLVALVE/tc-ball-valve.jpg" 
                alt="Industrial precision valve" 
                className="w-full h-full object-cover scale-110"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">The principles that drive our engineering and shape our culture.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, scale: 1.03, rotateX: 2, rotateY: 2 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-premium hover:border-accent/30 transition-all group"
            >
              <div className="w-16 h-16 bg-industrial-chrome rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {val.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
