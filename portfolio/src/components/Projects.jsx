import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'motion/react'

const Projects = () => {
  return (
    <div className='border-b border-neutral-800/50 pb-20 pt-20'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className='mb-20 text-center text-4xl lg:text-5xl font-light'>
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="group relative bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 rounded-2xl overflow-hidden border border-neutral-700/30 hover:border-purple-500/30 transition-all duration-500 hover:scale-105"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.1 }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                alt={project.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating elements on hover */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className='text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300'>
                {project.title}
              </h3>
              
              <p className='text-neutral-400 leading-relaxed text-sm'>
                {project.description}
              </p>
              
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className='px-3 py-1 text-xs font-medium bg-gradient-to-r from-neutral-800 to-neutral-700 text-neutral-300 rounded-full border border-neutral-600/50 hover:border-purple-500/50 hover:text-white transition-all duration-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3 pt-4 border-t border-neutral-700/50">
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white text-sm rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 font-medium">
                  View Project
                </button>
                <button className="px-4 py-2 border border-neutral-600 text-neutral-300 text-sm rounded-lg hover:border-neutral-500 hover:text-white hover:bg-neutral-800/50 transition-all duration-300">
                  Code
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>  
    </div>
  )
}

export default Projects
