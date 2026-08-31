import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

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

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * projects.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 80,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{(index + 1).toString().padStart(2, '0')}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>Web Development</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.technologies}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.liveDemo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
