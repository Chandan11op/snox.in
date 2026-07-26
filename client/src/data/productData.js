export const categories = [
    { id: 'BUTTERFLYVALVE', name: 'Butterfly Valves' },
    { id: 'BALLVALVE', name: 'Ball Valves' },
    { id: 'NRV', name: 'Non-Return Valves (NRV)' },
    { id: 'SIGHTGLASS', name: 'Sight Glasses' },
    { id: 'DIAPHRAGMVALVE', name: 'Diaphragm Valves' },
    { id: 'TUBING', name: 'Stainless Steel Tubing' },
    { id: 'SANITARYACCESSORY', name: 'Sanitary Accessories' },
    { id: 'DAIRYFITTING', name: 'Dairy Fittings' },
];

export const products = [
    {
        id: 'butterfly-valve-flange',
        name: 'Stainless Steel Flanged Butterfly Valve',
        category: 'BUTTERFLYVALVE',
        shortDescription: 'Designed for hygienic processing applications, providing precise flow control and cleanability.',
        detailedDescription: 'The Stainless Steel Flanged Butterfly Valve offers robust flow control for sanitary applications. Manufactured from SS304/SS316L, it ensures optimal hygiene and corrosion resistance suitable for the dairy, pharmaceutical, food processing, and beverage industries.',
        applications: ['Dairy', 'Pharmaceutical', 'Food Processing', 'Beverage'],
        features: ['Hygienic design', 'Easy maintenance', 'Leak-proof sealing', 'Low pressure drop'],
        material: 'SS304 / SS316L',
        connectionType: 'Flanged / Weld / Clamp',
        industries: ['Food & Beverage', 'Pharma', 'Chemical'],
        image: ""
    },
    {
        id: 'tc-ball-valve',
        name: 'Tri-Clamp Ball Valve',
        category: 'BALLVALVE',
        shortDescription: 'High-precision ball valve for sanitary fluid handling with minimal pressure drop.',
        detailedDescription: 'Engineered for seamless integration into hygienic pipelines, this Tri-Clamp Ball Valve provides full port flow and excellent shut-off capabilities. Ideal for viscous fluids and CIP (Clean-In-Place) systems.',
        applications: ['Viscous fluids', 'CIP systems', 'Brewery operations'],
        features: ['Full port design', 'Cavity filled seats', 'Lockable handle'],
        material: 'SS316L',
        connectionType: 'Tri-Clamp',
        industries: ['Brewery', 'Dairy', 'Cosmetics'],
        image: ""
    },
    {
        id: 'nrv-valve',
        name: 'Sanitary Non-Return Valve (NRV)',
        category: 'NRV',
        shortDescription: 'Prevents backflow in hygienic piping systems to ensure product safety.',
        detailedDescription: 'Our Sanitary NRV is designed to prevent reverse flow in critical process lines. Its spring-loaded mechanism ensures rapid closure, protecting pumps and preventing cross-contamination.',
        applications: ['Pump protection', 'Process lines', 'Water systems'],
        features: ['Spring-loaded', 'Hygienic finish', 'Easy to dismantle'],
        material: 'SS304 / SS316L',
        connectionType: 'Weld / Clamp',
        industries: ['Pharmaceutical', 'Water Treatment', 'Food'],
        image: ""
    },
    {
        id: 'sight-glasses',
        name: 'In-line Sight Glass',
        category: 'SIGHTGLASS',
        shortDescription: 'Provides clear visual inspection of fluid flow in sanitary systems.',
        detailedDescription: 'Constructed with high-strength borosilicate glass and premium stainless steel, this in-line sight glass allows operators to monitor fluid color, clarity, and flow rate without interrupting the process.',
        applications: ['Flow monitoring', 'Quality inspection'],
        features: ['360-degree viewing', 'Shatter-resistant glass', 'Zero dead leg'],
        material: 'SS316L / Borosilicate Glass',
        connectionType: 'Tri-Clamp / Weld',
        industries: ['Brewery', 'Dairy', 'Chemical'],
        image: ""
    },
    {
        id: 'ss-tc-diaphragm-valves',
        name: 'Sanitary Diaphragm Valve',
        category: 'DIAPHRAGMVALVE',
        shortDescription: 'Ultimate flow control for ultra-pure applications with zero dead leg.',
        detailedDescription: 'The Sanitary Diaphragm Valve is the industry standard for high-purity and aseptic applications. Its design eliminates entrapment areas, ensuring complete drainability and sterility.',
        applications: ['WFI systems', 'Aseptic processing', 'Biotech'],
        features: ['Zero dead leg', 'PTFE diaphragms', 'SIP/CIP compatible'],
        material: 'SS316L',
        connectionType: 'Tri-Clamp',
        industries: ['Biotechnology', 'Pharmaceutical', 'Semiconductor'],
        image: ""
    },
    {
        id: 'ss-tubing',
        name: 'Premium Sanitary Tubing',
        category: 'TUBING',
        shortDescription: 'High-quality stainless steel tubing for hygienic and ultra-pure fluid transfer.',
        detailedDescription: 'Our seamless and welded sanitary tubing is manufactured to strict ASME BPE standards. With a superior internal surface finish, it minimizes bacterial growth and ensures optimal fluid transfer in critical applications.',
        applications: ['Process piping', 'Transfer lines', 'Heat exchangers'],
        features: ['High Ra finish', 'Corrosion resistant', 'Precise dimensions'],
        material: 'SS304 / SS316L',
        connectionType: 'Weld',
        industries: ['All Sanitary Industries'],
        image: ""
    },
    {
        id: 'sanitary-accessories',
        name: 'Sanitary Accessories & Clamps',
        category: 'SANITARYACCESSORY',
        shortDescription: 'Essential components for secure and hygienic connections.',
        detailedDescription: 'A complete range of heavy-duty clamps, hangers, and seals designed to maintain the integrity of your sanitary piping system under varying pressures and temperatures.',
        applications: ['Pipe connection', 'System support'],
        features: ['Heavy-duty construction', 'Quick assembly', 'Vibration resistant'],
        material: 'SS304',
        connectionType: 'Various',
        industries: ['Food Processing', 'Dairy', 'Pharma'],
        image: ""
    },
    {
        id: 'dairy-fittings',
        name: 'Dairy Bends & Tees',
        category: 'DAIRYFITTING',
        shortDescription: 'Precision-engineered fittings for smooth directional flow.',
        detailedDescription: 'Our dairy bends, tees, and reducers are manufactured to provide smooth, uninterrupted flow. Designed specifically for the dairy and food industries to meet rigorous cleanability standards.',
        applications: ['Directional flow change', 'Line reduction', 'Manifolds'],
        features: ['Smooth internal welds', 'Uniform wall thickness', 'Polished finish'],
        material: 'SS304 / SS316L',
        connectionType: 'Weld / Tri-Clamp',
        industries: ['Dairy', 'Beverage', 'Food'],
        image: ""
    }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (categoryId) => products.filter(p => p.category === categoryId);
