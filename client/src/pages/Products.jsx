import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { productsData } from '../data/products';

const products = productsData;
const categories = Array.from(new Set(products.map(p => p.category)));

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-industrial-chrome min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-white pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/images/hero-bg.png" alt="Industrial Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent opacity-30 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Product Catalogue
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Explore our comprehensive range of industrial valves, sanitary fittings, and flow control solutions engineered for excellence.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <div className="flex items-center space-x-2 mb-6 text-primary font-display font-bold text-lg">
              <Filter size={20} />
              <span>Categories</span>
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveCategory('All')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors font-medium ${
                    activeCategory === 'All' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  All Products
                </button>
              </li>
              {categories.map(category => (
                <li key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors font-medium ${
                      activeCategory === category ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -15, scale: 1.02, rotateX: 1, rotateY: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 group border border-gray-100 hover:border-accent/30 flex flex-col"
              >
                <div className="relative h-56 bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 rounded-full blur-2xl"></div>
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply relative z-10 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-primary/90 text-white backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-2">
                    {product.description}
                  </p>
                  <Link 
                    to={`/products/${product.id}`}
                    className="flex items-center justify-between w-full py-2 border-t border-gray-100 font-semibold text-primary group-hover:text-accent transition-colors mt-auto"
                  >
                    <span>View Specifications</span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-display font-bold text-gray-400 mb-2">No products found</h3>
              <p className="text-gray-500">Try selecting a different category.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-6 text-accent font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
