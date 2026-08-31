import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    java,
    spring,
    boot,
    aws,
    nextjs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
    },
  ];
  
  const services = [
    {
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "React & Angular Specialist",
      icon: backend,
    },
    {
      title: "Responsive Web Design",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    // {
    //   name: "Java",
    //   icon: java
    // },
    {
      name: "Java Spring",
      icon: spring
    },
    // {
    //   name: "Spring Boot",
    //   icon: boot
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next js",
      icon: nextjs
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const projects = [
    {
      name: "Word of mouth",
      description: "A modern digital platform designed to create a seamless online experience for its audience. The project combines a structured user journey with a polished interface, helping transform the brand's digital presence into a more engaging and effective experience.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
      ],
      image: "/Projects/w.w.png",
      source_code_link: "https://wordofmoutheg.com/",
    },
    {
      name: "Fluency Sprint",
      description: "Fluency Sprint is a modern language-learning platform designed around an engaging and focused digital experience. The interface combines intuitive navigation, interactive learning flows, and a clean visual system to make language practice more accessible and enjoyable.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Nestjs",
          color: "pink-blue-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
      ],
      image: "/Projects/f.s.png",
      source_code_link: "https://www.fluencysprint.online/",
    },
    {
      name: "Palestinian Stories",
      description: "A digital storytelling platform created to bring stories, experiences, and cultural narratives into an immersive online environment. The experience places content and storytelling at the center while maintaining a simple, accessible, and visually engaging interface.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "pink-blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "gold-text-gradient",
        },
      ],
      image: "/Projects/palestine.png",
      source_code_link: "https://palestinianstories.com/",
    },
    {
      name: "Catch Recruitment",
      description: "A professional recruitment platform designed to connect talent and opportunities through a streamlined digital experience. The project focuses on clear information architecture, intuitive navigation, and a modern interface built around the needs of both candidates and recruiters.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "pink-blue-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "gold-text-gradient",
        },
      ],
      image: "/Projects/catch.png",
      source_code_link: "https://catchrecruitment.com/",
    },
    {
      name: "CHUWI",
      description: "A high-scale digital experience for a global technology brand, combining product discovery, structured content, and e-commerce functionality within a polished technology-focused interface. The project demonstrates how complex product catalogs and commercial experiences can be presented through a fast, organized, and conversion-oriented digital platform.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "pink-blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
          color: "gold-text-gradient",
        },
      ],
      image: "/Projects/chuwi.png",
      source_code_link: "https://www.chuwi.com/",
    },
    {
      name: "Dashboard",
      description: "A powerful management dashboard built to give hotel teams a centralized view of daily operations, guest activity, requests, and essential property data. The platform brings operational workflows into one structured and efficient digital environment.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "pink-blue-text-gradient",
        },
        {
          name: "AI",
          color: "green-text-gradient",
        },
      ],
      image: "/Projects/dash.png",
      source_code_link: "https://dash1-mauve.vercel.app/",
    },
    {
      name: "Guest Portal",
      description: "A premium digital guest portal designed to transform the hotel stay into a seamless, connected experience. Guests can access hotel services, explore available amenities, submit requests, and interact with the property through a modern and intuitive interface.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-blue-text-gradient",
        },
        {
          name: "Nest.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "gold-text-gradient",
        },
      ],
      image: "/Projects/g.p.png",
      source_code_link: "https://luxury-hotel-guest-portal.vercel.app/",
    },
    {
      name: "Villa Misk Hotels",
      description: "A refined digital experience created for Villa Misk Hotels, bringing the brand's hospitality offering into a modern and elegant online environment. The experience presents the property's accommodation and services through a polished, intuitive interface designed to strengthen the hotel's digital presence.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Responsive Web Design",
          color: "gold-text-gradient",
        },
      ],
      image: "/Projects/villa.png",
      source_code_link: "https://villamiskhotels.com/",
    },
    {
      name: "Cafe Website",
      description: "A modern and visually engaging website created for a café brand, designed to showcase the menu, atmosphere, and overall brand experience through a clean and responsive digital interface.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Responsive Web Design",
          color: "gold-text-gradient",
        },
      ],
      image: "/Projects/cafe.png",
      source_code_link: "https://cafe-virid-eight.vercel.app/",
    },
    {
      name: "Clothes Shop",
      description: "A stylish online shopping experience designed for a fashion brand, combining product presentation, intuitive navigation, and a clean shopping interface to create a seamless digital storefront.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "E-Commerce",
          color: "gold-text-gradient",
        },
        {
          name: "Responsive Web Design",
          color: "pink-text-gradient",
        },
      ],
      image: "/Projects/clothes.png",
      source_code_link: "https://clothes-shop-flax.vercel.app/",
    },
    {
      name: "The Daily Drip",
      description: "A polished digital experience designed for a modern café brand, combining strong visual presentation with intuitive navigation and responsive layouts to create an engaging online presence.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-blue-text-gradient",
        },
        {
          name: "Responsive Web Design",
          color: "green-text-gradient",
        },
      ],
      image: "/Projects/daily.png",
      source_code_link: "https://the-daily-drip-caf-website.vercel.app/",
    },
    {
      name: "Voya Travel",
      description: "A modern travel platform concept designed around flight discovery and travel experiences. The interface focuses on clear information architecture, immersive visuals, and a smooth user journey across the platform.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Responsive Web Design",
          color: "gold-text-gradient",
        },
        {
          name: "GSAP",
          color: "pink-text-gradient",
        },
      ],
      image: "/Projects/voya.png",
      source_code_link: "https://voya-travel-website.vercel.app/",
    },
  ];
  
  export { services, technologies, projects };