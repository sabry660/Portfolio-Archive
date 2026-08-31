import {useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {projects} from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const projectRefs = useRef([]);

    useGSAP(() => {
        const projectElements = projectRefs.current.filter(ref => ref !== null);

        projectElements.forEach((project, index) => {
            gsap.fromTo(
                project,
                {
                    y: 50,
                    opacity: 0,
                }, {
                    y:0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: project,
                        start: "top bottom-=100",
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 1.5,
            }
        )
    })

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*LEFT - Featured Project */}
                    <div className="first-project-wrapper" ref={(el) => projectRefs.current[0] = el}>
                        <div className="image-wrapper">
                            <img src={projects[0].image} alt={projects[0].name}/>
                        </div>
                        <div className="text-content">
                            <h2>{projects[0].name}</h2>
                            <p className="text-white-50 md:text-xl text-sm">
                                {projects[0].description}
                            </p>
                            <p className="text-white-50 md:text-xl text-sm mt-2">
                                <strong>Technologies:</strong> {projects[0].technologies}
                            </p>
                            <a href={projects[0].liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
                                View Live Demo
                            </a>
                        </div>
                    </div>

                    {/*RIGHT - Project List */}
                    <div className="project-list-wrapper overflow-hidden">
                        {projects.slice(1).map((project, index) => (
                            <div 
                                key={project.id} 
                                className="project" 
                                ref={(el) => projectRefs.current[index + 1] = el}
                            >
                                <div className="image-wrapper bg-[#f3d4d0]">
                                    <img src={project.image} alt={project.name}/>
                                </div>
                                <h2>{project.name}</h2>
                                <p className="text-white-50 md:text-sm text-xs mt-2">{project.technologies}</p>
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 md:text-sm text-xs mt-2 inline-block">
                                    View Live Demo
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
