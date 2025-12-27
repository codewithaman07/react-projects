import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";
import { FaCode, FaServer, FaDatabase, FaBrain } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      title: 'Frontend',
      description: 'React, Next.js, Tailwind CSS',
      icon: FaCode,
      gradient: 'from-cyan-400 to-blue-500',
      shadowColor: 'shadow-cyan-500/20'
    },
    {
      title: 'Backend',
      description: 'Node.js, Express.js',
      icon: FaServer,
      gradient: 'from-amber-400 to-orange-500',
      shadowColor: 'shadow-amber-500/20'
    },
    {
      title: 'Database',
      description: 'MySQL, MongoDB, PostgreSQL',
      icon: FaDatabase,
      gradient: 'from-orange-400 to-red-500',
      shadowColor: 'shadow-orange-500/20'
    },
    {
      title: 'AI & ML',
      description: 'Python, Langchain, RAG, Data analysis',
      icon: FaBrain,
      gradient: 'from-cyan-300 to-amber-400',
      shadowColor: 'shadow-cyan-500/20'
    },
  ];

  const stats = [
    { value: '2+', label: 'Years Experience', color: 'from-cyan-400 to-blue-400' },
    { value: '10+', label: 'Projects Completed', color: 'from-amber-400 to-orange-400' },
    { value: '5+', label: 'Technologies', color: 'from-orange-400 to-amber-400' },
  ];

  return (
    <div id="about" className="border-b border-cyan-500/10 pb-20 pt-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mb-20 text-center text-4xl lg:text-5xl font-bold"
      >
        <span className="bg-gradient-to-r from-cyan-300 via-amber-300 to-orange-400 bg-clip-text text-transparent">
          About Me
        </span>
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="w-full"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center">
            {/* About text with glass effect */}
            <motion.div
              className="relative mb-12 p-8 rounded-2xl"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-[#0b1528]/60 backdrop-blur-xl rounded-2xl border border-cyan-400/20"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/5 via-amber-500/10 to-orange-500/5 rounded-2xl blur-xl"></div>
              <p className="relative text-lg leading-relaxed text-cyan-200/80 font-light text-center">
                {ABOUT_TEXT}
              </p>
            </motion.div>

            {/* Skills grid with 3D cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className={`group relative p-6 rounded-2xl overflow-hidden cursor-pointer card-3d`}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, rotateX: 5, rotateY: -5 }}
                >
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-[#0b1528]/70 backdrop-blur-xl border border-cyan-400/20 rounded-2xl"></div>

                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${skill.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}></div>

                  <div className="relative flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.gradient} shadow-lg ${skill.shadowColor}`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-300 group-hover:to-amber-300 transition-all duration-300">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-cyan-300/60 group-hover:text-cyan-200/80 transition-colors">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom border glow */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </motion.div>
              ))}
            </div>

            {/* Stats section */}
            <motion.div
              className="flex flex-wrap justify-center gap-12 pt-8"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group relative"
                  whileHover={{ scale: 1.15, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full`}></div>

                  <div className={`relative text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-cyan-300/60 group-hover:text-cyan-200/80 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
