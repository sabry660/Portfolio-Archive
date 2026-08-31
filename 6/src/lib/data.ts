export const siteConfig = {
  name: "Mohamed Sabry",
  firstName: "Mohamed",
  lastName: "Sabry",
  role: "Front-end Developer",
  tagline: "Crafting modern, high-performance web applications with precision & soul.",
  location: "Egypt",
  email: "engmohamedsabry925@gmail.com",
  phone: "01201289813",
  url: "https://mohamed-sabry.vercel.app",
  avatar: "/images/head.png",
  resume: "/frontend2.pdf",
  socials: {
    github: "https://github.com/engmohamedsabry",
    linkedin: "https://www.linkedin.com/in/engmohamedsabry",
    instagram: "https://www.instagram.com",
  },
  about: [
    "I'm a passionate Front-end Developer focused on creating intuitive, high-performance, and visually captivating web applications.",
    "With expertise across Angular, React, Next.js, TypeScript, and modern CSS frameworks, I translate complex business requirements into seamless, user-centric digital experiences with meticulous attention to detail.",
  ],
  workProcess: [
    { step: "01", title: "Contact Me" },
    { step: "02", title: "Gather Requirements" },
    { step: "03", title: "Wireframe & Designing" },
    { step: "04", title: "Development & Testing" },
    { step: "05", title: "Deliver to Customer" },
  ],
};

export const skills = {
  languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  frontend: ["Angular", "React", "Next.js", "Tailwind CSS", "GSAP", "RxJS", "Redux"],
  backend: ["Node.js", "Express.js", "REST APIs", "Spring Boot", "Django", "NestJS"],
  tools: [
    "Git",
    "GitHub",
    "Vercel",
    "AWS",
    "Docker",
    "Figma",
    "Postman",
    "Vite",
  ],
};

export const marqueeSkills = [
  "Angular", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  "GSAP", "HTML5", "CSS3", "RxJS", "Redux", "REST APIs", "UI/UX",
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  status: "current" | "completed";
  description: string;
  links: { label: string; href: string }[];
};

export const timeline: TimelineItem[] = [
  {
    title: "Founder & Lead Developer",
    org: "Zenvora",
    period: "2026 — Present",
    status: "current",
    description:
      "Founder of Zenvora — building high-performance, modern web applications, scalable digital products, and custom front-end solutions.",
    links: [],
  },
  {
    title: "Front-end Engineer",
    org: "Google",
    period: "2025",
    status: "completed",
    description:
      "Engineered high-scale web interfaces and modern component design systems focusing on web performance and user experience.",
    links: [],
  },
  {
    title: "Front-end Developer Trainee",
    org: "Quriv Technologies",
    period: "2024",
    status: "completed",
    description:
      "Trained at Quriv Technologies building responsive web applications, mastering Angular, React, and modern web development workflows.",
    links: [],
  },
];

