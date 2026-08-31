'use client'

import { motion } from 'framer-motion'
import { SiAngular, SiNestjs, SiStripe, SiPython, SiDjango, SiNodedotjs, SiExpress, SiSpring, SiTailwindcss, SiHtml5, SiJavascript, SiTypescript, SiReact, SiNextdotjs } from 'react-icons/si'
import { TbDeviceMobile, TbTag, TbRobot, TbLock } from 'react-icons/tb'
import type { IconType } from 'react-icons'
import { translations } from '@/i18n'
import type { Project } from '@/i18n'

const tagMeta: Record<string, { icon: IconType; color: string }> = {
  'Angular':       { icon: SiAngular,      color: '#dd0031' },
  'Nestjs':        { icon: SiNestjs,       color: '#e0234e' },
  'Stripe':        { icon: SiStripe,       color: '#635bff' },
  'Python':        { icon: SiPython,       color: '#3776ab' },
  'Django':        { icon: SiDjango,       color: '#092e20' },
  'AWS':           { icon: TbRobot,        color: '#ff9900' },
  'Node.js':       { icon: SiNodedotjs,    color: '#339933' },
  'Express.js':    { icon: SiExpress,      color: '#000000' },
  'Spring Boot':   { icon: SiSpring,       color: '#6db33f' },
  'AI':            { icon: TbRobot,        color: '#c084fc' },
  'Tailwind CSS':  { icon: SiTailwindcss,  color: '#06b6d4' },
  'HTML':          { icon: SiHtml5,        color: '#e34f26' },
  'CSS':           { icon: TbTag,         color: '#1572b6' },
  'JavaScript':    { icon: SiJavascript,   color: '#f7df1e' },
  'TypeScript':    { icon: SiTypescript,   color: '#3178c6' },
  'E-Commerce':    { icon: TbTag,          color: '#818cf8' },
  'Responsive Web Design': { icon: TbDeviceMobile, color: '#06b6d4' },
  'GSAP':          { icon: TbRobot,        color: '#88ce02' },
  'React':         { icon: SiReact,        color: '#61dafb' },
  'Next.js':       { icon: SiNextdotjs,    color: '#ffffff' },
}

const t = translations.projects

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-20 md:py-28 px-8 md:px-16 lg:px-24"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[480px] h-[320px] rounded-full opacity-10 blur-[100px]"
        style={{ background: 'radial-gradient(ellipse, #6366f1 0%, #06b6d4 100%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 52 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="relative max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-indigo-400 text-xs font-mono tracking-[0.3em] uppercase mb-4"
        >
          {t.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.04 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-500 text-base md:text-lg max-w-3xl mb-12"
        >
          {t.subtitle}
        </motion.p>

        <div className="flex flex-col gap-16">
          {t.items.map((project: Project, i: number) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const hasImage = Boolean(project.image)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        {/* Image */}
        {hasImage ? (
          <div
            className={`relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-500/70 hover:shadow-[0_18px_35px_-22px_rgba(99,102,241,0.95)] ${index % 2 !== 0 ? 'md:order-2' : ''}`}
          >
            <img
              src={project.image!}
              alt={project.name}
              className="w-full h-auto object-cover"
              style={{ minHeight: '200px' }}
            />
          </div>
        ) : (
          <div
            className={`relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video flex flex-col items-center justify-center gap-3 ${index % 2 !== 0 ? 'md:order-2' : ''}`}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{ background: 'radial-gradient(ellipse at center, #6366f1 0%, transparent 70%)' }}
            />
            <TbLock size={32} className="text-zinc-600" />
            <span className="text-zinc-600 text-xs font-mono tracking-widest uppercase">Sistema Interno</span>
          </div>
        )}

        {/* Info */}
        <div className={index % 2 !== 0 ? 'md:order-1' : ''}>
          <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
          <p className="text-zinc-400 text-base leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => {
              const meta = tagMeta[tag]
              const Icon = meta?.icon
              return (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-mono text-indigo-300"
                >
                  {Icon && <Icon size={12} color={meta.color} />}
                  {tag}
                </span>
              )
            })}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-200 text-zinc-900 text-sm font-medium rounded-full transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
              </svg>
              {t.visitSite}
            </a>
          )}
        </div>
      </motion.div>
    </>
  )
}
