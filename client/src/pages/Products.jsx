import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowRight, Filter, SearchX } from 'lucide-react';
import { productsData } from '../data/products';

const products = productsData;
const categories = Array.from(new Set(products.map(p => p.category)));

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const gridRef = useRef(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (gridRef.current) {
      const yOffset = -100; // Account for sticky navbar
      const y = gridRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const filteredProducts = products.filter(p => {
    const matchesCategory =
      activeCategory === 'All' || p.category === activeCategory;

    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-industrial-chrome min-h-screen pb-10 sm:pb-16 lg:pb-24">

      {/* Header */}
      <div className="bg-primary text-white pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 relative overflow-hidden">

        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-bg.png"
            alt="Industrial Background"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>

          <div className="absolute -top-12 sm:-top-20 lg:-top-24 -right-12 sm:-right-20 lg:-right-24 w-48 h-48 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-accent opacity-30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 sm:mb-5 lg:mb-6 text-white drop-shadow-lg"
          >
            Product Catalogue
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Explore our comprehensive range of industrial valves, sanitary fittings, and flow control solutions engineered for excellence.
          </motion.p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-8 lg:mt-12 flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8">

        {/* Sidebar Filters */}
        <aside className="w-full md:w-56 lg:w-64 flex-shrink-0">

          <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 md:sticky md:top-24">

            <div className="flex items-center space-x-2 mb-3 sm:mb-5 lg:mb-6 text-primary font-display font-bold text-sm sm:text-lg">
              <Filter size={16} className="sm:w-5 sm:h-5" />
              <span>Categories</span>
            </div>

            <ul className="flex flex-row flex-wrap gap-1.5 md:flex-col md:space-y-1.5 lg:space-y-2 md:gap-0">

              <li>
                <button
                  onClick={() => handleCategoryChange('All')}
                  className={`w-auto md:w-full text-left px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-lg transition-colors font-medium text-xs sm:text-base ${
                    activeCategory === 'All'
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  All Products
                </button>
              </li>

              {categories.map(category => (
                <li key={category}>
                  <button
                    onClick={() => handleCategoryChange(category)}
                    className={`w-auto md:w-full text-left px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-lg transition-colors font-medium text-xs sm:text-base ${
                      activeCategory === category
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
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
        <main ref={gridRef} className="flex-1 min-w-0">

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >

            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                key={product.id}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 group border border-gray-100 hover:border-accent/30 flex flex-col"
              >

                {/* Product Image */}
                <div className="relative h-32 sm:h-40 md:h-48 flex items-center justify-center overflow-hidden">

                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 rounded-full blur-2xl"></div>

                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply relative z-10 transition-transform duration-500"
                  />

                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
                    <span className="bg-primary/90 text-white backdrop-blur-sm text-[9px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wide shadow-sm">
                      {product.category}
                    </span>
                  </div>

                </div>

                {/* Product Content */}
                <div className="p-3.5 sm:p-5 lg:p-6 flex flex-col flex-1">

                  <h3 className="text-base sm:text-xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 flex-1 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <Link
                    to={`/products/${product.id}`}
                    className="flex items-center justify-between w-full py-2 border-t border-gray-100 font-semibold text-primary group-hover:text-accent transition-colors mt-auto text-xs sm:text-base"
                  >
                    <span>View Specifications</span>

                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </motion.div>
                  </Link>

                </div>
              </motion.div>
            ))}

          </motion.div>

          {/* No Products */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-10 sm:py-16 lg:py-20 px-4 bg-white rounded-xl sm:rounded-2xl border border-gray-100 flex flex-col items-center">

              <SearchX
                size={36}
                className="sm:w-12 sm:h-12 text-gray-300 mb-3 sm:mb-4"
              />

              <h3 className="text-lg sm:text-2xl font-display font-bold text-gray-400 mb-2">
                No products found
              </h3>

              <p className="text-xs sm:text-base text-gray-500 mb-4 sm:mb-6 max-w-md">
                {searchQuery
                  ? `No results for "${searchQuery}" in this category.`
                  : 'Try selecting a different category.'}
              </p>

              <button
                onClick={() => {
                  handleCategoryChange('All');
                  setSearchParams({});
                }}
                className="btn bg-primary text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-primary-light text-xs sm:text-base"
              >
                Clear Filters & Search
              </button>

            </div>
          )}

        </main>
      </div>
    </div>
  );
}