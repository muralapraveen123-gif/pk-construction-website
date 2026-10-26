export interface ServiceItem {
  id: string;
  title: string;
  teluguTitle?: string;
  description: string;
  priceTag?: string;
  features: string[];
  icon: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  reviewText: string;
  projectType: string;
  verified: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'elevation3d' | 'structural' | 'interiors';
  location: string;
  area: string;
  status: 'Completed' | 'Ongoing' | 'Approved';
  image: string;
  description: string;
}

export interface PackageItem {
  id: string;
  name: string;
  pricePerSqFt: number;
  highlight?: boolean;
  popular?: boolean;
  description: string;
  specifications: {
    structure: string[];
    flooring: string[];
    doorsWindows: string[];
    kitchenBath: string[];
    paintingElectrical: string[];
  };
}

export const COMPANY_DETAILS = {
  name: "PK Constructions",
  legalName: "PK Construction - Real Estate Builders & Construction",
  rating: 5.0,
  reviewCount: 39,
  tagline: "Design. Structure. Permission. Construction. All in One Place.",
  category: "Real estate builders & construction company in Nidadavole, Andhra Pradesh",
  phone: "080086 54131",
  displayPhone: "080086 54131",
  rawPhone: "+918008654131",
  whatsappUrl: "https://wa.me/918008654131?text=Hello%20PK%20Constructions,%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information.",
  address: "Ganesh Complex, Nidadavolu, Andhra Pradesh 534301",
  complexName: "Located in: Bharath Matha complex",
  fullAddress: "Bharath Matha complex, Ganesh Complex, Nidadavolu, Andhra Pradesh 534301",
  hours: "Open · Closes 9:00 PM",
  hoursDetail: "Monday – Sunday: 9:00 AM – 9:00 PM",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15264.444211116298!2d81.6568225!3d16.9056247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37bc86e4175d01%3A0xa1ea142eeaaec2c2!2sNidadavole%2C%20Andhra%20Pradesh%20534301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=PK+Construction+Ganesh+Complex+Nidadavolu+Andhra+Pradesh+534301",
  instagramUrl: "https://instagram.com",
  youtubeUrl: "https://youtube.com",
  aboutText: "PK Construction is a trusted Construction Company in Nidadavole providing House Construction, Building Plan Approval, Structural Design, Building Permissions, Turnkey Construction, Residential & Commercial Building Construction, Interior Design, 3D Elevation & AutoCAD Drafting. We deliver end-to-end architectural engineering solutions with zero compromise on structural integrity and transparent client communication.",
  teluguPromo1: "మీ కలల ఇంటిని నిర్మించే ముందు… దాన్ని 3Dలో చూసేయండి! 🏡",
  teluguPromo2: "మోడ్రన్ కిచెన్ నిర్మించే ముందు, ముందుగా 3D డిజైన్ల ప్రణాళిక!",
  teluguBpsPromo: "Building Penalization Scheme (BPS): మీ ఇంటి ప్లాన్ రెగ్యులరైజ్ చేసుకోడానికి గోల్డెన్ ఛాన్స్!",
};

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Hemanth Heam",
    rating: 5,
    date: "Google Verified Review",
    reviewText: "Great communication, fair pricing, and top-tier workmanship.",
    projectType: "Full House Construction",
    verified: true,
  },
  {
    id: "rev-2",
    name: "mettimi saipriya",
    rating: 5,
    date: "Google Verified Review",
    reviewText: "The result is a cozy, simple, yet stylish space that perfectly fits our budget.",
    projectType: "Interior Design & Plan Approval",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Poornesh Pavan",
    rating: 5,
    date: "Google Verified Review",
    reviewText: "Very nice work, nice quality and efforts.",
    projectType: "Residential Building & 3D Elevation",
    verified: true,
  },
  {
    id: "rev-4",
    name: "K. Satyanarayana Raju",
    rating: 5,
    date: "Google Verified Review",
    reviewText: "PK Constructions handled our municipal building approval and structural design without any hassle in Nidadavole. Very professional engineers.",
    projectType: "Building Permission & Structural Design",
    verified: true,
  },
  {
    id: "rev-5",
    name: "V. Rama Krishna",
    rating: 5,
    date: "Google Verified Review",
    reviewText: "Best construction firm in Nidadavole. Their ₹2,200 per sq ft package is completely transparent with top grade steel and cement used on site.",
    projectType: "Turnkey Residential Construction",
    verified: true,
  },
  {
    id: "rev-6",
    name: "M. Durga Prasad",
    rating: 5,
    date: "Google Verified Review",
    reviewText: "3D elevation design was fantastic. We could visualize our duplex house before starting construction. The actual building looks exact replica!",
    projectType: "3D Elevation & Construction",
    verified: true,
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "house-construction",
    title: "Turnkey House Construction",
    teluguTitle: "పూర్తి ఇండ్ల నిర్మాణం (టర్న్‌కీ)",
    description: "Complete residential and commercial construction from foundation excavation to key handover. Engineered with certified grade materials, seismic-resistant RCC, and meticulous site supervision.",
    priceTag: "Starting ₹2,000 per sq ft",
    features: [
      "Rigorous structural framing & soil testing",
      "53-Grade certified cement (Ultratech / Dalmia)",
      "Fe550 TMT steel reinforcement (Tata Tiscon / Vizag Steel)",
      "Regular milestone inspection reports & photography",
      "Guaranteed on-time handover"
    ],
    icon: "HardHat",
    badge: "Most Popular"
  },
  {
    id: "building-permissions",
    title: "Building Permissions & Layout Approvals",
    teluguTitle: "మున్సిపల్ & DTCP ప్లాన్ అప్రూవల్స్",
    description: "Hassle-free municipal sanctioning, DTCP approvals, and layout regularizations. We prepare architectural plans strictly conforming to Andhra Pradesh building bylaws.",
    priceTag: "Fast Track Approval",
    features: [
      "Nidadavole Municipality Building Sanctions",
      "DTCP & APCRDA compliant layout drawings",
      "BPS (Building Penalization Scheme) Regularization",
      "Title verification, EC & structural stability certificates",
      "100% legal compliance & online submission assistance"
    ],
    icon: "FileCheck2",
    badge: "Official Approvals"
  },
  {
    id: "structural-design",
    title: "Structural Engineering & RCC Design",
    teluguTitle: "స్ట్రక్చరల్ ఇంజనీరింగ్ & RCC డిజైన్",
    description: "Comprehensive structural analysis, soil bearing calculation, and reinforcement detailing following IS 456 and IS 1893 codes to protect your building against earthquakes and settlement.",
    priceTag: "Certified Safety",
    features: [
      "Footing, column, plinth beam & slab reinforcement details",
      "Bending moment & seismic load calculations in STAAD.Pro / ETABS",
      "Bar Bending Schedule (BBS) to minimize steel wastage",
      "Soil bearing capacity testing & foundation sizing",
      "Certified Structural Stability Certificate"
    ],
    icon: "Layers",
    badge: "Engineering Core"
  },
  {
    id: "3d-elevation",
    title: "3D Elevation & Architectural Walkthrough",
    teluguTitle: "3D ఎలివేషన్ & వాక్‌త్రూ డిజైన్",
    description: "Visualize your dream home in photorealistic 3D before a single brick is laid. Modern contemporary, traditional South Indian, and neoclassical facade styling.",
    priceTag: "మీ కలల ఇంటిని 3Dలో చూడండి",
    features: [
      "Photorealistic daylight & night lighting 3D renders",
      "Modern exterior texture, stone cladding & glass balcony layouts",
      "Virtual walkthrough video tours",
      "Modern modular kitchen 3D layouts",
      "Instant revision iterations based on family preference"
    ],
    icon: "Box",
    badge: "Visual Excellence"
  },
  {
    id: "autocad-drafting",
    title: "AutoCAD 2D Drafting & Floor Plans",
    teluguTitle: "ఆటోక్యాడ్ 2D డ్రాఫ్టింగ్ & ఫ్లోర్ ప్లానింగ్",
    description: "Precision computer-aided drafting for residential layouts, working drawings, electrical diagrams, and plumbing schematics at unbeatable rates.",
    priceTag: "Only ₹2.00 / sq.ft",
    features: [
      "Vastu-compliant architectural floor plans",
      "Complete electrical point & conduit routing layouts",
      "Sanitary & plumbing waterline schematics",
      "Municipal submission blue prints & colored key plans",
      "Ready-to-build working drawings for site masons"
    ],
    icon: "Compass",
    badge: "₹2 / sq.ft Rate"
  },
  {
    id: "luxury-interiors",
    title: "Luxury Interior Design & Modular Execution",
    teluguTitle: "లగ్జరీ ఇంటీరియర్ డిజైన్",
    description: "Transform your living space with bespoke interiors: customized modular kitchens, TV consoles, designer false ceilings with warm COB lighting, and premium wardrobes.",
    priceTag: "Standard, Premium & Luxury",
    features: [
      "BWP Marine Grade Plywood with Acrylic/Laminate finishes",
      "Soft-close Hettich / Hafele hardware fittings",
      "Gypsum false ceiling with multi-layer ambient lighting",
      "Custom pooja room mandir architecture",
      "Ergonomic space optimization for every room"
    ],
    icon: "Sparkles",
    badge: "Turnkey Finish"
  }
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: "standard",
    name: "Standard Construction",
    pricePerSqFt: 2000,
    description: "Budget-friendly, durable turnkey home construction at ₹2,000 per sq ft using trusted regional materials for long-lasting quality.",
    specifications: {
      structure: [
        "RCC Framed Structure with Fe500 TMT Steel",
        "Red clay bricks / solid concrete block masonry",
        "Standard M20 mix concrete for slabs & footings"
      ],
      flooring: [
        "Vitrified tiles (2x2 ft) up to ₹45/sq.ft value",
        "Granite platform for kitchen counter",
        "Anti-skid ceramic tiles in bathrooms"
      ],
      doorsWindows: [
        "Teak wood main door frame with flush shutter",
        "Country wood internal door frames with waterproof flush doors",
        "Aluminum sliding windows with safety MS grills"
      ],
      kitchenBath: [
        "Stainless steel single bowl sink",
        "Standard CP fittings (Cera / Parryware basic range)",
        "Ceramic wall tiles up to 7ft height in bathrooms"
      ],
      paintingElectrical: [
        "Tractor emulsion interior paint with putty finish",
        "Anchor / Goldmedal fire-resistant wiring & modular switches",
        "Single coat primer and weather-shield exterior paint"
      ]
    }
  },
  {
    id: "premium",
    name: "Premium Construction",
    pricePerSqFt: 2200,
    highlight: true,
    popular: true,
    description: "Our signature package at ₹2,200 per sq ft. Superior structural materials, elegant vitrified tiles, and premium sanitaryware.",
    specifications: {
      structure: [
        "Heavy RCC Frame with Fe550D Tata Tiscon / Vizag Steel",
        "Top-grade Ultratech / Dalmia 53 Grade Cement",
        "9-inch external walls & 4.5-inch internal partition walls",
        "Comprehensive anti-termite treatment with warranty"
      ],
      flooring: [
        "Large format vitrified tiles (4x2 ft or 2.5x2.5 ft) up to ₹70/sq.ft",
        "Premium polished Black Galaxy granite kitchen counter",
        "Step tiles & lobby granite cladding"
      ],
      doorsWindows: [
        "First quality Teak wood main door with brass fittings & digital lock provision",
        "Teak wood frames with designer veneered internal doors",
        "UPVC sliding windows with bug mesh and toughened safety glass"
      ],
      kitchenBath: [
        "Nirali stainless steel double bowl sink with drainboard",
        "Jaquar / Kohler CP bathroom fittings & diverters",
        "Wall-hung EWC with concealed cisterns",
        "Digital vitrified wall tiles up to 7.5ft height"
      ],
      paintingElectrical: [
        "Asian Paints Royale luxury interior emulsion with 2 coats Birla Putty",
        "Finolex / Havells FRLS concealed wiring with Legrand modular switches",
        "Asian Paints Apex Ultima weather-proof exterior paint"
      ]
    }
  },
  {
    id: "luxury",
    name: "Luxury / Executive Villa",
    pricePerSqFt: 2500,
    description: "Bespoke architectural masterclass at ₹2,500 per sq ft with imported marble/granite, smart electrical provisions, Italian style fixtures, and exquisite woodwork.",
    specifications: {
      structure: [
        "Seismic Zone III resilient structure with structural certification",
        "Tata Tiscon Fe550D rebar & Ultratech Super Cement",
        "Complete waterproof chemical treatment on roof, sunshades & basements"
      ],
      flooring: [
        "Italian composite marble or premium 6x4 ft GVT tiles up to ₹130/sq.ft",
        "Wooden flooring finish in Master Bedroom",
        "Imported Quartz stone kitchen countertop with waterfall edge"
      ],
      doorsWindows: [
        "8ft High Carved Teakwood main door with Yale smart biometrics",
        "Solid wood internal doors with German Hafele magnetic locks",
        "Heavy-duty Schuco / Fenesta acoustic UPVC or thermal-break aluminum"
      ],
      kitchenBath: [
        "Grohe / Kohler premium thermostatic shower panels & sensor faucets",
        "Full glass shower partition with toughened glass in master bath",
        "Designer vanity counter basins with LED backlit mirrors"
      ],
      paintingElectrical: [
        "Full designer false ceiling with concealed Philips LED profiles",
        "Schneider Electric smart home automation ready switches",
        "Asian Paints PU Italian wood polish on all wooden surfaces",
        "Apex Ultima Protek with 10-year exterior warranty"
      ]
    }
  }
];

