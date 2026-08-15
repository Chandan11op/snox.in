import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { productsData as products } from '../data/products';
import { useEffect } from 'react';

import fdaLogo from '../assets/iso-images/iso_9001.png'; // Mocking FDA/Certification with ISO for now since we don't have an FDA logo in assets.
import snoxLogo from '../assets/logo/snoxlogo.png';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

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
      <div className="min-h-screen flex flex-col items-center justify-center bg-industrial-chrome py-12">
        <h2 className="text-3xl font-display font-bold text-primary mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/products')} className="btn bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-light">
          Back to Catalogue
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24 pt-8">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-500 hover:text-primary transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>

        {/* Top Section - Gamu.in Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="lg:w-2/3 pr-0 lg:pr-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-accent mb-8 uppercase tracking-wide">
              {product.name}
            </h1>
            
            <ul className="space-y-3">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-black mt-2.5 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-800 text-lg font-semibold uppercase">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-600 text-lg">
              {product.description}
            </p>
          </div>
          
          {/* Certification Logos - Right Side */}
          <div className="hidden lg:flex flex-col items-end w-1/3">
            <img src={fdaLogo} alt="Certification" className="h-24 w-auto opacity-80" />
            <p className="text-sm font-semibold text-gray-500 mt-4 text-right">CERTIFIED HYGIENIC COMPONENTS</p>
          </div>
        </div>

        {/* 3-Column Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {product.images.map((img, idx) => (
            <motion.div 
              key={idx}
              className="relative bg-gray-50 rounded-lg overflow-hidden border border-gray-200 aspect-square flex items-center justify-center p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-contain mix-blend-multiply relative z-10" />
              {/* Watermark */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-20">
                <img src={snoxLogo} alt="Watermark" className="w-2/3 object-contain grayscale" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dimensional Specifications Table */}
        {product.tableSpecifications && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-6 uppercase border-b-2 border-accent pb-2 inline-block">
              Dimensional Specifications
            </h2>
            <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200">
              <table className="w-full text-center border-collapse bg-white">
                <thead className="bg-primary text-white">
                  <tr>
                    {product.tableSpecifications.headers.map((header, idx) => (
                      <th key={idx} className="py-4 px-6 font-bold uppercase tracking-wider text-sm border-r border-primary-light last:border-0">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  {product.tableSpecifications.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50">
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="py-3 px-6 border-r border-gray-200 last:border-0 font-medium">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mt-12">
          <p className="text-red-700 font-bold uppercase text-sm tracking-wide">
            DISCLAIMER: ALL DIMENSIONS ARE IN MM. SPECIFICATIONS ARE SUBJECT TO CHANGE WITHOUT PRIOR NOTICE DUE TO CONTINUOUS PRODUCT DEVELOPMENT. FOR EXACT DIMENSIONS AND CRITICAL APPLICATIONS, PLEASE CONSULT OUR TECHNICAL TEAM.
          </p>
        </div>

      </div>
    </div>
  );
}
