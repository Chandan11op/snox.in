import React, { useState, useEffect } from "react";
import { productsData } from "../../data/products";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Factory, ShieldCheck, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Derive categories dynamically from productsData
const products = productsData;
const categories = Array.from(new Set(products.map(p => p.category))).map(cat => ({
  id: cat,
  name: cat
}));

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use the first 3 product images for the slider
  const sliderImages = products.slice(0, 3).map(p => p.images?.[0] || "");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SLIDER SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={sliderImages[currentSlide]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-20"
          />
        </AnimatePresence>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Precision. <br /> Engineered.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 font-medium">
              India’s premier manufacturer of high-purity stainless steel sanitary valves, fittings, and tubing for critical industries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => navigate("/contact")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg">
                Request a Quote
              </button>
              <button onClick={() => document.querySelector("#category").scrollIntoView({ behavior: 'smooth' })} className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-colors">
                Explore Catalog
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center gap-3 z-10">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === idx ? 'bg-blue-600' : 'bg-slate-300'}`}
            />
          ))}
        </div>
      </section>

      {/* 2. SUMMARY / ABOUT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">About SNOX</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
            Setting the global standard for sanitary flow control.
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            SNOX® is a globally recognized manufacturer of stainless steel sanitary valves, fittings, and flow-control solutions. We serve the dairy, food processing, beverage, pharmaceutical, and chemical industries with precision-engineered products that guarantee hygiene and reliability.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: "State-of-the-art Facilities", desc: "Advanced CNC machining and automated polishing." },
              { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous spectrometer analysis for material grade validation." },
              { icon: Globe2, title: "Global Reach", desc: "Supplying precision components to processing plants worldwide." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <item.icon size={28} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES */}
      <section id="category" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Our Products</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Industrial Components.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => {
              const categoryProduct = products.find(p => p.category === cat.id);
              const imgsrc = categoryProduct?.images?.[0] || null;
              
              return (
                <motion.div 
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 bg-white"
                  onClick={() => navigate(`/product/${categoryProduct?.id}`)}
                >
                  {imgsrc ? (
                    <img src={imgsrc} alt={cat.name} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">No Image</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                    <p className="text-blue-300 font-medium flex items-center gap-2 text-sm">
                      View Details <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CONTACT CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Ready to upgrade your fluid handling?</h2>
          <p className="text-xl text-slate-600 mb-10">Get in touch with our engineering team for technical datasheets, CAD models, and volume pricing.</p>
          <button onClick={() => navigate("/contact")} className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-colors">
            Contact Engineering Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
