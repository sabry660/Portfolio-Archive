const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];

const words = [
    {text: "Ideas", imgPath: "/images/ideas.svg"},
    {text: "Concepts", imgPath: "/images/concepts.svg"},
    {text: "Designs", imgPath: "/images/designs.svg"},
    {text: "Codes", imgPath: "/images/codes.svg"},
    {text: "Specs", imgPath: "/images/specs.svg"},
    {text: "Dreams", imgPath: "/images/dreams.svg"},
    {text: "Plans", imgPath: "/images/plans.svg"},
    {text: "Goals", imgPath: "/images/goals.svg"},
];

const counterItems = [
    {value: 5, suffix: "+", label: "Years of Experience"},
    {value: 10, suffix: "+", label: "Satisfied Clients"},
    {value: 20, suffix: "+", label: "Completed Projects"},
    {value: 90, suffix: "%", label: "Client Retention Rate"},
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
    {
        imgPath: "/images/logos/company-logo-12.png",
    },
];

const abilities = [
    {
        imgPath: "/images/communication.png",
        title: "Clear & Consistent Communication",
        desc: "Keeping you informed at every stage so you're never left wondering what's next.",
    },
    {
        imgPath: "/images/innovation.png",
        title: "Creative Problem Solving",
        desc: "Finding smart, efficient solutions to challenges while keeping your goals front and center.",
    },
    {
        imgPath: "/images/support.png",
        title: "Post-Launch Support",
        desc: "Standing by to ensure your project continues to perform at its best after delivery.",
    },
];

const techStackIcons = [
    {
        name: "Kotlin",
        modelPath: "/models/kotlin.glb",
        scale: 2,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Android",
        modelPath: "/models/android.glb",
        scale: 2.4,
        rotation: [0, 0, 0],
    },
    {
        name: "Flutter",
        modelPath: "/models/flutter.glb",
        scale: 28,
        rotation: [0, 0, 0],
    },
    {
        name: "VueJS",
        modelPath: "/models/vuejs.glb",
        scale: 0.5,
        rotation: [0, 0, 0],
        position: [0, -2, 0],
    },
    {
        name: "ReactJS",
        modelPath: "/models/reactjs.glb",
        scale: 0.9,
        rotation: [0, 0, 0],
    },
    {
        name: "NextJS",
        modelPath: "/models/javascript.glb",
        scale: 30,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Laravel",
        modelPath: "/models/laravel.glb",
        scale: 16,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Git",
        modelPath: "/models/git.glb",
        scale: 0.045,
        rotation: [0, -Math.PI / 4, 0],
    },
    {
        name: "Product Design",
        modelPath: "/models/figma.glb",
        scale: 2.2,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Management",
        modelPath: "/models/trello.glb",
        scale: 0.9,
        rotation: [0, 0, 0],
        position: [0, 0, 0],
    },
];

const expCards = [
    {
        review: "Mohamed Sabry brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "January 2023 - Present",
        responsibilities: [
            "Developed and maintained user-facing features for web applications.",
            "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
            "Optimized web applications for maximum speed and scalability.",
        ],
    },
    {
        review: "Mohamed Sabry's contributions to web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Full Stack Developer",
        date: "June 2020 - December 2023",
        responsibilities: [
            "Led the development of web applications, focusing on scalability.",
            "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
            "Contributed to projects that enhanced overall system performance.",
        ],
    },
    {
        review: "Mohamed Sabry's work on modern web applications brought a high level of quality and efficiency. He delivered solutions that enhanced user experience and meet product goals.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "React Developer",
        date: "March 2019 - May 2020",
        responsibilities: [
            "Built responsive web applications using React and modern frameworks.",
            "Improved app performance and user experience through code optimization and testing.",
            "Coordinated with the product team to implement features based on feedback.",
        ],
    },
];