export type Project = {
  index: string;
  title: string;
  year: string;
  stack: string[];
  description: string;
  link: string;
  repo: string;
  image: string;
  accent: string;
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Word of mouth",
    year: "2025",
    stack: ["Angular", "TypeScript", "Responsive Web Design"],
    description:
      "A modern digital platform designed to create a seamless online experience for its audience. The project combines a structured user journey with a polished interface, helping transform the brand's digital presence into a more engaging and effective experience.",
    link: "https://wordofmoutheg.com/",
    repo: "",
    image: "/Projects/w.w.png",
    accent: "#a855f7",
  },
  {
    index: "02",
    title: "Fluency Sprint",
    year: "2025",
    stack: ["React", "NestJS", "Stripe"],
    description:
      "Fluency Sprint is a modern language-learning platform designed around an engaging and focused digital experience. The interface combines intuitive navigation, interactive learning flows, and a clean visual system to make language practice more accessible and enjoyable.",
    link: "https://www.fluencysprint.online/",
    repo: "",
    image: "/Projects/f.s.png",
    accent: "#3b82f6",
  },
  {
    index: "03",
    title: "Palestinian Stories",
    year: "2025",
    stack: ["Angular", "Python", "Django", "AWS"],
    description:
      "A digital storytelling platform created to bring stories, experiences, and cultural narratives into an immersive online environment. The experience places content and storytelling at the center while maintaining a simple, accessible, and visually engaging interface.",
    link: "https://palestinianstories.com/",
    repo: "",
    image: "/Projects/palestine.png",
    accent: "#10b981",
  },
  {
    index: "04",
    title: "Catch Recruitment",
    year: "2025",
    stack: ["React", "Next.js", "Docker", "Spring Boot"],
    description:
      "A professional recruitment platform designed to connect talent and opportunities through a streamlined digital experience. The project focuses on clear information architecture, intuitive navigation, and a modern interface built around the needs of both candidates and recruiters.",
    link: "https://catchrecruitment.com/",
    repo: "",
    image: "/Projects/catch.png",
    accent: "#f59e0b",
  },
  {
    index: "05",
    title: "CHUWI",
    year: "2025",
    stack: ["Angular", "AWS", "Node.js", "Express.js"],
    description:
      "A high-scale digital experience for a global technology brand, combining product discovery, structured content, and e-commerce functionality within a polished technology-focused interface. The project demonstrates how complex product catalogs and commercial experiences can be presented through a fast, organized, and conversion-oriented digital platform.",
    link: "https://www.chuwi.com/",
    repo: "",
    image: "/Projects/chuwi.png",
    accent: "#ec4899",
  },
  {
    index: "06",
    title: "Dashboard",
    year: "2025",
    stack: ["Angular", "Spring Boot", "AI"],
    description:
      "A powerful management dashboard built to give hotel teams a centralized view of daily operations, guest activity, requests, and essential property data. The platform brings operational workflows into one structured and efficient digital environment.",
    link: "https://dash1-mauve.vercel.app/",
    repo: "",
    image: "/Projects/dash.png",
    accent: "#8b5cf6",
  },
  {
    index: "07",
    title: "Guest Portal",
    year: "2025",
    stack: ["Angular", "Node.js", "NestJS", "Tailwind CSS"],
    description:
      "A premium digital guest portal designed to transform the hotel stay into a seamless, connected experience. Guests can access hotel services, explore available amenities, submit requests, and interact with the property through a modern and intuitive interface.",
    link: "https://luxury-hotel-guest-portal.vercel.app/",
    repo: "",
    image: "/Projects/g.p.png",
    accent: "#06b6d4",
  },
  {
    index: "08",
    title: "Villa Misk Hotels",
    year: "2025",
    stack: ["React", "TypeScript", "Tailwind CSS", "Responsive Web Design"],
    description:
      "A refined digital experience created for Villa Misk Hotels, bringing the brand's hospitality offering into a modern and elegant online environment. The experience presents the property's accommodation and services through a polished, intuitive interface designed to strengthen the hotel's digital presence.",
    link: "https://villamiskhotels.com/",
    repo: "",
    image: "/Projects/villa.png",
    accent: "#eab308",
  },
  {
    index: "09",
    title: "Cafe Website",
    year: "2025",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
    description:
      "A modern and visually engaging website created for a café brand, designed to showcase the menu, atmosphere, and overall brand experience through a clean and responsive digital interface.",
    link: "https://cafe-virid-eight.vercel.app/",
    repo: "",
    image: "/Projects/cafe.png",
    accent: "#f97316",
  },
  {
    index: "10",
    title: "Clothes Shop",
    year: "2025",
    stack: ["HTML", "CSS", "JavaScript", "E-Commerce", "Responsive Web Design"],
    description:
      "A stylish online shopping experience designed for a fashion brand, combining product presentation, intuitive navigation, and a clean shopping interface to create a seamless digital storefront.",
    link: "https://clothes-shop-flax.vercel.app/",
    repo: "",
    image: "/Projects/clothes.png",
    accent: "#ef4444",
  },
  {
    index: "11",
    title: "The Daily Drip",
    year: "2025",
    stack: ["Angular", "TypeScript", "Responsive Web Design"],
    description:
      "A polished digital experience designed for a modern café brand, combining strong visual presentation with intuitive navigation and responsive layouts to create an engaging online presence.",
    link: "https://the-daily-drip-caf-website.vercel.app/",
    repo: "",
    image: "/Projects/daily.png",
    accent: "#84cc16",
  },
  {
    index: "12",
    title: "Voya Travel",
    year: "2025",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Web Design", "GSAP"],
    description:
      "A modern travel platform concept designed around flight discovery and travel experiences. The interface focuses on clear information architecture, immersive visuals, and a smooth user journey across the platform.",
    link: "https://voya-travel-website.vercel.app/",
    repo: "",
    image: "/Projects/voya.png",
    accent: "#14b8a6",
  },
];

export type ArchiveProject = {
  title: string;
  year: string;
  stack: string[];
  link?: string;
  repo?: string;
  image?: string;
  caseStudy?: string;
};

export const moreProjects: ArchiveProject[] = [];

export const highlights = [
  {
    title: "High-Performance Web Applications",
    detail: "Built 12+ production front-end platforms with Angular & React",
    year: "2025",
    image: "/Projects/w.w.png",
  },
  {
    title: "E-Commerce & Digital Experience",
    detail: "Delivered digital storefronts and e-commerce solutions",
    year: "2025",
    image: "/Projects/chuwi.png",
  },
  {
    title: "Enterprise Dashboards & Portals",
    detail: "Designed and built management dashboards and hotel portals",
    year: "2025",
    image: "/Projects/dash.png",
  },
];


