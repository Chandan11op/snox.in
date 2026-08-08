import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', company: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="text-accent" size={24} />,
      title: 'Call Us',
      detail: '+91 123 456 7890',
      subDetail: 'Mon-Fri, 9am to 6pm IST'
    },
    {
      icon: <Mail className="text-accent" size={24} />,
      title: 'Email Us',
      detail: 'info@snox.in',
      subDetail: 'sales@snox.in'
    },
    {
      icon: <MapPin className="text-accent" size={24} />,
      title: 'Visit HQ',
      detail: 'Industrial Area, Phase 1',
      subDetail: 'Mumbai, Maharashtra, India'
    }
  ];

  return (
    <div className="bg-industrial-chrome min-h-screen pb-24 pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent font-bold tracking-wider uppercase text-sm mb-4">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6">Let's Discuss Your Needs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our engineering team is ready to assist you with product selection, custom manufacturing requests, or technical support.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-6 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-industrial-chrome rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary text-xl mb-1">{info.title}</h4>
                  <p className="text-gray-900 font-medium mb-1">{info.detail}</p>
                  <p className="text-gray-500 text-sm">{info.subDetail}</p>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-64 relative"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <p className="text-gray-400 font-medium flex flex-col items-center">
                  <MapPin size={32} className="mb-2 opacity-50" />
                  Interactive Map Integration
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 bg-white rounded-3xl shadow-premium border border-gray-100 p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold text-primary mb-8">Send us a Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h4 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h4>
                <p className="text-green-700">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-green-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-industrial-chrome border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-industrial-chrome border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name (Optional)</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-industrial-chrome border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                    placeholder="Engineering Inc."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message / Requirements</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-industrial-chrome border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center bg-primary text-white py-4 rounded-xl font-semibold text-lg transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-light shadow-premium transform hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
