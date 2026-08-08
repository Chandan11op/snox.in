import bspBallValve from '../assets/products/BALLVALVE/BSPBALLVALVE.jpg';
import tcBallValve from '../assets/products/BALLVALVE/tc-ball-valve.jpg';

export const products = [
  {
    id: 'bsp-ball-valve',
    name: 'BSP Ball Valve',
    category: 'Ball Valves',
    shortDescription: 'Premium stainless steel BSP threaded ball valve for precision flow control.',
    longDescription: 'Engineered for high-performance applications, our BSP Ball Valve offers uncompromising durability and exact flow control. Constructed from top-tier 316L stainless steel, it ensures maximum corrosion resistance and longevity in demanding industrial environments.',
    applications: ['Chemical Processing', 'Water Treatment', 'Food & Beverage', 'Pharmaceuticals'],
    industries: ['Manufacturing', 'Energy', 'Biotech'],
    benefits: ['Leak-proof seal', 'Low operating torque', 'Blow-out proof stem', 'High corrosion resistance'],
    features: ['Threaded ends to BSP standards', 'Full port design for unrestricted flow', 'PTFE seats and seals', 'Locking device available'],
    specifications: {
      material: 'Stainless Steel 316/316L',
      sizeRange: '1/4" to 4"',
      pressureRating: '1000 WOG (Water, Oil, Gas)',
      temperatureRange: '-20°C to 200°C'
    },
    variants: ['1/4 Inch', '1/2 Inch', '1 Inch', '2 Inch', '4 Inch'],
    packaging: 'Individually boxed with protective caps and technical documentation.',
    usage: 'Ideal for isolating fluid flow in pipe systems where threaded connections are required.',
    advantages: 'Easy installation, minimal maintenance, and extended service life compared to standard valves.',
    highlights: ['100% Factory Tested', 'ISO 9001 Certified Manufacturing', 'Premium Surface Finish'],
    keywords: ['BSP ball valve', 'stainless steel valve', 'industrial valve', 'flow control', 'threaded ball valve'],
    metaDescription: 'Discover our premium BSP Ball Valve. Manufactured from 316L stainless steel for ultimate corrosion resistance and precision flow control in industrial applications.',
    images: [bspBallValve]
  },
  {
    id: 'tc-ball-valve',
    name: 'Tri-Clover (TC) Ball Valve',
    category: 'Ball Valves',
    shortDescription: 'Sanitary TC ball valve designed for hygienic processing industries.',
    longDescription: 'The Tri-Clover (TC) Ball Valve is the gold standard for hygienic processing. Featuring a seamless, crevice-free design, it allows for easy cleaning (CIP) and sterilization (SIP), making it indispensable for dairy, food, and pharmaceutical applications.',
    applications: ['Dairy Processing', 'Brewing', 'Pharmaceuticals', 'Cosmetics'],
    industries: ['Food & Beverage', 'Healthcare', 'Biotech'],
    benefits: ['Hygienic design', 'Easy to clean', 'Quick installation', 'Zero dead leg options available'],
    features: ['Tri-clamp ends for rapid assembly', 'Cavity filled PTFE seats', 'Internal surface finish Ra < 0.4 µm', 'Easily automated'],
    specifications: {
      material: 'Stainless Steel 316L (Wetted Parts)',
      sizeRange: '1/2" to 4"',
      pressureRating: 'PN10 / 150 PSI',
      temperatureRange: '-10°C to 150°C'
    },
    variants: ['1 Inch', '1.5 Inch', '2 Inch', '3 Inch', '4 Inch'],
    packaging: 'Sealed in plastic bags and packed in protective foam boxes to ensure pristine condition upon arrival.',
    usage: 'Designed for use in sanitary pipelines requiring frequent dismantling for cleaning.',
    advantages: 'Eliminates product entrapment and ensures compliance with strict hygienic standards.',
    highlights: ['FDA Approved Seals', '3A Sanitary Standards Compliant', 'Ultra-Smooth Finish'],
    keywords: ['TC ball valve', 'sanitary valve', 'tri clamp valve', 'hygienic ball valve', 'dairy valve'],
    metaDescription: 'High-quality Tri-Clover Ball Valve for sanitary applications. Features FDA approved seals and easy cleanability for food, dairy, and pharmaceutical industries.',
    images: [tcBallValve]
  },
  // Add more products here as needed, based on the categories.
];

export const categories = [
  'Ball Valves',
  'Butterfly Valves',
  'Dairy Fittings',
  'Diaphragm Valves',
  'NRV (Non-Return Valves)',
  'Sanitary Accessories',
  'Sight Glasses',
  'Tri-Clover Fittings'
];
