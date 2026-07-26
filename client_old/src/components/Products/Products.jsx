import React from "react";
import Product from "./Product/Product";
import { motion } from "framer-motion";

const Products = ({ products, innerPage, headingText }) => {
  return (
    <div className={`w-full ${innerPage ? 'py-16 md:py-24' : ''}`}>
      {headingText && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-industrial-950 border-b border-industrial-100 pb-6">
            {headingText}
          </h2>
        </div>
      )}
      
      <div className={`${innerPage ? 'max-w-7xl mx-auto px-6 md:px-12' : ''}`}>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {products?.map((item) => (
            <Product 
              key={item.id} 
              id={item.id} 
              product={item.attributes} 
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
