import React from 'react';
import {HERO_CONTENT} from "../constants"
import aman_img from "../assets/aman_img.jpeg"
import { motion } from "motion/react"

const container = (delay) =>({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  },
})


const Main = () => {
  return (
    <div className='border-b border-neutral-800/50 pb-8 lg:mb-36 min-h-screen flex items-center'>
      <div className="flex flex-wrap justify-center lg:justify-between items-center w-full">
        <div className="pt-16 w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-4 lg:px-16">
            {/* Enhanced greeting with subtle animation */}
            <motion.div
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className="mb-4"
            >
              <span className="text-lg font-light text-neutral-400 tracking-wide">
                Hello, I'm
              </span>
            </motion.div>
            
            <motion.h1 
              variants={container(0.2)}
              initial='hidden'
              animate='visible'
              className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-6 leading-tight'>
              <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                Aman Singh
              </span>
            </motion.h1>
            
            <motion.div 
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className='mb-8'
            >
              <span className='bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide text-transparent'>
                Full Stack Developer
              </span>
              <div className="h-1 w-32 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full mt-2 mx-auto lg:mx-0"></div>
            </motion.div>
            
            <motion.p 
              variants={container(0.8)}
              initial='hidden'
              animate='visible'
              className='text-base sm:text-lg max-w-xl py-6 font-light tracking-wide text-neutral-300 leading-relaxed text-center lg:text-left'>
              {HERO_CONTENT}
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div
              variants={container(1.1)}
              initial='hidden'
              animate='visible'
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                View My Work
              </button>
              <button className="px-8 py-3 border border-neutral-600 text-neutral-300 rounded-full font-medium hover:border-neutral-500 hover:text-white hover:bg-neutral-800/50 transition-all duration-300">
                Get In Touch
              </button>
            </motion.div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 p-4 mt-8 lg:mt-0">
          <div className="flex justify-center">
            <motion.div
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 1, delay: 1.2}}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-2xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
              
              <img 
                src={aman_img} 
                alt="Aman Singh" 
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-gradient-to-r from-purple-500 to-pink-500 shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
