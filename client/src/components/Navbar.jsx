import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import snoxLogo from '../assets/logo/snoxlogo.png';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchQuery(params.get('search') || '');
  }, [location.search]);

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      if (searchQuery.trim()) {
        navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      } else {
        navigate('/products');
      }
    }
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Products', path: '/products' },
  ];

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 bg-white shadow-premium py-1.5 sm:py-2 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8 flex justify-between items-center min-h-[60px] sm:min-h-[68px] md:min-h-[72px] lg:min-h-[80px]">

        {/* Left: Logo */}
        <div className="flex-1 flex justify-start min-w-0">
          <Link to="/" className="flex items-center">
            <img
              src={snoxLogo}
              alt="SNOX Logo"
              className="h-12 w-auto sm:h-14 md:h-16 lg:h-18 xl:h-20 object-contain"
            />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-5 lg:space-x-7 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className={`relative font-medium tracking-wide transition-colors text-sm lg:text-base ${
                location.pathname === link.path
                  ? 'text-accent'
                  : 'text-primary hover:text-accent'
              }`}
            >
              {link.title}

              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Search Bar and Mobile Button */}
        <div className="flex-1 flex justify-end items-center space-x-2 sm:space-x-3 lg:space-x-4 min-w-0">

          {/* Desktop / Tablet Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchSubmit}
              className="border rounded-full px-3 lg:px-4 py-1.5 focus:outline-none focus:border-accent text-sm w-32 sm:w-40 lg:w-52 xl:w-64 transition-all bg-gray-100 border-gray-200 text-primary placeholder-gray-500"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 focus:outline-none text-primary flex-shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/20 px-4 sm:px-6 py-4 sm:py-6 flex flex-col space-y-3 sm:space-y-4 shadow-premium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >

            {/* Mobile Search */}
            <div className="w-full pb-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchSubmit}
                className="w-full border rounded-full px-4 py-2.5 focus:outline-none focus:border-accent text-sm bg-gray-100 border-gray-200 text-primary placeholder-gray-500"
              />
            </div>

            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`text-base sm:text-lg font-medium py-2 sm:py-3 border-b border-gray-100 ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-primary'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}