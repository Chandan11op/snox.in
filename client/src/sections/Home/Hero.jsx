import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import tcBallValve from '../../assets/products/BALLVALVE/tc-ball-valve.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
      {/* Background abstract elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-accent opacity-20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-primary-light opacity-50 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-white pr-0 lg:pr-12 text-center lg:text-left mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent font-medium text-sm mb-6 uppercase tracking-wider backdrop-blur-sm">
              Premium Industrial Solutions
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Precision <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">Engineered</span> <br/>
            Flow Control.
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            SNOX delivers industry-leading sanitary and industrial valves, fittings, and fluid control accessories designed for maximum reliability and performance.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/products" className="group flex items-center justify-center bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-glow w-full sm:w-auto">
              Explore Products
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link to="/contact" className="group flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 w-full sm:w-auto backdrop-blur-sm">
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Image/Visual Content */}
        <motion.div 
          className="w-full lg:w-1/2 mt-16 lg:mt-0 relative hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Decorative rings */}
            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Center Image */}
            <motion.div 
              className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-white flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={tcBallValve} 
                alt="Premium Industrial Valve" 
                className="w-full h-full object-cover p-8"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
