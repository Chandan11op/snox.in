import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import SearchComponent from "./Search/Search";
import Logo from "../../assets/logo/snoxlogo.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setShowSearch(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-gray-200" : "bg-white py-6 border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center" 
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="SNOX Logo" className="h-10 md:h-12 object-contain brightness-0 hover:opacity-70 transition-opacity" />
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
            <button 
              onClick={() => navigate("/")} 
              className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => navigate("/")} 
              className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Categories
            </button>
            <button 
              onClick={() => navigate("/about")} 
              className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => navigate("/contact")} 
              className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => setShowSearch(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-sm font-bold text-white shadow-md hover:shadow-lg"
            >
              <span className="hidden md:inline">Search Catalog</span>
              <Search size={18} />
            </button>
          </div>
          
        </div>
      </motion.header>

      <AnimatePresence>
        {showSearch && <SearchComponent setShowSearch={setShowSearch} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
