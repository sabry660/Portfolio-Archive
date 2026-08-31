'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { translations } from '@/i18n'

const t = translations.header
const navSectionHrefs = ['#stack', '#ferramentas', '#projetos', '#empresa', '#contato'] as const

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredHref, setHoveredHref] = useState<string | null>(null)

  const navLinks = [
    { label: t.stack, href: navSectionHrefs[0] },
    { label: t.experiencia, href: navSectionHrefs[1] },
    { label: t.projetos, href: navSectionHrefs[2] },
    { label: t.empresa, href: navSectionHrefs[3] },
    { label: t.contato, href: navSectionHrefs[4] },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function navigateTo(href: string) {
    const section = document.getElementById(href.replace('#', ''))
    if (!section) {
      return
    }

    const top = section.getBoundingClientRect().top + window.scrollY - 84
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
    setMenuOpen(false)
  }

  function navigateToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setHoveredHref(null)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault()
            navigateToTop()
          }}
          className="flex items-center gap-2.5 group"
        >
          <span className="text-white font-semibold text-sm tracking-wide group-hover:text-indigo-400 transition-colors duration-200">
            Mohamed Sabry
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" onMouseLeave={() => setHoveredHref(null)}>
          {navLinks.map((link) => {
            const isCurrent = hoveredHref === link.href

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault()
                  navigateTo(link.href)
                }}
                onMouseEnter={() => setHoveredHref(link.href)}
                onFocus={() => setHoveredHref(link.href)}
                onBlur={() => setHoveredHref(null)}
                className="relative pb-1 text-sm text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:outline-none"
              >
                {link.label}
                {isCurrent && (
                  <motion.span
                    layoutId="desktop-nav-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-indigo-500 shadow-[0_0_16px_-2px_rgba(99,102,241,0.95)]"
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Open menu"
          >
            <span
              className={`block w-5 h-px bg-zinc-400 transition-all duration-200 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[3px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-zinc-400 transition-all duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-zinc-400 transition-all duration-200 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[3px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-zinc-800/60 px-8 pb-6 pt-2 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault()
                  navigateTo(link.href)
                }}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
