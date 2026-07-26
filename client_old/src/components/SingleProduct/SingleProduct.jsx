import React, { useEffect, useState } from "react";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/products";
import { motion } from "framer-motion";
import IndustrialPlaceholder from "../ui/IndustrialPlaceholder";
import MagneticButton from "../ui/MagneticButton";
import { Download, FileText, Check, Settings2, PackageCheck } from "lucide-react";

const SingleProduct = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);
  const isLoading = false;
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 px-6 flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-industrial-200 border-t-industrial-900 rounded-full animate-spin"></div>
      </div>
    );
  }


  if (!product) return <div className="min-h-screen pt-32 px-6 text-center">Product not found.</div>;

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      
      {/* Product Hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Product Media */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32 rounded-3xl overflow-hidden bg-white border border-slate-100 aspect-square flex flex-col items-center justify-center p-8 gap-4 shadow-sm"
          >
            {product.images && product.images.length > 0 ? (
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            ) : (
              <IndustrialPlaceholder text="Product Render" className="w-full h-full rounded-2xl bg-white shadow-sm" />
            )}
          </motion.div>

          {/* Right: Product Meta */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col pt-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">
                {product.category || "Component"}
              </span>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                <Check size={14} /> Available
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mb-6 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 py-8 border-y border-slate-100 mb-10">
              <div className="flex flex-col">
                <span className="text-sm text-slate-400 font-medium uppercase tracking-widest mb-1">Material</span>
                <span className="text-lg font-bold text-slate-700">{product.material}</span>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-sm text-slate-400 font-medium uppercase tracking-widest mb-1">Brand</span>
                <span className="text-lg font-bold text-slate-700">{product.brand}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <MagneticButton className="flex-1">Request Quote</MagneticButton>
              <MagneticButton variant="secondary" className="flex-1 flex gap-2">
                <Download size={18} /> Download CAD
              </MagneticButton>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-6 mt-auto">
              <span className="text-sm font-semibold text-industrial-400 uppercase tracking-widest">Share Specs</span>
              <div className="flex items-center gap-4 text-industrial-300">
                <button className="hover:text-industrial-900 transition-colors"><FaFacebookF size={18} /></button>
                <button className="hover:text-industrial-900 transition-colors"><FaTwitter size={18} /></button>
                <button className="hover:text-industrial-900 transition-colors"><FaLinkedinIn size={18} /></button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="flex gap-8 border-b border-industrial-200 mb-12 overflow-x-auto">
          {['overview', 'specifications', 'applications', 'documents'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${
                activeTab === tab ? 'text-industrial-950 border-b-2 border-industrial-950' : 'text-industrial-400 hover:text-industrial-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[300px]"
        >
          {activeTab === 'overview' && (
             <div className="prose prose-lg max-w-4xl text-slate-600">
               <p className="text-xl leading-relaxed mb-6">{product.description}</p>
               
               {/* Gallery Section */}
               <div className="my-12">
                 <h3 className="text-2xl font-bold text-slate-900 mb-6">Product Gallery & Details</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 p-4">
                      {product.images && product.images.length > 0 ? (
                        <img src={product.images[0]} alt={product.name} className="w-full h-48 object-contain rounded-xl mix-blend-multiply" />
                      ) : (
                        <div className="w-full h-48 bg-slate-200 rounded-xl"></div>
                      )}
                      <p className="mt-4 text-sm font-medium text-slate-500">Primary Product View. Designed for robust flow control.</p>
                   </div>
                   <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 p-4">
                      {product.images && product.images.length > 1 ? (
                        <img src={product.images[1]} alt={`${product.name} Alternate`} className="w-full h-48 object-contain rounded-xl mix-blend-multiply" />
                      ) : product.images && product.images.length > 0 ? (
                        <img src={product.images[0]} alt={`${product.name} Alternate`} className="w-full h-48 object-contain rounded-xl scale-x-[-1] mix-blend-multiply" />
                      ) : (
                        <div className="w-full h-48 bg-slate-200 rounded-xl"></div>
                      )}
                      <p className="mt-4 text-sm font-medium text-slate-500">Alternate angle showcasing the premium finish.</p>
                   </div>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                 <div className="flex gap-4">
                   <Settings2 className="text-slate-900 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-slate-900">Precision Machined</h4>
                     <p className="text-sm">CNC crafted for maximum structural integrity and leak-proof sealing.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <PackageCheck className="text-slate-900 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-slate-900">Surface Finish</h4>
                     <p className="text-sm">Standard internal surface finish perfectly suited for hygienic applications.</p>
                   </div>
                 </div>
               </div>
             </div>
          )}

          {activeTab === 'specifications' && (
            <div className="max-w-4xl">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    ['Material (Wetted)', 'SS 316L (1.4404)'],
                    ['Material (Non-wetted)', 'SS 304 (1.4301)'],
                    ['Available Sizes', '1/2" to 4" (DN15 - DN100)'],
                    ['End Connections', 'Tri-Clamp, Butt-Weld, Flanged'],
                    ['Max Working Pressure', '10 bar (145 psi)'],
                    ['Operating Temperature', '-10°C to +140°C'],
                    ['Surface Finish', 'Internal Ra ≤ 0.4 µm, External Ra ≤ 0.8 µm']
                  ].map(([label, val], i) => (
                    <tr key={i} className="border-b border-industrial-100 last:border-0">
                      <th className="py-4 font-bold text-industrial-900 w-1/3">{label}</th>
                      <td className="py-4 text-industrial-600">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
              {['Dairy & Milk Processing', 'Brewery Fermentation', 'WFI (Water For Injection)', 'Cosmetic Blending', 'Bioreactor Systems', 'CIP Skids'].map(app => (
                <div key={app} className="bg-industrial-50 border border-industrial-100 rounded-2xl p-6">
                  <Check className="text-industrial-900 mb-4" />
                  <span className="font-bold text-industrial-900">{app}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="flex flex-col gap-4 max-w-2xl">
              {['Technical Datasheet (PDF)', 'Installation Manual (PDF)', 'Material Certificates (3.1 EN 10204)', 'STEP CAD Model'].map(doc => (
                <div key={doc} className="flex items-center justify-between p-6 bg-white border border-industrial-200 rounded-2xl hover:border-industrial-400 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <FileText className="text-industrial-400 group-hover:text-industrial-900 transition-colors" />
                    <span className="font-medium text-industrial-900">{doc}</span>
                  </div>
                  <Download className="text-industrial-300 group-hover:text-industrial-900 transition-colors" size={20} />
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* <RelatedProducts 
        productId={id}
        categoryId={product.category}
      /> */}
    </div>
  );
};

export default SingleProduct;
