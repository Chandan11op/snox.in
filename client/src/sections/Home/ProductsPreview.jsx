import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { productsData as products } from '../../data/products';

export default function ProductsPreview() {
  // Take first 3 products for preview
  const previewProducts = products.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-industrial-chrome relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 md:mb-12 lg:mb-16">

          <div className="max-w-2xl">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-3 sm:mb-4 leading-tight">
              Premium Product Range
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Discover our comprehensive catalog of high-performance valves, fittings, and accessories engineered for the most demanding industrial environments.
            </p>

          </div>

          <Link
            to="/products"
            className="group hidden md:flex items-center text-primary font-semibold hover:text-accent transition-colors mt-5 md:mt-0"
          >
            View All Products

            <ArrowRight
              className="ml-2 group-hover:translate-x-2 transition-transform"
              size={20}
            />
          </Link>

        </div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          {previewProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-premium transition-shadow duration-300 group border border-gray-100 hover:border-accent/30"
            >

              {/* Product Image */}
              <div className="relative h-44 sm:h-48 md:h-52 lg:h-56 overflow-hidden flex items-center justify-center">

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >

                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 rounded-full blur-2xl"></div>

                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply relative z-10"
                  />

                </motion.div>

                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-primary text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>

              </div>

              {/* Product Content */}
              <div className="p-5 sm:p-6 md:p-7 lg:p-8">

                <h3 className="text-xl sm:text-2xl font-display font-bold text-primary mb-2 sm:mb-3 group-hover:text-accent transition-colors leading-snug">
                  {product.name}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                <Link
                  to={`/products/${product.id}`}
                  className="inline-flex items-center font-semibold text-primary group-hover:text-accent transition-colors text-sm sm:text-base"
                >
                  View Details

                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight
                      size={17}
                      className="sm:w-[18px] sm:h-[18px]"
                    />
                  </motion.span>

                </Link>

              </div>
            </motion.div>
          ))}

        </motion.div>

        {/* Mobile View All Button */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center md:hidden">

          <Link
            to="/products"
            className="inline-flex items-center justify-center bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold w-full sm:w-auto hover:bg-primary-light transition-colors text-sm sm:text-base"
          >
            View All Products
          </Link>

        </div>

      </div>
    </section>
  );
}