import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {/* 🌐 Visit Website Button — Green + External Arrow */}
      <Link rel="noopener" target="_blank" href={live} className="flex gap-2">
        <Button
          size="sm"
          className="group bg-green-600 hover:bg-green-700 text-white flex items-center">
          Live Demo
          <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </Link>

      {/* 🐙 GitHub Button — Dark + Icon + Arrow */}
      {repo && (
        <Link rel="noopener" target="_blank" href={repo} className="flex gap-2">
          <Button
            size="sm"
            className="group bg-gray-800 hover:bg-gray-900 text-white flex items-center">
            <FaGithub className="mr-2 w-5 h-5" />
            Source Code
            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </Link>
      )}
    </div>
  );
};


export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <span>OpenAI</span>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <span>Java</span>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  angular: {
    title: "Angular",
    bg: "black",
    fg: "white",
    icon: <span>Angular</span>,
  },
  stripe: {
    title: "Stripe",
    bg: "black",
    fg: "white",
    icon: <span>Stripe</span>,
  },
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <span>Django</span>,
  },
  springboot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <span>Spring Boot</span>,
  },
  ai: {
    title: "AI",
    bg: "black",
    fg: "white",
    icon: <span>AI</span>,
  },
  nestjs: {
    title: "Nest.js",
    bg: "black",
    fg: "white",
    icon: <span>Nest.js</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "word-of-mouth",
    category: "Web Development",
    title: "Word of mouth",
    src: "/Projects/w.w.png",
    screenshots: ["/Projects/w.w.png"],
    skills: {
      frontend: [PROJECT_SKILLS.angular],
      backend: [],
    },
    live: "https://wordofmoutheg.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A modern digital platform designed to create a seamless online experience for its audience. The project combines a structured user journey with a polished interface, helping transform the brand's digital presence into a more engaging and effective experience.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">Angular</p>
        </div>
      );
    },
  },
  {
    id: "fluency-sprint",
    category: "Web Development",
    title: "Fluency Sprint",
    src: "/Projects/f.s.png",
    screenshots: ["/Projects/f.s.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.nestjs, PROJECT_SKILLS.stripe],
    },
    live: "https://www.fluencysprint.online/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Fluency Sprint is a modern language-learning platform designed around an engaging and focused digital experience. The interface combines intuitive navigation, interactive learning flows, and a clean visual system to make language practice more accessible and enjoyable.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">React, Nestjs, Stripe</p>
        </div>
      );
    },
  },
  {
    id: "palestinian-stories",
    category: "Web Development",
    title: "Palestinian Stories",
    src: "/Projects/palestine.png",
    screenshots: ["/Projects/palestine.png"],
    skills: {
      frontend: [PROJECT_SKILLS.angular],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.django],
    },
    live: "https://palestinianstories.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A digital storytelling platform created to bring stories, experiences, and cultural narratives into an immersive online environment. The experience places content and storytelling at the center while maintaining a simple, accessible, and visually engaging interface.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">Angular, Python, Django, AWS</p>
        </div>
      );
    },
  },
  {
    id: "catch-recruitment",
    category: "Web Development",
    title: "Catch Recruitment",
    src: "/Projects/catch.png",
    screenshots: ["/Projects/catch.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.next],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.springboot],
    },
    live: "https://catchrecruitment.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A professional recruitment platform designed to connect talent and opportunities through a streamlined digital experience. The project focuses on clear information architecture, intuitive navigation, and a modern interface built around the needs of both candidates and recruiters.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">React, Next.js, Docker, Spring Boot</p>
        </div>
      );
    },
  },
  {
    id: "chuwi",
    category: "E-commerce",
    title: "CHUWI",
    src: "/Projects/chuwi.png",
    screenshots: ["/Projects/chuwi.png"],
    skills: {
      frontend: [PROJECT_SKILLS.angular],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express],
    },
    live: "https://www.chuwi.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A high-scale digital experience for a global technology brand, combining product discovery, structured content, and e-commerce functionality within a polished technology-focused interface. The project demonstrates how complex product catalogs and commercial experiences can be presented through a fast, organized, and conversion-oriented digital platform.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">Angular, AWS, Node.js, Express.js</p>
        </div>
      );
    },
  },
  {
    id: "dashboard",
    category: "Dashboard",
    title: "Dashboard",
    src: "/Projects/dash.png",
    screenshots: ["/Projects/dash.png"],
    skills: {
      frontend: [PROJECT_SKILLS.angular],
      backend: [PROJECT_SKILLS.springboot, PROJECT_SKILLS.ai],
    },
    live: "https://dash1-mauve.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A powerful management dashboard built to give hotel teams a centralized view of daily operations, guest activity, requests, and essential property data. The platform brings operational workflows into one structured and efficient digital environment.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">Angular, Spring Boot, AI</p>
        </div>
      );
    },
  },
  {
    id: "guest-portal",
    category: "Web Development",
    title: "Guest Portal",
    src: "/Projects/g.p.png",
    screenshots: ["/Projects/g.p.png"],
    skills: {
      frontend: [PROJECT_SKILLS.angular, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.nestjs],
    },
    live: "https://luxury-hotel-guest-portal.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A premium digital guest portal designed to transform the hotel stay into a seamless, connected experience. Guests can access hotel services, explore available amenities, submit requests, and interact with the property through a modern and intuitive interface.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">Angular, Node.js, Nest.js, Tailwind CSS</p>
        </div>
      );
    },
  },
  {
    id: "villa-misk-hotels",
    category: "Web Development",
    title: "Villa Misk Hotels",
    src: "/Projects/villa.png",
    screenshots: ["/Projects/villa.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    live: "https://villamiskhotels.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A refined digital experience created for Villa Misk Hotels, bringing the brand's hospitality offering into a modern and elegant online environment. The experience presents the property's accommodation and services through a polished, intuitive interface designed to strengthen the hotel's digital presence.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">React, TypeScript, Tailwind CSS, Responsive Web Design</p>
        </div>
      );
    },
  },
  {
    id: "cafe-website",
    category: "Web Development",
    title: "Cafe Website",
    src: "/Projects/cafe.png",
    screenshots: ["/Projects/cafe.png"],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    live: "https://cafe-virid-eight.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A modern and visually engaging website created for a café brand, designed to showcase the menu, atmosphere, and overall brand experience through a clean and responsive digital interface.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">HTML, CSS, JavaScript, Responsive Web Design</p>
        </div>
      );
    },
  },
  {
    id: "clothes-shop",
    category: "E-commerce",
    title: "Clothes Shop",
    src: "/Projects/clothes.png",
    screenshots: ["/Projects/clothes.png"],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    live: "https://clothes-shop-flax.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A stylish online shopping experience designed for a fashion brand, combining product presentation, intuitive navigation, and a clean shopping interface to create a seamless digital storefront.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">HTML, CSS, JavaScript, E-Commerce, Responsive Web Design</p>
        </div>
      );
    },
  },
  {
    id: "the-daily-drip",
    category: "Web Development",
    title: "The Daily Drip",
    src: "/Projects/daily.png",
    screenshots: ["/Projects/daily.png"],
    skills: {
      frontend: [PROJECT_SKILLS.angular, PROJECT_SKILLS.ts],
      backend: [],
    },
    live: "https://the-daily-drip-caf-website.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A polished digital experience designed for a modern café brand, combining strong visual presentation with intuitive navigation and responsive layouts to create an engaging online presence.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">Angular, TypeScript, Responsive Web Design</p>
        </div>
      );
    },
  },
  {
    id: "voya-travel",
    category: "Web Development",
    title: "Voya Travel",
    src: "/Projects/voya.png",
    screenshots: ["/Projects/voya.png"],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    live: "https://voya-travel-website.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A modern travel platform concept designed around flight discovery and travel experiences. The interface focuses on clear information architecture, immersive visuals, and a smooth user journey across the platform.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">HTML, CSS, JavaScript, Responsive Web Design, GSAP</p>
        </div>
      );
    },
  },
];
export default projects;
