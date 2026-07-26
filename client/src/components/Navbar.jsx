import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-text">SNOX</span>
        </Link>
        
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.title}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary ml-4">Get Quote</Link>
        </nav>

        <button 
          className="nav-mobile-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                to={link.path} 
                className={`nav-mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary mt-4" onClick={() => setMobileOpen(false)}>Get Quote</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
