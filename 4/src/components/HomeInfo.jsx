import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import arrow from "../assets/icons/arrow.svg";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

const HomeInfo = ({ currentStage }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="absolute inset-0 flex items-center justify-center px-4 py-12"
      style={{ background: "rgba(245, 245, 245, 0.85)", backdropFilter: "blur(8px)" }}
    >
      {currentStage === 1 && (
        <motion.div className='info-box text-center p-6' layoutId="infoBox" style={{ background: "rgba(14, 116, 144, 0.9)", borderRadius: '14px' }}>
          <h1 className='text-xl md:text-3xl font-semibold text-white'>
            Hi, I am <span className='font-bold text-yellow-300'>Mohamed Sabry</span> 👋
          </h1>
          <p className='mt-2 text-base md:text-lg text-slate-100 font-medium'>
            Front End Developer crafting modern & intuitive digital web experiences.
          </p>
          <p className='text-xs text-slate-200 mt-1 italic'>Drag the island to explore!</p>
        </motion.div>
      )}

      {currentStage === 2 && (
        <motion.div className='info-box text-center p-6' layoutId="infoBox" style={{ background: "rgba(0, 102, 204, 0.9)", borderRadius: '14px' }}>
          <p className='text-lg md:text-xl font-medium text-white'>
            Proficient in React, Angular, Next.js, TypeScript & modern UI design systems.
          </p>
          <Link to='/about' className='mt-4 bg-white hover:bg-slate-100 text-blue-600 rounded-full py-2.5 px-6 inline-flex items-center font-semibold text-sm transition-all shadow-md'>
            Learn more about me
            <img src={arrow} alt='arrow' className='ml-2 w-4 h-4' />
          </Link>
        </motion.div>
      )}

      {currentStage === 3 && (
        <motion.div className='info-box text-center p-6' layoutId="infoBox" style={{ background: "rgba(16, 185, 129, 0.9)", borderRadius: '14px' }}>
          <p className='text-lg md:text-xl font-medium text-white'>
            Led and delivered high-impact client platforms and web applications.
          </p>
          <Link to='/projects' className='mt-4 bg-white hover:bg-slate-100 text-emerald-600 rounded-full py-2.5 px-6 inline-flex items-center font-semibold text-sm transition-all shadow-md'>
            Visit my portfolio
            <img src={arrow} alt='arrow' className='ml-2 w-4 h-4' />
          </Link>
        </motion.div>
      )}

      {currentStage === 4 && (
        <motion.div className='info-box text-center p-6' layoutId="infoBox" style={{ background: "rgba(225, 29, 72, 0.9)", borderRadius: '14px' }}>
          <p className='text-lg md:text-xl font-medium text-white'>
            Need a Front End Developer or have a project in mind? Let's build together!
          </p>
          <Link to='/contact' className='mt-4 bg-white hover:bg-slate-100 text-rose-600 rounded-full py-2.5 px-6 inline-flex items-center font-semibold text-sm transition-all shadow-md'>
            Get in touch
            <img src={arrow} alt='arrow' className='ml-2 w-4 h-4' />
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HomeInfo;
