import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="page-about" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Story Section */}
        <section className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="h1 mb-6">Our Legacy of Precision</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-12">
              Since 2005, Snox Industrial has been at the forefront of engineering excellence, delivering uncompromising fluid control solutions for the world's most critical applications in pharmaceuticals, biotechnology, and food processing.
            </p>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="h3 mb-4">Our Mission</h2>
            <p className="text-muted">
              To engineer and manufacture the highest quality sanitary fluid handling components that ensure total integrity, safety, and efficiency for process industries globally.
            </p>
          </motion.div>
          <motion.div 
            className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)', background: 'var(--primary)', color: 'white' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="h3 mb-4" style={{ color: 'white' }}>Our Vision</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              To be the globally recognized benchmark for precision engineering and innovation in sanitary and industrial fluid control technologies.
            </p>
          </motion.div>
        </section>

        {/* Infrastructure & Manufacturing */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="h2 mb-8 text-center">World-Class Infrastructure</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  Our state-of-the-art manufacturing facility spans over 50,000 sq.ft and is equipped with advanced CNC machinery, automated welding systems, and rigorous testing laboratories.
                </p>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> CNC Turning & Milling Centers</li>
                  <li className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> Orbital Welding Technologies</li>
                  <li className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> Electro-polishing & Surface Treatment</li>
                  <li className="flex items-center gap-3"><span className="text-primary font-bold">✓</span> ISO Class 7 Cleanroom Assembly</li>
                </ul>
              </div>
              <div className="glass" style={{ height: '300px', borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                [ Infrastructure Image Placeholder ]
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
