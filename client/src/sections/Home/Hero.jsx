import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { productsData } from '../../data/products';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselProducts = productsData.slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselProducts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselProducts.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselProducts.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);
  };

  return (
    <section 
      className="relative min-h-[calc(100vh-112px)] flex items-center justify-center overflow-hidden bg-primary py-12"
      style={{ backgroundImage: 'url(/assets/images/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}
    >
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center min-h-[60vh] w-full">
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-all hidden sm:block"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-all hidden sm:block"
        >
          <ChevronRight size={32} />
        </button>

        <div className="w-full max-w-6xl relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSlide}
              className="w-full flex flex-col lg:flex-row items-center px-4 sm:px-12 lg:px-16"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2 text-white pr-0 lg:pr-12 text-center lg:text-left mt-12 lg:mt-0 order-2 lg:order-1">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent font-medium text-sm mb-6 uppercase tracking-wider backdrop-blur-sm">
                  Featured Product
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-white line-clamp-2">
                  {carouselProducts[activeSlide].name}
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 min-h-[80px] line-clamp-3">
                  {carouselProducts[activeSlide].description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link to={`/products/${carouselProducts[activeSlide].id}`} className="group flex items-center justify-center bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-glow w-full sm:w-auto">
                    View Specifications
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </div>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mt-4 lg:mt-0">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-4 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  
                  <motion.div 
                    className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-white flex items-center justify-center p-8"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img 
                      src={carouselProducts[activeSlide].images[0]} 
                      alt={carouselProducts[activeSlide].name} 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {carouselProducts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white w-3'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 z-20">
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}
