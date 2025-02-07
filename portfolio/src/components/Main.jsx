import React from 'react';
import {HERO_CONTENT} from "../constants"
import pic from "../assets/kevinRushProfile.png"
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
    <div className='border-b border-neutral-900 pb-8 lg:mb-36'>
      <div className="flex flex-wrap justify-center lg:justify-start">
        <div className="pt-16 w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-4 lg:px-16">
            <motion.h1 
              variants={container(0)}
              initial='hidden'
              animate='visible'

              className='text-5xl sm:text-4xl md:text-7xl font-light text-white tracking-wide mb-10'>
              Aman Singh
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-5xl tracking-wide text-transparent text-center'>
              Full Stack Developer
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className='my-2 max-w-xl py-6 font-light tracking-wide'>{HERO_CONTENT}
              </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <div className="flex justify-center">
            <motion.img 
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 1, delay: 1.2}}
              src={pic} alt="pic" className="w-auto h-auto max-w-full max-h-full"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
