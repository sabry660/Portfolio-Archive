export type Project = {
  name: string
  description: string
  tags: string[]
  url?: string
  image?: string
  video?: string
  videoPlayer?: string
}

export const translations = {
  header: {
    stack: "Stack",
    experiencia: "Experience",
    projetos: "Projects",
    empresa: "Expertise",
    contato: "Contact",
    openMenu: "Open menu",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Front end developer",
    description: "I turn ideas into digital products — from robust backend to mobile apps, focused on real experience and results for your business.",
    ctaProjects: "View Projects",
    ctaWhatsapp: "Chat on WhatsApp",
  },
  stack: {
    label: "Stack",
    title: "Technologies I use",
    subtitle: "From front to back, from web to mobile — a complete stack.",
    tabs: {
      frontend: "Front-end",
      backend: "Back-end",
      mobile: "Mobile",
      tools: "Tools",
    },
  },
  experience: {
    label: "Hands-on experience",
    title: "Tools and libraries I have worked with",
    subtitle: "Beyond my core stack, I have solid experience with CI/CD and quality tooling to keep deliveries consistent.",
    focus: [
      "Production CI/CD",
      "Quality with automated gates",
    ],
    knowledgeLabel: "Knowledge",
    knowledgeSubtitle: "Technologies I understand conceptually but have not yet applied in real projects.",
    knowledge: [
      "Micro-frontends",
      "Java (basic)",
    ],
    groups: [
      {
        label: "CI/CD & Containers",
        items: ["CI/CD Pipelines", "GitHub Actions", "GitLab CI", "Docker"],
      },
      {
        label: "Code Quality",
        items: ["ESLint", "Prettier", "Husky", "SonarQube", "Storybook"],
      },
      {
        label: "State & Architecture",
        items: ["Zustand", "IoC / DI"],
      },
      {
        label: "CMS & Content",
        items: ["Sanity"],
      },
      {
        label: "Cloud & Observability",
        items: ["Google Firebase", "Datadog"],
      },
      {
        label: "Languages",
        items: ["C#"],
      },
    ],
  },
  projects: {
    label: "Projects",
    title: "Recent work",
    subtitle: "Real projects delivered for clients — from design to deploy.",
    visitSite: "Visit site",
    items: [
      {
        name: "Word of mouth",
        description: "A modern digital platform designed to create a seamless online experience for its audience. The project combines a structured user journey with a polished interface, helping transform the brand's digital presence into a more engaging and effective experience.",
        tags: ["Angular"],
        url: "https://wordofmoutheg.com/",
        image: "/Projects/w.w.png",
      },
      {
        name: "Fluency Sprint",
        description: "Fluency Sprint is a modern language-learning platform designed around an engaging and focused digital experience. The interface combines intuitive navigation, interactive learning flows, and a clean visual system to make language practice more accessible and enjoyable.",
        tags: ["React", "Nestjs", "Stripe"],
        url: "https://www.fluencysprint.online/",
        image: "/Projects/f.s.png",
      },
      {
        name: "Palestinian Stories",
        description: "A digital storytelling platform created to bring stories, experiences, and cultural narratives into an immersive online environment. The experience places content and storytelling at the center while maintaining a simple, accessible, and visually engaging interface.",
        tags: ["Angular", "Python", "Django", "AWS"],
        url: "https://palestinianstories.com/",
        image: "/Projects/palestine.png",
      },
      {
        name: "Catch Recruitment",
        description: "A professional recruitment platform designed to connect talent and opportunities through a streamlined digital experience. The project focuses on clear information architecture, intuitive navigation, and a modern interface built around the needs of both candidates and recruiters.",
        tags: ["React", "Next.js", "Docker", "Spring Boot"],
        url: "https://catchrecruitment.com/",
        image: "/Projects/catch.png",
      },
      {
        name: "CHUWI",
        description: "A high-scale digital experience for a global technology brand, combining product discovery, structured content, and e-commerce functionality within a polished technology-focused interface. The project demonstrates how complex product catalogs and commercial experiences can be presented through a fast, organized, and conversion-oriented digital platform.",
        tags: ["Angular", "AWS", "Node.js", "Express.js"],
        url: "https://www.chuwi.com/",
        image: "/Projects/chuwi.png",
      },
      {
        name: "Dashboard",
        description: "A powerful management dashboard built to give hotel teams a centralized view of daily operations, guest activity, requests, and essential property data. The platform brings operational workflows into one structured and efficient digital environment.",
        tags: ["Angular", "Spring Boot", "AI"],
        url: "https://dash1-mauve.vercel.app/",
        image: "/Projects/dash.png",
      },
      {
        name: "Guest Portal",
        description: "A premium digital guest portal designed to transform the hotel stay into a seamless, connected experience. Guests can access hotel services, explore available amenities, submit requests, and interact with the property through a modern and intuitive interface.",
        tags: ["Angular", "Node.js", "Nest.js", "Tailwind CSS"],
        url: "https://luxury-hotel-guest-portal.vercel.app/",
        image: "/Projects/g.p.png",
      },
      {
        name: "Villa Misk Hotels",
        description: "A refined digital experience created for Villa Misk Hotels, bringing the brand's hospitality offering into a modern and elegant online environment. The experience presents the property's accommodation and services through a polished, intuitive interface designed to strengthen the hotel's digital presence.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Web Design"],
        url: "https://villamiskhotels.com/",
        image: "/Projects/villa.png",
      },
      {
        name: "Cafe Website",
        description: "A modern and visually engaging website created for a café brand, designed to showcase the menu, atmosphere, and overall brand experience through a clean and responsive digital interface.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
        url: "https://cafe-virid-eight.vercel.app/",
        image: "/Projects/cafe.png",
      },
      {
        name: "Clothes Shop",
        description: "A stylish online shopping experience designed for a fashion brand, combining product presentation, intuitive navigation, and a clean shopping interface to create a seamless digital storefront.",
        tags: ["HTML", "CSS", "JavaScript", "E-Commerce", "Responsive Web Design"],
        url: "https://clothes-shop-flax.vercel.app/",
        image: "/Projects/clothes.png",
      },
      {
        name: "The Daily Drip",
        description: "A polished digital experience designed for a modern café brand, combining strong visual presentation with intuitive navigation and responsive layouts to create an engaging online presence.",
        tags: ["Angular", "TypeScript", "Responsive Web Design"],
        url: "https://the-daily-drip-caf-website.vercel.app/",
        image: "/Projects/daily.png",
      },
      {
        name: "Voya Travel",
        description: "A modern travel platform concept designed around flight discovery and travel experiences. The interface focuses on clear information architecture, immersive visuals, and a smooth user journey across the platform.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive Web Design", "GSAP"],
        url: "https://voya-travel-website.vercel.app/",
        image: "/Projects/voya.png",
      },
    ],
  },
  empresa: {
    label: "Expertise",
    title: "How I contribute",
    subtitle: "I'm a delivery-focused product engineer. I work across the full cycle: technical planning, implementation, integrations, and continuous improvement.",
    services: [
      {
        title: "Web Products",
        description: "Interfaces, dashboards, and internal systems focused on usability, performance, and sustainable architecture.",
      },
      {
        title: "Mobile Apps",
        description: "iOS and Android apps with React Native — one codebase, two products. From prototype to store publication.",
      },
      {
        title: "Back-end & Integrations",
        description: "Robust APIs and third-party integrations to support growth, automation, and reliability.",
      },
    ],
  },
  contato: {
    label: "Contact",
    title: "Let's talk?",
    subtitle: "Open to opportunities, projects, and conversations. Choose how you prefer to connect.",
    whatsapp: "WhatsApp",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    tagline: "Professional portfolio",
  },
};
