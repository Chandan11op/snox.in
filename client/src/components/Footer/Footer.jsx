import React from "react";
import sj from "../../assets/sj.png";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm font-medium text-gray-500">
            SNOX &#169; {new Date().getFullYear()}. All Rights Reserved.
          </span>
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-400">Made By Subrat Jena</span>
            <img src={sj} alt="SJ Logo" className="h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
