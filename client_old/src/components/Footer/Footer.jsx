import React from "react";
import sj from "../../assets/logo/sj.png";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm font-medium text-gray-500">
            SNOX &#169; {new Date().getFullYear()}. All Rights Reserved.
          </span>
          
          <div className="flex flex-col items-end gap-1">
            <span className="text-sm font-medium text-gray-500">Designed and Developed by</span>
            <span className="text-sm font-bold text-gray-800">Chandan Tiwad & Aman Chaurasiya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
