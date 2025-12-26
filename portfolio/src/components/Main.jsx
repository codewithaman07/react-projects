import React from 'react';
import { HERO_CONTENT } from "../constants"
import aman_img from "../assets/aman_img.jpeg"
import { motion } from "motion/react"
import { FaArrowRight } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
})

const Main = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='border-b border-cyan-500/10 pb-8 lg:mb-36 min-h-screen flex items-center'>
      <div className="flex flex-wrap justify-center lg:justify-between items-center w-full">
        <div className="pt-16 w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-4 lg:px-16">
            {/* Greeting */}
            <motion.div
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className="mb-4 flex items-center gap-2"
            >
              <HiSparkles className="text-amber-300 animate-pulse" />
              <span className="text-lg font-light text-cyan-300/80 tracking-widest uppercase">
                Hello, I'm
              </span>
              <HiSparkles className="text-orange-400 animate-pulse" />
            </motion.div>

            {/* Name with gradient */}
            <motion.h1
              variants={container(0.2)}
              initial='hidden'
              animate='visible'
              className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight'>
              <span className="bg-gradient-to-r from-cyan-300 via-amber-200 to-orange-300 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                Aman Singh
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className='mb-8'
            >
              <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-300'>
                Full Stack Developer
              </span>
              <div className="h-1 w-40 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 rounded-full mt-4 mx-auto lg:mx-0 shadow-lg shadow-cyan-500/50"></div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={container(0.8)}
              initial='hidden'
              animate='visible'
              className='text-base sm:text-lg max-w-xl py-6 font-light tracking-wide text-cyan-200/70 leading-relaxed text-center lg:text-left'>
              {HERO_CONTENT}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={container(1.1)}
              initial='hidden'
              animate='visible'
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-3 rounded-full font-medium overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 animate-gradient-shift"></div>
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <span className="relative text-[#0b1528] font-bold flex items-center gap-2">
                  View My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-cyan-400/50 text-cyan-300 rounded-full font-medium hover:border-amber-400 hover:text-amber-300 hover:bg-amber-500/10 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Profile Image with 3D effects */}
        <div className="w-full lg:w-1/2 p-4 mt-8 lg:mt-0">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="relative animate-float-3d"
            >
              {/* Outer glow rings - Moon glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/20 via-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-amber-500/30 rounded-full blur-2xl"></div>

              {/* Rotating border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 rounded-full animate-spin-slow opacity-30 blur-sm" style={{ animationDuration: '8s' }}></div>

              {/* Image container */}
              <div className="relative p-1 rounded-full bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400">
                <img
                  src={aman_img}
                  alt="Aman Singh"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-[#0b1528] shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating star particles around image */}
              <div className="absolute top-4 right-8 w-3 h-3 bg-amber-300 rounded-full animate-star-twinkle opacity-80"></div>
              <div className="absolute bottom-12 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-star-twinkle" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-orange-400 rounded-full animate-star-twinkle" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/4 -left-2 w-1.5 h-1.5 bg-amber-200 rounded-full animate-star-twinkle" style={{ animationDelay: '1.5s' }}></div>

              {/* Orbit effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-2 h-2 bg-cyan-300 rounded-full animate-orbit opacity-60" style={{ animationDuration: '6s' }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