const projects = [
    {
      id: 1,
      name: 'Word of mouth',
      image: '/Projects/w.w.png',
      liveDemo: 'https://wordofmoutheg.com/',
      technologies: 'Angular',
      description: "A modern digital platform designed to create a seamless online experience for its audience. The project combines a structured user journey with a polished interface, helping transform the brand's digital presence into a more engaging and effective experience.",
    },
    {
      id: 2,
      name: 'Fluency Sprint',
      image: '/Projects/f.s.png',
      liveDemo: 'https://www.fluencysprint.online/',
      technologies: 'React, Nestjs, Stripe',
      description: 'Fluency Sprint is a modern language-learning platform designed around an engaging and focused digital experience. The interface combines intuitive navigation, interactive learning flows, and a clean visual system to make language practice more accessible and enjoyable.',
    },
    {
      id: 3,
      name: 'Palestinian Stories',
      image: '/Projects/palestine.png',
      liveDemo: 'https://palestinianstories.com/',
      technologies: 'Angular, Python, Django, AWS',
      description: 'A digital storytelling platform created to bring stories, experiences, and cultural narratives into an immersive online environment. The experience places content and storytelling at the center while maintaining a simple, accessible, and visually engaging interface.',
    },
    {
      id: 4,
      name: 'Catch Recruitment',
      image: '/Projects/catch.png',
      liveDemo: 'https://catchrecruitment.com/',
      technologies: 'React, Next.js, Docker, Spring Boot',
      description: 'A professional recruitment platform designed to connect talent and opportunities through a streamlined digital experience. The project focuses on clear information architecture, intuitive navigation, and a modern interface built around the needs of both candidates and recruiters.',
    },
    {
      id: 5,
      name: 'CHUWI',
      image: '/Projects/chuwi.png',
      liveDemo: 'https://www.chuwi.com/',
      technologies: 'Angular, AWS, Node.js, Express.js',
      description: 'A high-scale digital experience for a global technology brand, combining product discovery, structured content, and e-commerce functionality within a polished technology-focused interface. The project demonstrates how complex product catalogs and commercial experiences can be presented through a fast, organized, and conversion-oriented digital platform.',
    },
    {
      id: 6,
      name: 'Dashboard',
      image: '/Projects/dash.png',
      liveDemo: 'https://dash1-mauve.vercel.app/',
      technologies: 'Angular, Spring Boot, AI',
      description: 'A powerful management dashboard built to give hotel teams a centralized view of daily operations, guest activity, requests, and essential property data. The platform brings operational workflows into one structured and efficient digital environment.',
    },
    {
      id: 7,
      name: 'Guest Portal',
      image: '/Projects/g.p.png',
      liveDemo: 'https://luxury-hotel-guest-portal.vercel.app/',
      technologies: 'Angular, Node.js, Nest.js, Tailwind CSS',
      description: 'A premium digital guest portal designed to transform the hotel stay into a seamless, connected experience. Guests can access hotel services, explore available amenities, submit requests, and interact with the property through a modern and intuitive interface.',
    },
    {
      id: 8,
      name: 'Villa Misk Hotels',
      image: '/Projects/villa.png',
      liveDemo: 'https://villamiskhotels.com/',
      technologies: 'React, TypeScript, Tailwind CSS, Responsive Web Design',
      description: "A refined digital experience created for Villa Misk Hotels, bringing the brand's hospitality offering into a modern and elegant online environment. The experience presents the property's accommodation and services through a polished, intuitive interface designed to strengthen the hotel's digital presence.",
    },
    {
      id: 9,
      name: 'Cafe Website',
      image: '/Projects/cafe.png',
      liveDemo: 'https://cafe-virid-eight.vercel.app/',
      technologies: 'HTML, CSS, JavaScript, Responsive Web Design',
      description: 'A modern and visually engaging website created for a café brand, designed to showcase the menu, atmosphere, and overall brand experience through a clean and responsive digital interface.',
    },
    {
      id: 10,
      name: 'Clothes Shop',
      image: '/Projects/clothes.png',
      liveDemo: 'https://clothes-shop-flax.vercel.app/',
      technologies: 'HTML, CSS, JavaScript, E-Commerce, Responsive Web Design',
      description: 'A stylish online shopping experience designed for a fashion brand, combining product presentation, intuitive navigation, and a clean shopping interface to create a seamless digital storefront.',
    },
    {
      id: 11,
      name: 'The Daily Drip',
      image: '/Projects/daily.png',
      liveDemo: 'https://the-daily-drip-caf-website.vercel.app/',
      technologies: 'Angular, TypeScript, Responsive Web Design',
      description: 'A polished digital experience designed for a modern café brand, combining strong visual presentation with intuitive navigation and responsive layouts to create an engaging online presence.',
    },
    {
      id: 12,
      name: 'Voya Travel',
      image: '/Projects/voya.png',
      liveDemo: 'https://voya-travel-website.vercel.app/',
      technologies: 'HTML, CSS, JavaScript, Responsive Web Design, GSAP',
      description: 'A modern travel platform concept designed around flight discovery and travel experiences. The interface focuses on clear information architecture, immersive visuals, and a smooth user journey across the platform.',
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    techStackIcons,
    navLinks,
    projects,
};