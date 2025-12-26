import React from 'react';
import { motion } from 'motion/react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiPython } from 'react-icons/si';
import { FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const Tech = () => {
  const technologies = [
    { icon: FaHtml5, key: 'html', name: 'HTML5', color: '#E34F26', glow: 'shadow-orange-500/30' },
    { icon: FaCss3Alt, key: 'css', name: 'CSS3', color: '#1572B6', glow: 'shadow-blue-500/30' },
    { icon: FaJs, key: 'js', name: 'JavaScript', color: '#F7DF1E', glow: 'shadow-yellow-500/30' },
    { icon: RiReactjsLine, key: 'react', name: 'React', color: '#61DAFB', glow: 'shadow-cyan-400/30' },
    { icon: TbBrandNextjs, key: 'nextjs', name: 'Next.js', color: '#FFFFFF', glow: 'shadow-white/20' },
    { icon: SiMongodb, key: 'mongodb', name: 'MongoDB', color: '#47A248', glow: 'shadow-green-500/30' },
    { icon: FaNodeJs, key: 'nodejs', name: 'Node.js', color: '#339933', glow: 'shadow-green-400/30' },
    { icon: SiPython, key: 'python', name: 'Python', color: '#3776AB', glow: 'shadow-blue-400/30' },
  ];

  const additionalSkills = [
    { name: 'Flask', color: 'from-gray-400 to-gray-500' },
    { name: 'MySQL', color: 'from-cyan-400 to-blue-400' },
    { name: 'Git', color: 'from-orange-400 to-red-400' },
    { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-400' },
    { name: 'AI/ML', color: 'from-amber-400 to-orange-400' },
    { name: 'Data Analytics', color: 'from-orange-400 to-amber-400' },
    { name: 'REST APIs', color: 'from-amber-400 to-yellow-400' },
    { name: 'TypeScript', color: 'from-blue-500 to-cyan-400' },
  ];

  return (
    <div id="tech" className='border-b border-cyan-500/10 pb-20 pt-20'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className='mb-20 text-center text-4xl lg:text-5xl font-bold'>
        <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
          Technologies
        </span>
      </motion.h2>

      {/* Main Tech Grid with 3D floating effect */}
      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 max-w-5xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.key}
            className={`group relative flex flex-col items-center justify-center rounded-2xl p-6 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 cursor-pointer`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            whileHover={{
              scale: 1.15,
              y: -15,
              rotateX: 10,
              rotateY: -10,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              type: "spring",
              stiffness: 300
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Glass background */}
            <div className="absolute inset-0 bg-[#0b1528]/70 backdrop-blur-xl rounded-2xl border border-cyan-400/20 group-hover:border-amber-400/50 transition-all duration-300"></div>

            {/* Colored glow on hover */}
            <div
              className={`absolute -inset-2 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`}
              style={{ backgroundColor: tech.color + '20' }}
            ></div>

            {/* Icon */}
            <div className="relative mb-2 group-hover:scale-110 transition-transform duration-300">
              <tech.icon
                className="text-4xl lg:text-5xl transition-all duration-300"
                style={{ color: tech.color }}
              />
            </div>

            {/* Name */}
            <span className="relative text-xs lg:text-sm font-medium text-cyan-300/70 group-hover:text-white transition-colors duration-300">
              {tech.name}
            </span>

            {/* Neon bottom border */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full group-hover:w-3/4 transition-all duration-500"
              style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }}
            ></div>

            {/* Corner sparkle */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-amber-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-star-twinkle transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills with gradient tags */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <h3 className="text-xl lg:text-2xl font-light mb-8 text-cyan-300/70">
          Additional Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {additionalSkills.map((skill, index) => (
            <motion.span
              key={skill.name}
              className="group relative px-5 py-2.5 rounded-full cursor-default overflow-hidden"
              whileHover={{ scale: 1.1, y: -3 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-[#0b1528]/70 backdrop-blur-xl rounded-full border border-cyan-400/20 group-hover:border-amber-400/50 transition-all duration-300"></div>

              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full`}></div>

              <span className="relative text-sm font-medium text-cyan-300/70 group-hover:text-white transition-all duration-300">
                {skill.name}
              </span>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Tech;
