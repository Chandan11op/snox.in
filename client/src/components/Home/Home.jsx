import React, { useState } from "react";
import Products from "../Products/Products";
import { useGetAllProductsQuery } from "../../state/api";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import SectionHeading from "../ui/SectionHeading";
import IndustrialPlaceholder from "../ui/IndustrialPlaceholder";
import { ShieldCheck, Factory, Globe2, ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Section 2: Trust Indicators
  const clients = ["ALFA LAVAL", "GEA", "SPX FLOW", "TETRA PAK", "KRONES", "KHS"];
  
  // Section 5: Industries Served
  const industries = [
    { title: "Dairy Processing", desc: "Ultra-hygienic valves and fittings ensuring zero contamination for milk and cheese production." },
    { title: "Pharmaceuticals", desc: "ASME BPE compliant components designed for high-purity water and sterile applications." },
    { title: "Brewery & Beverage", desc: "Corrosion-resistant systems built to handle carbonation, fermentation, and CIP processes." },
    { title: "Cosmetics", desc: "Precision surface finishes to handle viscous fluids without residue buildup." }
  ];

  // Section 10: FAQ
  const faqs = [
    { q: "What grades of stainless steel do you manufacture?", a: "We exclusively manufacture using premium SS 304 and SS 316L grades to ensure maximum corrosion resistance and compliance with global sanitary standards." },
    { q: "Do your products meet FDA and ASME standards?", a: "Yes. All SNOX® sanitary fittings and valves are rigorously tested to meet or exceed FDA, ASME BPE, and ISO standards for hygiene and safety." },
    { q: "Can you provide custom end connections?", a: "Absolutely. While we offer standard sanitary tri-clamp, butt-weld, and thread connections, our engineering team can custom-fabricate connections to fit your specific processing line." }
  ];
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-industrial-950">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <IndustrialPlaceholder text="" className="opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-industrial-950/40 via-industrial-950/80 to-industrial-950" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center w-full mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-tighter text-white mb-8 leading-[1.1]">
              Precision. <br /> Engineered. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel-300 to-white">World Class.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-industrial-300 max-w-2xl mx-auto mb-12 font-light"
          >
            India’s most premium manufacturer of stainless steel sanitary valves, fittings, and tubing for high-purity industries.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton onClick={() => document.querySelector("#featured").scrollIntoView()} variant="secondary">
              Explore Catalog
            </MagneticButton>
            <button className="flex items-center gap-2 text-white font-medium hover:text-industrial-300 transition-colors group">
              View Specifications <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS */}
      <section className="py-12 border-b border-industrial-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-center text-sm font-semibold text-industrial-400 uppercase tracking-widest mb-8">Trusted by Global Processing Leaders</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
            {clients.map((client, i) => (
              <span key={i} className="text-2xl font-bold tracking-tighter text-industrial-900">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES */}
      <section className="py-32 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading 
            badge="Categories"
            title="Industrial Components."
            subtitle="Engineered for specific high-purity requirements across fluid handling systems."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['Sanitary Valves', 'Triclover Fittings'].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => navigate('/products')} // Update route if needed
              >
                <IndustrialPlaceholder text={`${cat} Imagery`} className="transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/80 via-industrial-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="text-3xl font-bold text-white mb-2">{cat}</h3>
                  <p className="text-industrial-300 font-medium flex items-center gap-2">
                    Browse Selection <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section id="featured" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <SectionHeading 
              badge="Showcase"
              title="Featured Engineering."
              subtitle="Our most sought-after stainless steel solutions."
            />
            <MagneticButton variant="outline" className="hidden md:flex">View All Products</MagneticButton>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="animate-pulse bg-industrial-100 rounded-3xl h-[400px]"></div>
              ))}
            </div>
          ) : (
            <Products products={data?.slice(0, 4)} headingText="" />
          )}
        </div>
      </section>

      {/* 5. INDUSTRIES SERVED */}
      <section className="py-32 bg-industrial-950 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading 
            badge="Applications"
            title="Built for extreme hygiene."
            subtitle="Providing flawless fluid flow control in the world's most demanding environments."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((ind, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-industrial-900 rounded-3xl p-8 border border-industrial-800 hover:bg-industrial-800 transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <Factory size={24} className="text-industrial-300" />
                </div>
                <h3 className="text-xl font-bold mb-4">{ind.title}</h3>
                <p className="text-industrial-400 leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MANUFACTURING PROCESS & 7. CERTIFICATIONS */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionHeading 
                badge="Process"
                title="Uncompromising material integrity."
                subtitle="From raw SS 316L ingots to mirror-polished valves, our manufacturing process is meticulously controlled."
              />
              <div className="space-y-8">
                {[
                  { title: "Material Selection", desc: "Rigorous spectrometer analysis ensures only premium 304 and 316L steel enters our facility." },
                  { title: "Precision Machining", desc: "Advanced CNC machining achieves tight tolerances required for leak-proof sanitary seals." },
                  { title: "Surface Polishing", desc: "Internal Ra < 0.4µm surface finishes eliminate bacterial entrapment zones." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-industrial-100 text-industrial-900 font-bold flex items-center justify-center text-sm">{i + 1}</div>
                      {i !== 2 && <div className="w-px h-full bg-industrial-100 my-2"></div>}
                    </div>
                    <div className="pb-8">
                      <h4 className="text-xl font-bold text-industrial-900 mb-2">{step.title}</h4>
                      <p className="text-industrial-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-industrial-50 rounded-3xl p-12 border border-industrial-100"
            >
              <ShieldCheck size={48} className="text-industrial-900 mb-8" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold text-industrial-900 mb-4">Certified Excellence.</h3>
              <p className="text-lg text-industrial-600 mb-12">Our superior solutions provide optimal flow while strictly adhering to global sanitary compliances.</p>
              <div className="grid grid-cols-2 gap-4">
                {["FDA Approved Materials", "ASME BPE Compliant", "ISO 9001:2015", "CE Certified"].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-industrial-900" />
                    <span className="font-semibold text-industrial-800">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE SNOX */}
      <section className="py-32 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <SectionHeading 
            badge="The Snox Advantage"
            title="Why leading facilities choose us."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { icon: Globe2, title: "Global Reach", desc: "Supplying precision components to processing plants across the globe." },
              { icon: ShieldCheck, title: "Corrosion Resistant", desc: "Engineered to withstand aggressive CIP/SIP cleaning protocols." },
              { icon: Factory, title: "Custom Fabrication", desc: "In-house engineering capable of bespoke manifold designs." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <feature.icon size={32} className="text-industrial-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-industrial-900 mb-4">{feature.title}</h3>
                <p className="text-industrial-600 text-lg leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (Placeholder for now) */}
      <section className="py-32 bg-industrial-950 text-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">"SNOX valves drastically reduced our maintenance downtime. The finishing is flawless."</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-industrial-800"></div>
              <div className="text-left">
                <div className="font-bold">Chief Plant Engineer</div>
                <div className="text-industrial-400 text-sm">Major Dairy Processing Facility</div>
              </div>
            </div>
         </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <SectionHeading 
            badge="Support"
            title="Frequently Asked Questions."
            centered
          />
          <div className="space-y-4 mt-12">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="border border-industrial-100 rounded-3xl p-6 cursor-pointer hover:border-industrial-200 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-industrial-900">{faq.q}</h4>
                  <ChevronDown className={`transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === i && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 text-industrial-600 text-lg leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT CTA */}
      <section className="py-32 bg-industrial-50 border-t border-industrial-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-industrial-900 tracking-tight mb-8">Ready to upgrade <br/> your fluid handling?</h2>
          <p className="text-xl text-industrial-500 mb-12 max-w-2xl mx-auto">Get in touch with our engineering team for technical datasheets, CAD models, and volume pricing.</p>
          <MagneticButton>Request a Quote</MagneticButton>
        </div>
      </section>

    </div>
  );
};

export default Home;
