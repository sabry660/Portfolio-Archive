"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { siteConfig } from "@/lib/data";
import { SparkleIcon } from "./Icons";

const EASE = [0.65, 0, 0.35, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-28 md:px-10 md:pt-32"
    >
      <motion.div style={{ y, opacity }}>
        {/* giant condensed headline spanning the full width */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: EASE, delay: 1.3 }}
            className="display text-center text-[15vw] leading-[0.95] md:text-[13vw]"
          >
            Hi, I&apos;m Mohamed
          </motion.h1>
        </div>

        <div className="relative mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-8 md:flex-row">
          {/* left — small uppercase tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.9 }}
            className="max-w-[280px] text-[11px] font-semibold uppercase leading-[1.9] tracking-[0.18em] text-foreground/80 max-md:text-center"
          >
            A Front-end Developer passionate about crafting bold and memorable
            Web Applications{" "}
            <SparkleIcon className="inline-block h-auto w-[1.1em] align-[-0.2em]" />
          </motion.p>

          {/* right — Download CV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 2.05 }}
          >
            <a
              href={siteConfig.resume}
              download="frontend2.pdf"
              className="grad-pill inline-block rounded-full px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="label mt-14 text-center"
        >
          {siteConfig.role} — {siteConfig.location} · scroll ↓
        </motion.p>
      </motion.div>
    </section>
  );
}
