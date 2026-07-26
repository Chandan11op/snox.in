import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <main className="page-contact" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="h1 mb-4">Get in Touch</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Discuss your industrial fluid control requirements with our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="h3 mb-8">Contact Information</h2>
            
            <div className="info-list flex flex-col gap-6 mb-12">
              <div className="info-item flex gap-4">
                <div className="icon-wrapper" style={{ color: 'var(--primary)', background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Headquarters & Manufacturing</h4>
                  <p className="text-muted">Phase 1, Industrial Area<br/>Mumbai, Maharashtra 400001<br/>India</p>
                </div>
              </div>
              
              <div className="info-item flex gap-4">
                <div className="icon-wrapper" style={{ color: 'var(--primary)', background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted">+91 123 456 7890<br/>+91 098 765 4321</p>
                </div>
              </div>
              
              <div className="info-item flex gap-4">
                <div className="icon-wrapper" style={{ color: 'var(--primary)', background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted">sales@snox.in<br/>support@snox.in</p>
                </div>
              </div>

              <div className="info-item flex gap-4">
                <div className="icon-wrapper" style={{ color: 'var(--primary)', background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Working Hours</h4>
                  <p className="text-muted">Monday - Saturday: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-wrapper glass"
            style={{ padding: '3rem', borderRadius: 'var(--radius-xl)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="h3 mb-6">Send an Inquiry</h2>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" style={inputStyle} />
                <input type="text" placeholder="Last Name" style={inputStyle} />
              </div>
              <input type="email" placeholder="Email Address" style={inputStyle} />
              <input type="text" placeholder="Company / Organization" style={inputStyle} />
              <input type="text" placeholder="Product of Interest (Optional)" style={inputStyle} />
              <textarea placeholder="Your Message" rows="5" style={{...inputStyle, resize: 'vertical'}}></textarea>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>Submit Inquiry</button>
            </form>
          </motion.div>
        </div>

        <div className="map-placeholder mt-16 glass" style={{ height: '400px', borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
          [ Google Maps Integration Placeholder ]
        </div>
      </div>
    </main>
  );
}

const inputStyle = {
  width: '100%',
  padding: '1rem',
  background: 'var(--bg-main)',
  border: '1px solid var(--border-strong)',
  borderRadius: 'var(--radius-md)',
  color: 'var(--text-primary)',
  fontFamily: 'inherit',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.2s ease'
};
