import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductById, categories } from '../data/productData';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="container section text-center" style={{ paddingTop: '150px' }}>
        <h2 className="h2 mb-4">Product Not Found</h2>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  const categoryName = categories.find(c => c.id === product.category)?.name;

  return (
    <main className="product-detail-page" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <Link to="/products" className="back-link flex items-center gap-2 mb-8" style={{ color: 'var(--text-muted)' }}>
          <ArrowLeft size={16} /> Back to Catalog
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            className="product-gallery glass"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img 
              src={`/src/assets/products/${product.category}/${product.id}.png`} 
              alt={product.name} 
              onError={(e) => { e.target.onerror = null; e.target.src = '/src/assets/products/butterfly-valve/hero.png'; }}
              style={{ width: '100%', maxWidth: '500px', height: 'auto', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }}
            />
          </motion.div>
          
          <motion.div 
            className="product-info"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="badge" style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'var(--bg-secondary)', color: 'var(--primary)', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
              {categoryName}
            </span>
            <h1 className="h2 mb-4">{product.name}</h1>
            <p className="text-lg text-muted mb-8">{product.detailedDescription}</p>
            
            <div className="specs-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="spec-item">
                <span className="text-xs text-muted uppercase tracking-wider" style={{ display: 'block', marginBottom: '0.25rem' }}>Material</span>
                <span className="font-semibold">{product.material}</span>
              </div>
              <div className="spec-item">
                <span className="text-xs text-muted uppercase tracking-wider" style={{ display: 'block', marginBottom: '0.25rem' }}>Connection</span>
                <span className="font-semibold">{product.connectionType}</span>
              </div>
            </div>

            <div className="features-list mb-8">
              <h3 className="text-md font-semibold mb-4">Key Features</h3>
              <ul className="flex flex-col gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="action-buttons flex gap-4">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>Request Quote</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
