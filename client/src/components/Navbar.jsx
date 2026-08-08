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
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={snoxLogo} alt="SNOX Logo" className="h-10 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              to={link.path} 
              className={`relative font-medium transition-colors hover:text-accent ${
                location.pathname === link.path ? 'text-accent' : 'text-primary'
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
          <Link 
            to="/contact" 
            className="bg-primary text-white px-6 py-2 rounded-full font-medium shadow-premium hover:bg-primary-light transition-colors transform hover:-translate-y-0.5 duration-200"
          >
            Get Quote
          </Link>
        </nav>

        <button 
          className="md:hidden text-primary focus:outline-none" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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
            <Link 
              to="/contact" 
              className="bg-primary text-white text-center py-3 rounded-xl font-medium mt-4 shadow-md"
              onClick={() => setMobileOpen(false)}
            >
              Get Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