export const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Sri Lakshmi Nilayam - Modern Villa",
    category: "residential",
    location: "Nidadavole Bypass Road, AP",
    area: "3,200 sq.ft (G+1)",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Turnkey residential villa featuring double-height living room, custom teakwood main entrance, and cantilevered terrace garden."
  },
  {
    id: "proj-2",
    title: "Contemporary 3D Elevation & Facade Design",
    category: "elevation3d",
    location: "Ganesh Nagar, Nidadavole",
    area: "2,400 sq.ft (G+2)",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description: "Modern architectural 3D exterior visualization with vertical wooden louvers, warm exterior profile lighting, and glass balustrades."
  },
  {
    id: "proj-3",
    title: "Bharath Commercial & Office Complex",
    category: "commercial",
    location: "Near Railway Station Road, Nidadavole",
    area: "6,500 sq.ft (G+3)",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Commercial building with heavy load-bearing structural design, DTCP approvals, wide retail frontage, and multi-tenant layout."
  },
  {
    id: "proj-4",
    title: "Seismic-Resistant RCC Framing & Slab Casting",
    category: "structural",
    location: "Canal Road, Nidadavole",
    area: "4,100 sq.ft",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1200&q=80",
    description: "Meticulous bar-bending execution with dual-curtain column reinforcement, vibration compaction, and water curing compliance."
  },
  {
    id: "proj-5",
    title: "Luxury Modular Kitchen & Living Interior",
    category: "interiors",
    location: "Old Town, Nidadavole",
    area: "1,850 sq.ft",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    description: "Modern acrylic modular kitchen with island breakfast counter, Hafele hardware, and warm false ceiling lighting."
  },
  {
    id: "proj-6",
    title: "Sri Venkateswara Duplex Home",
    category: "residential",
    location: "Near Someswara Swamy Temple, Nidadavole",
    area: "2,800 sq.ft",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "Traditional East-facing Vastu home with modern open-concept floor plan and custom brass-fitted pooja room."
  }
];

export const BPS_FAQS = [
  {
    question: "What is the AP Building Penalization Scheme (BPS)?",
    answer: "BPS is the official Andhra Pradesh Government scheme permitting property owners to regularize unauthorized constructions or deviations from sanctioned municipal plans by paying a designated compounding fee."
  },
  {
    question: "How does PK Constructions assist with BPS and Municipal Permissions?",
    answer: "We prepare the exact measured 'As-Built' AutoCAD drawings, calculate compounding deviation fees, obtain required Structural Stability Certificates from registered structural engineers, and submit the file online to Nidadavole Municipality / APCRDA portal."
  },
  {
    question: "What documents are required for building permission in Nidadavole?",
    answer: "Registered Sale Deed / Title Deed, Encumbrance Certificate (EC) for 13–30 years, latest property tax receipt, boundary sketch, Vastu floor plan & structural drawings prepared by PK Constructions."
  },
  {
    question: "What is your standard turnkey construction timeline?",
    answer: "A standard G+1 residential home of 2,000–2,500 sq.ft is completed within 6 to 9 months, adhering to strict milestone curing periods for maximum structural strength."
  }
];
