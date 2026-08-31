import Image from "next/image";
import bg from "../../public/background/home-background.png";
import aboutBg from "../../public/background/about-background.png";
import projectsBg from "../../public/background/projects-background.png";
import contactBg from "../../public/background/contact-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import HomeBtn from "@/components/HomeBtn";
import Wizard from "@/components/models/WizardClient";
import HatModel from "@/components/models/HatModelClient";
import Staff from "@/components/models/StaffClient";
import AboutDetails from "@/components/about";
import ProjectList from "@/components/projects";
import { projectsData } from "./data";
import Form from "@/components/contact/Form";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between relative">
      {/* Home Section */}
      <section id="home" className="flex min-h-screen flex-col items-center justify-between relative w-full">
        <Image
          priority
          sizes="100vw"
          src={bg}
          alt="background-image"
          fill
          className="-z-50 w-full h-full object-cover object-center opacity-50"
        />

        <div className="w-full h-screen">
          <Navigation />
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full min-h-screen">
        <Image
          src={aboutBg}
          priority
          sizes="100vw"
          alt="About page background image"
          className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        />
        <HomeBtn />

        <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
          <RenderModel>
            <HatModel />
          </RenderModel>
        </div>

        <div className="relative w-full h-screen flex flex-col items-center justify-center">
          <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
            <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
              Mohamed Sabry
            </h1>
            <p className="font-light text-foreground text-lg">
              Meet the front-end developer behind this portfolio
            </p>
          </div>
        </div>

        <AboutDetails />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative w-full min-h-screen">
        <Image
          src={projectsBg}
          alt="Projects page background image"
          className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
          priority
          sizes="100vw"
        />
        <HomeBtn />

        <ProjectList projects={projectsData} />

        <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
          <RenderModel>
            <Staff />
          </RenderModel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative w-full min-h-screen">
        <Image
          src={contactBg}
          alt="Contact page background image"
          priority
          sizes="100vw"
          className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        />
        <HomeBtn />

        <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
          <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
            <h1 className="text-accent font-semibold text-center text-4xl capitalize">
              Get in Touch
            </h1>
            <p className="text-center font-light text-sm xs:text-base">
              Step into the circle of collaboration and weave your ideas into the
              fabric of innovation. Whether you seek to conjure projects,
              unlock opportunities, or simply share tales of adventure, your messages
              are treasured within this realm. Use the form below to send
              your messages through the digital network, and await a response.
            </p>
          </div>
          <Form />
        </article>
      </section>
    </main>
  );
}
