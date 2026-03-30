export const projects = [
  {
    id: 1,
    title: "Allen Sportswear",
    subtitle: "Real-Time Sportswear Customization Platform",
    description:
      "A production-grade Angular platform built for Allen Sportswear, enabling teams to design fully personalized sports uniforms in real-time — powered by an advanced SVG rendering engine, live color picker, gradient system, and an interactive Draftboard builder.",
    logo: "https://www.allensportswear.com/cropped-asw-square-logo-192x192.png",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
    highlights: [
      "Engineered a high-performance SVG rendering engine for real-time uniform customization with zero-lag visual feedback",
      "Built live color picker integration enabling instant gradient, multi-color fill and dynamic attribute-level SVG updates",
      "Implemented Angular-powered Draftboard UI with ngStyle & reactive data binding for seamless design interactions",
      "Delivered a scalable, reusable SVG customization engine used in production for team uniform design & ordering",
    ],
    tags: [
      "Angular",
      "SVG Rendering",
      "TypeScript",
      "ngStyle",
      "RxJS",
      "CSS Gradients",
    ],
    category: "frontend",
    featured: true,
    live: "https://store.allensportswear.com/draftboard/football-uniform-sublimated-knights",
    github: null,
    stats: null,
    year: 2025,
    color: "#FF6B35",
  },
  {
    id: 2,
    title: "BidJones",
    subtitle: "Multi-Vendor Real-Time Bidding Marketplace",
    description:
      "A scalable auction-based marketplace platform — similar to OLX but supercharged with real-time multi-user bidding, digital asset trading, and an integrated buyer-seller chat system, built end-to-end in Angular.",
    logo: "https://www.bidjones.com/assets/images/logomain.png",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    highlights: [
      "Developed real-time multi-user bidding UI with instant live price synchronization across concurrent sessions",
      "Built complete buyer-seller workflow: product listings, auction interfaces, bid tracking & transaction management",
      "Integrated in-app chat system enabling direct real-time negotiation between buyers and sellers",
      "Designed scalable Angular architecture with component-based services supporting complex marketplace interactions",
    ],
    tags: [
      "Angular",
      "TypeScript",
      "Real-Time UI",
      "RxJS",
      "REST APIs",
      "Responsive Design",
    ],
    category: "frontend",
    featured: true,
    live: "https://www.bidjones.com/",
    github: null,
    stats: null,
    year: 2024,
    color: "#00D4FF",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
];
