import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";
const About = () => {
  return (
    <div className="border-b border-neutral-800/50 pb-20 pt-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mb-20 text-center text-4xl lg:text-5xl font-light"
      >
        About
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Me</span>
      </motion.h2>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="w-full"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center">
            {/* Enhanced text content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-neutral-300 font-light text-center">
                {ABOUT_TEXT}
              </p>
              
              {/* Skills highlight */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 p-4 rounded-xl border border-neutral-700/30 hover:border-purple-500/30 transition-colors duration-300">
                  <h3 className="text-purple-400 font-medium mb-2">Frontend</h3>
                  <p className="text-sm text-neutral-400">React, Next.js, Tailwind CSS</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 p-4 rounded-xl border border-neutral-700/30 hover:border-cyan-500/30 transition-colors duration-300">
                  <h3 className="text-cyan-400 font-medium mb-2">Backend</h3>
                  <p className="text-sm text-neutral-400">Node.js, Express, MongoDB</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 p-4 rounded-xl border border-neutral-700/30 hover:border-pink-500/30 transition-colors duration-300">
                  <h3 className="text-pink-400 font-medium mb-2">Database</h3>
                  <p className="text-sm text-neutral-400">MySQL, MongoDB</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 p-4 rounded-xl border border-neutral-700/30 hover:border-yellow-500/30 transition-colors duration-300">
                  <h3 className="text-yellow-400 font-medium mb-2">AI & ML</h3>
                  <p className="text-sm text-neutral-400">Python, LLM, Data Analytics</p>
                </div>
              </div>
              
              {/* Stats section */}
              <div className="flex flex-wrap gap-8 mt-8 pt-6 border-t border-neutral-800/50">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">2+</div>
                  <div className="text-sm text-neutral-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">10+</div>
                  <div className="text-sm text-neutral-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">5+</div>
                  <div className="text-sm text-neutral-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
