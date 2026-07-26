import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="hero-badge text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Engineering Excellence Since 2005
          </motion.span>
          <h1 className="h1 hero-title">
            Precision Industrial <br />
            <span className="text-gradient">Fluid Control Solutions</span>
          </h1>
          <p className="text-lg text-muted hero-subtitle">
            Premium valves, fittings, and accessories engineered for the most demanding sanitary and industrial applications worldwide.
          </p>
          <div className="hero-actions flex gap-4">
            <Link to="/products" className="btn btn-primary">Explore Products</Link>
            <Link to="/contact" className="btn btn-outline">Contact Sales</Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          <div className="hero-image-wrapper glass">
            {/* We'll use the generated butterfly valve image here */}
            <img src="/src/assets/products/butterfly-valve/hero.png" alt="Premium Butterfly Valve" className="hero-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
