import React from "react";
import { useNavigate } from "react-router-dom";
import IndustrialPlaceholder from "../../ui/IndustrialPlaceholder";
import { motion } from "framer-motion";

const Product = ({ product, id }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group flex flex-col bg-white rounded-3xl border border-industrial-100 overflow-hidden hover:shadow-xl hover:border-industrial-200 transition-all duration-500 cursor-pointer"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="relative h-64 overflow-hidden bg-industrial-50">
        <IndustrialPlaceholder 
          text="Product Image" 
          className="transition-transform duration-700 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-industrial-900 text-xs font-bold tracking-widest uppercase rounded-full shadow-sm">
            {product?.category?.title || "Component"}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-industrial-950 mb-2 group-hover:text-black transition-colors line-clamp-2">
          {product?.title}
        </h3>
        
        {/* Mock Application Badge - this elevates the industrial feel */}
        <div className="flex gap-2 mb-6">
          <span className="text-[10px] font-semibold text-industrial-500 bg-industrial-100 px-2 py-0.5 rounded uppercase tracking-wider">
            SS 316L
          </span>
          <span className="text-[10px] font-semibold text-industrial-500 bg-industrial-100 px-2 py-0.5 rounded uppercase tracking-wider">
            Sanitary
          </span>
        </div>

        <p className="text-industrial-500 text-sm mb-8 line-clamp-3 leading-relaxed flex-grow">
          {product?.desc}
        </p>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-industrial-100">
          <div className="flex flex-col">
            <span className="text-xs text-industrial-400 font-medium uppercase tracking-widest">Pricing</span>
            <span className="text-lg font-bold text-industrial-900">
              &#8377;{product?.price}
            </span>
          </div>
          <span className="text-sm font-semibold text-industrial-900 hover:text-industrial-500 transition-colors">
            View Specs &rarr;
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
