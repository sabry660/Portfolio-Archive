"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent px-8 md:px-16 lg:px-24">
      {/* Gradient mask — text readability on desktop, lighter on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-transparent pointer-events-none md:from-[#0a0a0a] md:via-[#0a0a0a]/90" />
      {/* Extra overlay for mobile where the black hole sits centered behind text */}
      <div className="absolute inset-0 bg-[#0a0a0a]/50 pointer-events-none md:hidden" />

      {/* Text content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="max-w-xl">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="text-indigo-400 text-xs font-mono tracking-[0.3em] uppercase mb-4"
              >
                Hi, I'm
              </motion.p>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3"
              >
                Mohamed Sabry
              </motion.h1>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
                className="text-xl md:text-2xl text-zinc-300 font-light mb-6"
              >
                Front end developer
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.3}
                className="text-zinc-400 text-base leading-relaxed mb-10"
              >
                I turn ideas into digital products — from robust backend to mobile apps, focused on real experience and results for your business.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.4}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#projetos"
                  className="px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-full transition-colors duration-200"
                >
                  View Projects
                </a>
                <a
                  href="https://wa.me/201201289813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white text-sm font-medium rounded-full transition-colors duration-200"
                >
                  +20 120 128 9813
                </a>
              </motion.div>
            </div>
          </div>
          {/* flex row */}
        </div>
        {/* max-w-5xl */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 text-[10px] font-mono tracking-[0.25em] uppercase">
          scroll
        </span>
        <div
          className="scroll-pulse-line w-px h-8 bg-zinc-700 origin-top"
          style={{ animation: 'scroll-pulse 1.4s ease-in-out infinite', willChange: 'transform' }}
        />
      </motion.div>
    </section>
  );
}
