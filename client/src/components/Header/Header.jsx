import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import SearchComponent from "./Search/Search";
import Logo from '../../assets/snoxlogo.png';
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

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(id);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(id);
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => navigate("/")} 
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick("#category")} 
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Categories
            </button>
            <button 
              onClick={() => handleNavClick("#aboutus")} 
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              About Us
            </button>
          </nav>

          {/* Center Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center justify-center" 
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="SNOX Logo" className="h-8 md:h-10 object-contain" />
          </div>

          {/* Right Actions */}
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => setShowSearch(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-700"
            >
              <span className="hidden md:inline">Search</span>
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
