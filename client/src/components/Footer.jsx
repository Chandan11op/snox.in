import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-primary text-inverse">
      <div className="container">
        <div className="footer-top grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-col md-col-span-2">
            <Link to="/" className="brand mb-4 inline-block">
              <span className="brand-text text-inverse">SNOX</span>
            </Link>
            <p className="text-sm text-muted max-w-md">
              Leading manufacturer of premium industrial and sanitary fluid control solutions. Precision engineering for the most demanding applications.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="h4 text-md mb-4">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="h4 text-md mb-4">Contact</h4>
            <ul className="footer-links">
              <li>Email: info@snox.in</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: Industrial Area, Mumbai, India</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Snox Industrial. All rights reserved.
          </div>
          <div className="developer-credits text-sm">
            Designed & Developed by{' '}
            <a href="https://web-s-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="credit-link">Aman Chaurasiya</a>
            {' '}and{' '}
            <a href="https://chandan-tiwadi.pages.dev/" target="_blank" rel="noopener noreferrer" className="credit-link">Chandan Tiwadi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
