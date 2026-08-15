import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import snoxLogo from '../assets/logo/snoxlogo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Products', path: '/products' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-primary-light/90 backdrop-blur-md shadow-premium py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center space-x-2">
            <img src={snoxLogo} alt="SNOX Logo" className="h-24 w-auto" />
          </Link>
        </div>
        
        {/* Center: Nav Links */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              to={link.path} 
              className={`relative font-medium tracking-wide transition-colors hover:text-accent ${
                location.pathname === link.path ? 'text-accent' : 'text-white'
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
        <div className="flex-1 flex justify-end items-center space-x-4">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-white/20 border border-white/30 text-white rounded-full px-4 py-1.5 focus:outline-none focus:border-accent text-sm w-48 lg:w-64 placeholder-white/60 transition-all"
            />
          </div>
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/20 px-4 py-6 flex flex-col space-y-4 shadow-premium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                to={link.path} 
                className={`text-lg font-medium py-2 border-b border-gray-100 ${
                  location.pathname === link.path ? 'text-accent' : 'text-primary'
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
