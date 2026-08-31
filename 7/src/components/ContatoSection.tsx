'use client'

import { motion } from 'framer-motion'
import { translations } from '@/i18n'

const t = translations.contato

export default function ContatoSection() {
  return (
    <section
      id="contato"
      className="relative w-full bg-[#080808] overflow-hidden py-20 md:py-32 px-8 md:px-16 lg:px-24"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-xs font-mono tracking-[0.3em] uppercase mb-6"
        >
          {t.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-zinc-500 text-lg leading-relaxed mb-12"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-sm">Phone:</span>
            <a
              href="https://wa.me/201201289813"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
            >
              +20 120 128 9813
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-sm">Email:</span>
            <a
              href="mailto:engmohamedsabry925@gmail.com"
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
            >
              engmohamedsabry925@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-sm">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/mohamed-sabry/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
            >
              Mohamed Sabry
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-sm">GitHub:</span>
            <a
              href="https://github.com/sabry660"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
            >
              sabry660
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  )
}
