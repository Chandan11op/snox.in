import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Factory, ChevronRight } from 'lucide-react';
import { productsData as products } from '../data/products';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (product) {
      document.title = product.seoTitle || `${product.name} | SNOX`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', product.seoDescription || product.description);
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-industrial-chrome pt-20">
        <h2 className="text-3xl font-display font-bold text-primary mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/products')} className="btn bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-light">
          Back to Catalogue
        </button>
      </div>
    );
  }

  return (
    <div className="bg-industrial-chrome min-h-screen pb-24 pt-24">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={16} className="mx-2 mt-0.5" />
          <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
          <ChevronRight size={16} className="mx-2 mt-0.5" />
          <span className="text-primary">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-500 hover:text-primary transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Gallery */}
            <div className="p-8 lg:p-12 bg-gray-50 flex flex-col">
              <motion.div 
                className="flex-1 relative aspect-square bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center p-8 mb-6 group cursor-zoom-in"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 rounded-full blur-3xl"></div>
                <motion.img 
                  key={activeImage}
                  src={product.images[activeImage]} 
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              
              {product.images.length > 1 && (
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative w-24 h-24 flex-shrink-0 bg-white rounded-xl border-2 overflow-hidden ${
                        activeImage === idx ? 'border-accent shadow-md' : 'border-transparent hover:border-gray-200'
                      } transition-all`}
                    >
                      <img src={img} alt={`Thumbnail ${idx+1}`} className="w-full h-full object-contain p-2" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4 w-fit">
                {product.category}
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 leading-tight">
                {product.name}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-display font-bold text-primary mb-4 flex items-center">
                    <CheckCircle2 className="text-accent mr-2" size={20} />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-4 flex items-center">
                    <Factory className="text-accent mr-2" size={20} />
                    Industries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications && product.applications.map((app, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-md">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#specifications" className="w-full sm:w-auto text-center bg-white text-primary border border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  View Specifications
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Section */}
        <div id="specifications" className="mt-16 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12 scroll-mt-32">
          <h2 className="text-3xl font-display font-bold text-primary mb-10 text-center">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-display font-bold text-primary mb-6 border-b border-gray-100 pb-2">Technical Details</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100 hover:bg-gray-100 transition-colors`}>
                        <th className="py-4 px-6 text-gray-700 font-semibold w-1/3 border-r border-gray-100">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </th>
                        <td className="py-4 px-6 text-primary font-bold">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-primary mb-6 border-b border-gray-100 pb-2">Industrial Applications</h3>
              <p className="text-gray-600 text-sm mb-4">
                <strong className="text-primary block mb-1">Applications:</strong> 
                {product.applications ? product.applications.join(', ') : 'Industrial use.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
