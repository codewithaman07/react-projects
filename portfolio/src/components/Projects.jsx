import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'motion/react'
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const Projects = () => {
  return (
    <div id="projects" className='border-b border-cyan-500/10 pb-20 pt-20'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className='mb-20 text-center text-4xl lg:text-5xl font-bold'>
        <span className="bg-gradient-to-r from-cyan-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl overflow-hidden card-3d"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.1 }}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Glass background */}
            <div className="absolute inset-0 bg-[#0b1528]/70 backdrop-blur-xl border border-cyan-400/20 rounded-2xl group-hover:border-amber-400/50 transition-all duration-500"></div>

            {/* Gradient glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-amber-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                className='w-full h-52 object-cover group-hover:scale-110 transition-all duration-700'
                alt={project.title}
              />

              {/* Overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1528] via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 to-amber-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating action buttons on hover */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <motion.button
                  className="p-4 bg-gradient-to-r from-cyan-400 to-amber-400 text-[#0b1528] rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </motion.button>
                <motion.button
                  className="p-4 bg-[#0b1528]/80 backdrop-blur-xl text-white rounded-full border border-cyan-400/50 hover:border-amber-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Project number badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500/80 to-amber-500/80 backdrop-blur-sm rounded-full text-xs font-bold text-[#0b1528] shadow-lg">
                0{index + 1}
              </div>

              {/* Sparkle effect */}
              <HiSparkles className="absolute top-4 right-4 w-5 h-5 text-amber-300 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
            </div>

            {/* Project Content */}
            <div className="relative p-6 space-y-4">
              <h3 className='text-xl font-semibold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-amber-300 group-hover:to-orange-300 transition-all duration-500'>
                {project.title}
              </h3>

              <p className='text-cyan-300/60 leading-relaxed text-sm group-hover:text-cyan-200/80 transition-colors'>
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-3 py-1 text-xs font-medium bg-[#162544]/50 text-cyan-300/70 rounded-full border border-cyan-400/20 hover:border-amber-400/50 hover:text-amber-300 hover:bg-amber-500/10 transition-all duration-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3 pt-4 border-t border-cyan-400/20">
                <motion.button
                  className="flex-1 relative px-4 py-2.5 rounded-xl overflow-hidden group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 animate-gradient-shift"></div>
                  <span className="relative text-[#0b1528] text-sm font-bold flex items-center justify-center gap-2">
                    <FaExternalLinkAlt className="w-3 h-3" />
                    View Project
                    <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                <motion.button
                  className="px-4 py-2.5 border border-cyan-400/50 text-cyan-300 text-sm rounded-xl hover:border-amber-400 hover:text-amber-300 hover:bg-amber-500/10 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="w-4 h-4" />
                  Code
                </motion.button>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
