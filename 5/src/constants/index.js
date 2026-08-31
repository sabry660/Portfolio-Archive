// constants/index.js

export const ownerInfo = {
  name: "Mohamed Sabry",
  role: "Front-end Developer",
  email: "engmohamedsabry925@gmail.com",
  phone: "01201289813",
  formattedPhone: "+20 120 128 9813",
};

export const servicesData = [
  {
    title: "Frontend Engineering",
    description:
      "Crafting fast, responsive, and resilient user interfaces using React, Angular, Next.js, and TypeScript with clean architecture and modern development standards.",
    items: [
      {
        title: "Single Page & Multi-Page Apps",
        description: "(React, Angular, Next.js, Vite)",
      },
      {
        title: "Modern UI/UX Development",
        description: "(Tailwind CSS, HTML5, CSS3, Responsive Design)",
      },
      {
        title: "State Management & Architecture",
        description: "(Redux, RxJS, Context API, Modular Codebase)",
      },
    ],
  },
  {
    title: "Performance & Optimization",
    description:
      "Transforming slow websites into lightning-fast experiences with top-tier Lighthouse scores, code splitting, and advanced asset delivery techniques.",
    items: [
      {
        title: "Page Speed & Web Vitals",
        description: "(Lighthouse 95+ Scores, Lazy Loading, Asset Bundling)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, SSG, Structured Data, Meta Tags Optimization)",
      },
      {
        title: "Cross-Browser Compatibility",
        description: "(Flawless rendering across mobile, tablet, desktop)",
      },
    ],
  },
  {
    title: "Interactive Web Experiences",
    description:
      "Elevating static designs into engaging, animated digital products with smooth transitions, interactive visual elements, and dynamic UI micro-interactions.",
    items: [
      {
        title: "Motion & Animation",
        description: "(GSAP, Framer Motion, CSS Animations)",
      },
      {
        title: "Interactive Components",
        description: "(Custom Modals, Filters, Marquees, Dynamic Dashboards)",
      },
      {
        title: "Accessibility & UX Standards",
        description: "(WCAG Standards, Keyboard Navigation, Semantic HTML)",
      },
    ],
  },
  {
    title: "API Integration & Solutions",
    description:
      "Seamlessly connecting frontend interfaces with robust backend APIs, cloud services, e-commerce systems, and payment gateways.",
    items: [
      {
        title: "REST & GraphQL Integration",
        description: "(Axios, Fetch API, Async Data Pipelines)",
      },
      {
        title: "E-Commerce & Gateways",
        description: "(Stripe, Shopping Carts, Checkout Flows)",
      },
      {
        title: "Authentication & Security",
        description: "(OAuth, JWT Tokens, Secure Form Validation)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Word of mouth",
    image: "/Projects/w.w.png",
    bgImage: "/Projects/w.w.png",
    liveDemo: "https://wordofmoutheg.com/",
    technologies: "Angular",
    frameworks: [{ id: 1, name: "Angular" }],
    description:
      "A modern digital platform designed to create a seamless online experience for its audience. The project combines a structured user journey with a polished interface, helping transform the brand's digital presence into a more engaging and effective experience.",
  },
  {
    id: 2,
    name: "Fluency Sprint",
    image: "/Projects/f.s.png",
    bgImage: "/Projects/f.s.png",
    liveDemo: "https://www.fluencysprint.online/",
    technologies: "React, Nestjs, Stripe",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "NestJS" },
      { id: 3, name: "Stripe" },
    ],
    description:
      "Fluency Sprint is a modern language-learning platform designed around an engaging and focused digital experience. The interface combines intuitive navigation, interactive learning flows, and a clean visual system to make language practice more accessible and enjoyable.",
  },
  {
    id: 3,
    name: "Palestinian Stories",
    image: "/Projects/palestine.png",
    bgImage: "/Projects/palestine.png",
    liveDemo: "https://palestinianstories.com/",
    technologies: "Angular, Python, Django, AWS",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Python" },
      { id: 3, name: "Django" },
      { id: 4, name: "AWS" },
    ],
    description:
      "A digital storytelling platform created to bring stories, experiences, and cultural narratives into an immersive online environment. The experience places content and storytelling at the center while maintaining a simple, accessible, and visually engaging interface.",
  },
  {
    id: 4,
    name: "Catch Recruitment",
    image: "/Projects/catch.png",
    bgImage: "/Projects/catch.png",
    liveDemo: "https://catchrecruitment.com/",
    technologies: "React, Next.js, Docker, Spring Boot",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Docker" },
      { id: 4, name: "Spring Boot" },
    ],
    description:
      "A professional recruitment platform designed to connect talent and opportunities through a streamlined digital experience. The project focuses on clear information architecture, intuitive navigation, and a modern interface built around the needs of both candidates and recruiters.",
  },
  {
    id: 5,
    name: "CHUWI",
    image: "/Projects/chuwi.png",
    bgImage: "/Projects/chuwi.png",
    liveDemo: "https://www.chuwi.com/",
    technologies: "Angular, AWS, Node.js, Express.js",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "AWS" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Express.js" },
    ],
    description:
      "A high-scale digital experience for a global technology brand, combining product discovery, structured content, and e-commerce functionality within a polished technology-focused interface. The project demonstrates how complex product catalogs and commercial experiences can be presented through a fast, organized, and conversion-oriented digital platform.",
  },
  {
    id: 6,
    name: "Dashboard",
    image: "/Projects/dash.png",
    bgImage: "/Projects/dash.png",
    liveDemo: "https://dash1-mauve.vercel.app/",
    technologies: "Angular, Spring Boot, AI",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Spring Boot" },
      { id: 3, name: "AI" },
    ],
    description:
      "A powerful management dashboard built to give hotel teams a centralized view of daily operations, guest activity, requests, and essential property data. The platform brings operational workflows into one structured and efficient digital environment.",
  },
  {
    id: 7,
    name: "Guest Portal",
    image: "/Projects/g.p.png",
    bgImage: "/Projects/g.p.png",
    liveDemo: "https://luxury-hotel-guest-portal.vercel.app/",
    technologies: "Angular, Node.js, Nest.js, Tailwind CSS",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Nest.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
    description:
      "A premium digital guest portal designed to transform the hotel stay into a seamless, connected experience. Guests can access hotel services, explore available amenities, submit requests, and interact with the property through a modern and intuitive interface.",
  },
  {
    id: 8,
    name: "Villa Misk Hotels",
    image: "/Projects/villa.png",
    bgImage: "/Projects/villa.png",
    liveDemo: "https://villamiskhotels.com/",
    technologies: "React, TypeScript, Tailwind CSS, Responsive Web Design",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Tailwind CSS" },
    ],
    description:
      "A refined digital experience created for Villa Misk Hotels, bringing the brand's hospitality offering into a modern and elegant online environment. The experience presents the property's accommodation and services through a polished, intuitive interface designed to strengthen the hotel's digital presence.",
  },
  {
    id: 9,
    name: "Cafe Website",
    image: "/Projects/cafe.png",
    bgImage: "/Projects/cafe.png",
    liveDemo: "https://cafe-virid-eight.vercel.app/",
    technologies: "HTML, CSS, JavaScript, Responsive Web Design",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
    ],
    description:
      "A modern and visually engaging website created for a café brand, designed to showcase the menu, atmosphere, and overall brand experience through a clean and responsive digital interface.",
  },
  {
    id: 10,
    name: "Clothes Shop",
    image: "/Projects/clothes.png",
    bgImage: "/Projects/clothes.png",
    liveDemo: "https://clothes-shop-flax.vercel.app/",
    technologies: "HTML, CSS, JavaScript, E-Commerce, Responsive Web Design",
    frameworks: [
      { id: 1, name: "HTML/CSS" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "E-Commerce" },
    ],
    description:
      "A stylish online shopping experience designed for a fashion brand, combining product presentation, intuitive navigation, and a clean shopping interface to create a seamless digital storefront.",
  },
  {
    id: 11,
    name: "The Daily Drip",
    image: "/Projects/daily.png",
    bgImage: "/Projects/daily.png",
    liveDemo: "https://the-daily-drip-caf-website.vercel.app/",
    technologies: "Angular, TypeScript, Responsive Web Design",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "TypeScript" },
    ],
    description:
      "A polished digital experience designed for a modern café brand, combining strong visual presentation with intuitive navigation and responsive layouts to create an engaging online presence.",
  },
  {
    id: 12,
    name: "Voya Travel",
    image: "/Projects/voya.png",
    bgImage: "/Projects/voya.png",
    liveDemo: "https://voya-travel-website.vercel.app/",
    technologies: "HTML, CSS, JavaScript, Responsive Web Design, GSAP",
    frameworks: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "HTML/CSS" },
    ],
    description:
      "A modern travel platform concept designed around flight discovery and travel experiences. The interface focuses on clear information architecture, immersive visuals, and a smooth user journey across the platform.",
  },
];

export const socials = [
  { name: "Email", href: "mailto:engmohamedsabry925@gmail.com" },
  { name: "Phone", href: "tel:01201289813" },
  { name: "WhatsApp", href: "https://wa.me/201201289813" },
  { name: "GitHub", href: "https://github.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

