import React from 'react';
import { skills, experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hi, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Mohamed Sabry</span> 👋
      </h1>
      <h2 className='text-xl sm:text-2xl font-medium text-slate-700 mt-2 font-poppins'>
        Front End Developer
      </h2>

      <div className='mt-5 flex flex-col gap-3 text-slate-600 leading-relaxed text-base'>
        <p>
          I am a passionate <strong>Front End Developer</strong> dedicated to designing and building modern, high-performance web platforms and interactive applications.
        </p>
        <p>
          With expertise spanning <strong>React, Angular, Next.js, TypeScript, JavaScript, and Tailwind CSS</strong>, I bridge the gap between creative visual design and robust frontend architecture. I focus on producing clean, accessible, and responsive digital products that deliver real value to users.
        </p>
      </div>

      {/* Skills Section */}
      <div className='py-12 flex flex-col'>
        <h3 className='subhead-text mb-8'>My Skills & Technologies</h3>
        <div className='flex flex-wrap gap-8 justify-start items-center'>
          {skills.map((skill) => (
            <div key={skill.name} className='flex flex-col items-center gap-2 group'>
              <div className='block-container w-16 h-16'>
                <div className='btn-back rounded-xl bg-gradient-to-r from-blue-400 to-indigo-500'/>
                <div className='btn-front rounded-xl flex justify-center items-center bg-white/90 shadow-sm'>
                  <img 
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-8 h-8 object-contain group-hover:scale-110 transition-transform' 
                  />
                </div>
              </div>
              <span className='text-xs font-semibold text-slate-700 font-poppins'>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className='py-12'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-4 flex flex-col gap-3 text-slate-600'>
          <p>
            I have collaborated on a wide spectrum of digital products ranging from e-commerce brands and language learning platforms to storytelling environments and real-time management dashboards. Here is an overview of my professional experience:
          </p>
        </div>
        
        <div className='mt-10 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.title + experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img 
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '4px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  borderRadius: '12px',
                }}
              >
                <div>
                  <h3 className='text-slate-900 text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-blue-600 font-medium font-base' style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-slate-600 font-normal pl-1 text-sm leading-relaxed'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200 my-8'/>

      <CTA />
    </section>
  );
};

export default About;
