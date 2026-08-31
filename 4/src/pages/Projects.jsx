import React from 'react';
import { projects } from '../constants';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-600 leading-relaxed text-base'>
        <p>
          Here is a collection of key projects I have crafted as a <strong>Front End Developer</strong>. 
          Each project represents my passion for building intuitive user interfaces, fast web applications, and seamless interactive experiences.
        </p>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-16'>
        {projects.map((project) => {
          const techList = project.technologies 
            ? project.technologies.split(',').map((tech) => tech.trim())
            : [];

          return (
            <div 
              key={project.id || project.name}
              className='bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group'
            >
              {/* Project Image Header */}
              <div className='relative w-full h-56 bg-slate-100 overflow-hidden border-b border-slate-100'>
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>

              {/* Project Content */}
              <div className='p-6 flex-1 flex flex-col justify-between'>
                <div>
                  <h3 className='text-2xl font-poppins font-semibold text-slate-900 group-hover:text-blue-600 transition-colors'>
                    {project.name}
                  </h3>

                  {/* Tech Stack Badges */}
                  <div className='flex flex-wrap gap-2 mt-3 mb-4'>
                    {techList.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className='bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-full text-xs border border-blue-200/60'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className='text-slate-600 text-sm leading-relaxed'>
                    {project.description}
                  </p>
                </div>

                {/* Live Demo Link */}
                <div className='mt-6 pt-4 border-t border-slate-100 flex items-center justify-between'>
                  <a 
                    href={project.liveDemo || project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 transition-colors font-poppins text-sm group/link'
                  >
                    <span>Live Demo</span>
                    <img 
                      src={arrow} 
                      alt='arrow'
                      className='w-4 h-4 object-contain group-hover/link:translate-x-1 transition-transform'
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <hr className='border-slate-200 my-8'/>
      <CTA />
    </section>
  );
};

export default Projects;