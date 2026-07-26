import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, categories } from '../data/productData';
import { useState } from 'react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProducts = activeCategory === 'ALL' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="page-products" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <section className="section container">
        <div className="text-center mb-16">
          <h1 className="h1 mb-4">Our Premium Catalogue</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Explore our comprehensive range of high-performance industrial and sanitary fluid control solutions.
          </p>
        </div>

        <div className="category-filter flex justify-center gap-4 mb-12 flex-wrap">
          <button 
            className={`btn ${activeCategory === 'ALL' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveCategory('ALL')}
          >
            All Products
          </button>
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`btn ${activeCategory === cat.id ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              className="product-card glass"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="product-image-container" style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
                {/* Fallback image logic if require fails in Vite */}
                <img 
                  src={`/src/assets/products/${product.category}/${product.id}.png`} 
                  alt={product.name} 
                  onError={(e) => { e.target.onerror = null; e.target.src = '/src/assets/products/butterfly-valve/hero.png'; }}
                  style={{ width: '100%', height: '200px', objectFit: 'contain' }}
                />
              </div>
              <div className="product-info" style={{ padding: '1.5rem 0' }}>
                <span className="text-xs text-muted" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{categories.find(c => c.id === product.category)?.name}</span>
                <h3 className="h3 text-md mb-3">{product.name}</h3>
                <p className="text-sm text-muted mb-6" style={{ minHeight: '3rem' }}>
                  {product.shortDescription}
                </p>
                <Link to={`/products/${product.id}`} className="btn btn-outline" style={{ width: '100%' }}>View Details</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
