import React from 'react';
import { motion } from 'motion/react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className='my-20 text-center text-4xl'>
        Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {[ 
          { icon: <FaHtml5 className='text-5xl text-orange-600' />, key: 'html' },
          { icon: <FaCss3Alt className='text-5xl text-blue-600' />, key: 'css' },
          { icon: <FaJs className='text-5xl text-yellow-600' />, key: 'js' },
          { icon: <RiReactjsLine className='text-5xl text-cyan-400' />, key: 'react' },
          { icon: <TbBrandNextjs className='text-5xl text-black-800' />, key: 'nextjs' },
          { icon: <SiMongodb className='text-5xl text-green-400' />, key: 'mongodb' },
          { icon: <FaNodeJs className='text-5xl text-green-600' />, key: 'nodejs' }
        ].map((tech, index) => (
          <motion.div
            key={tech.key}
            className="flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-8 w-32 h-32 md:w-40 md:h-40"
            animate={{
              y: [0, -10, 0] 
            }}
            transition={{
              duration: 2, 
              repeat: Infinity,  
              ease: "easeInOut",  
              delay: index * 0.2  
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Tech;
