import React from 'react';
import { Camera } from 'lucide-react';

const IndustrialPlaceholder = ({ className = "", text = "Product Image" }) => {
  return (
    <div className={`placeholder-img relative w-full h-full min-h-[200px] flex flex-col items-center justify-center bg-industrial-100 ${className}`}>
      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#a3b2c2 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <Camera size={32} className="text-industrial-300 mb-3 relative z-10" strokeWidth={1.5} />
      <span className="text-sm font-medium text-industrial-400 relative z-10">{text}</span>
    </div>
  );
};

export default IndustrialPlaceholder;
