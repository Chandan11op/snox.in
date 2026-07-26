import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ 
  children, 
  className = "", 
  variant = "primary", 
  onClick, 
  type = "button" 
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300";
  const variants = {
    primary: "bg-industrial-950 text-white hover:bg-black shadow-xl shadow-industrial-950/20",
    secondary: "bg-white text-industrial-950 border border-industrial-200 hover:bg-industrial-50 shadow-sm",
    outline: "bg-transparent border border-industrial-950 text-industrial-950 hover:bg-industrial-50",
    ghost: "bg-transparent text-industrial-600 hover:text-industrial-950 hover:bg-industrial-100",
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

export default MagneticButton;
