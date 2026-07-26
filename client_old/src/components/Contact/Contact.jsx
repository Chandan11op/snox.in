import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Building } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          badge="Get in Touch"
          title="Contact SNOX"
          subtitle="Reach out to our engineering team for technical specifications, bulk orders, and custom fabrications."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Enquiry</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 outline-none transition-all" placeholder="Your Company" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 outline-none transition-all" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message & Requirements</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-900 outline-none transition-all" placeholder="Detail your required specifications..."></textarea>
              </div>
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 rounded-lg transition-colors">
                Submit Enquiry
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-slate-900 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8">Global Headquarters</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Building size={20} className="text-slate-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">SNOX Engineering</h4>
                    <p className="text-slate-400">Industrial Manufacturing Hub</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-slate-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-slate-400">123 Industrial Estate, Phase II<br/>Mumbai, India 400001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-slate-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-slate-400">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-slate-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-slate-400">sales@snox.in</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
