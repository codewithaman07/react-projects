import React from 'react';
import { motion } from 'motion/react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const Tech = () => {
  const technologies = [
    { 
      icon: <FaHtml5 className='text-4xl lg:text-5xl text-orange-500' />, 
      key: 'html',
      name: 'HTML5',
      color: 'from-orange-500/20 to-red-500/20',
      hoverColor: 'hover:border-orange-500/50'
    },
    { 
      icon: <FaCss3Alt className='text-4xl lg:text-5xl text-blue-500' />, 
      key: 'css',
      name: 'CSS3',
      color: 'from-blue-500/20 to-cyan-500/20',
      hoverColor: 'hover:border-blue-500/50'
    },
    { 
      icon: <FaJs className='text-4xl lg:text-5xl text-yellow-500' />, 
      key: 'js',
      name: 'JavaScript',
      color: 'from-yellow-500/20 to-orange-500/20',
      hoverColor: 'hover:border-yellow-500/50'
    },
    { 
      icon: <RiReactjsLine className='text-4xl lg:text-5xl text-cyan-400' />, 
      key: 'react',
      name: 'React',
      color: 'from-cyan-400/20 to-blue-400/20',
      hoverColor: 'hover:border-cyan-400/50'
    },
    { 
      icon: <TbBrandNextjs className='text-4xl lg:text-5xl text-white' />, 
      key: 'nextjs',
      name: 'Next.js',
      color: 'from-neutral-300/20 to-neutral-500/20',
      hoverColor: 'hover:border-neutral-300/50'
    },
    { 
      icon: <SiMongodb className='text-4xl lg:text-5xl text-green-400' />, 
      key: 'mongodb',
      name: 'MongoDB',
      color: 'from-green-400/20 to-emerald-400/20',
      hoverColor: 'hover:border-green-400/50'
    },
    { 
      icon: <FaNodeJs className='text-4xl lg:text-5xl text-green-500' />, 
      key: 'nodejs',
      name: 'Node.js',
      color: 'from-green-500/20 to-lime-500/20',
      hoverColor: 'hover:border-green-500/50'
    }
  ];

  return (
    <div className='border-b border-neutral-800/50 pb-20 pt-20'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className='mb-20 text-center text-4xl lg:text-5xl font-light'>
        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          Technologies
        </span>
      </motion.h2>
      
      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.key}
            className={`group relative flex flex-col items-center justify-center rounded-2xl border-2 border-neutral-700/50 ${tech.hoverColor} p-6 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-gradient-to-br ${tech.color} backdrop-blur-sm hover:scale-110 transition-all duration-500 cursor-pointer`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              y: [0, -8, 0] 
            }}
            transition={{
              duration: 2.5, 
              repeat: Infinity,  
              ease: "easeInOut",  
              delay: index * 0.2  
            }}
          >
            <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
              {tech.icon}
            </div>
            <span className="text-xs lg:text-sm font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">
              {tech.name}
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 rounded-2xl blur-xl transition-all duration-500"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
            <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h3 className="text-xl lg:text-2xl font-light mb-6 text-neutral-300">
          Additional Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {['Python', 'Flask', 'MySQL', 'Git', 'Tailwind CSS', 'AI/ML', 'Data Analytics'].map((skill, index) => (
            <motion.span
              key={skill}
              className="px-4 py-2 bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 text-sm text-neutral-300 rounded-full border border-neutral-600/30 hover:border-purple-500/50 hover:text-white transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Tech;
