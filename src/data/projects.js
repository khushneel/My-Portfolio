export const projects = [
  {
    id: 1,
    title: "NexaCommerce",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "A blazing-fast, feature-rich e-commerce platform with real-time inventory, AI-powered recommendations, and Stripe payments. Built with React, Node.js, and MongoDB.",
    longDescription:
      "NexaCommerce is a production-ready e-commerce solution handling 10k+ concurrent users. Features include dynamic product catalog, cart & wishlist, order tracking, admin dashboard with analytics, and seamless Stripe checkout flow.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind"],
    category: "fullstack",
    featured: true,
    live: "https://example.com",
    github: "https://github.com",
    stats: { stars: 128, forks: 42 },
    year: 2024,
    color: "#6C63FF",
  },
  {
    id: 2,
    title: "AuraAI",
    subtitle: "AI-Powered Design Assistant",
    description:
      "An intelligent design assistant leveraging OpenAI GPT-4 Vision to analyze UI mockups, suggest improvements, and auto-generate component code.",
    longDescription:
      "AuraAI integrates OpenAI Vision API to provide real-time UI analysis. Users upload designs and receive detailed accessibility audits, color palette suggestions, and React component scaffolding.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    tags: ["React", "OpenAI", "Python", "FastAPI", "TailwindCSS", "WebSocket"],
    category: "ai",
    featured: true,
    live: "https://example.com",
    github: "https://github.com",
    stats: { stars: 256, forks: 89 },
    year: 2024,
    color: "#00D4FF",
  },
  {
    id: 3,
    title: "PulseBoard",
    subtitle: "Real-Time Analytics Dashboard",
    description:
      "A real-time business intelligence dashboard with WebSocket data streams, interactive D3.js charts, and customizable widget layouts.",
    longDescription:
      "PulseBoard provides live KPI monitoring for SaaS businesses. Drag-and-drop dashboard builder, 15+ chart types, automated report generation, and multi-tenant architecture.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "D3.js", "Socket.io", "PostgreSQL", "Redis", "Docker"],
    category: "dashboard",
    featured: true,
    live: "https://example.com",
    github: "https://github.com",
    stats: { stars: 94, forks: 31 },
    year: 2024,
    color: "#00FF9C",
  },
  {
    id: 4,
    title: "MotionKit",
    subtitle: "React Animation Component Library",
    description:
      "A comprehensive animation library for React with 50+ pre-built, customizable components powered by GSAP and Framer Motion.",
    longDescription:
      "MotionKit ships with scroll-triggered animations, parallax components, magnetic buttons, text reveal effects, and a full Storybook documentation site.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["React", "GSAP", "Framer Motion", "TypeScript", "Storybook", "npm"],
    category: "library",
    featured: false,
    live: "https://example.com",
    github: "https://github.com",
    stats: { stars: 412, forks: 156 },
    year: 2023,
    color: "#FF6584",
  },
  {
    id: 5,
    title: "CoSpace",
    subtitle: "Collaborative Workspace App",
    description:
      "A real-time collaborative workspace with live document editing, video calls, task management, and team chat — all in one app.",
    longDescription:
      "CoSpace supports 100+ simultaneous editors via Operational Transform algorithms. Integrated Y.js for conflict-free CRDT syncing, WebRTC for peer video, and Notion-like block editor.",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80",
    tags: ["React", "Y.js", "WebRTC", "GraphQL", "PostgreSQL", "AWS"],
    category: "fullstack",
    featured: false,
    live: "https://example.com",
    github: "https://github.com",
    stats: { stars: 187, forks: 62 },
    year: 2023,
    color: "#6C63FF",
  },
  {
    id: 6,
    title: "ChainVault",
    subtitle: "Web3 Portfolio Tracker",
    description:
      "A Web3 DeFi portfolio tracker supporting 20+ chains with live price feeds, P&L analytics, and wallet health scoring.",
    longDescription:
      "ChainVault aggregates data from Ethereum, Polygon, BSC, and Solana via RPC nodes. Real-time token prices from CoinGecko, NFT floor prices, and automated tax report export.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: [
      "React",
      "Ethers.js",
      "Web3",
      "Next.js",
      "CoinGecko API",
      "Recharts",
    ],
    category: "web3",
    featured: false,
    live: "https://example.com",
    github: "https://github.com",
    stats: { stars: 73, forks: 28 },
    year: 2023,
    color: "#00D4FF",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai", label: "AI / ML" },
  { id: "dashboard", label: "Dashboard" },
  { id: "library", label: "Library" },
  { id: "web3", label: "Web3" },
];
