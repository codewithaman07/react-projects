import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const Footer = () => {
  return (
    <motion.footer
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-neutral-900/80 text-neutral-400 py-12 border-t border-neutral-800/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aman Singh
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative digital solutions and bringing ideas to life through code.
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-medium text-neutral-300 mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a
                href="https://github.com/codewithaman07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://linkedin.com/in/codewithaman07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800/50 hover:bg-blue-500/20 text-neutral-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/np.random/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800/50 hover:bg-pink-500/20 text-neutral-400 hover:text-pink-400 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
            
            <div className="flex justify-center md:justify-end gap-3">
              <a
                href="https://leetcode.com/u/codewithaman07/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800/50 hover:bg-yellow-500/20 text-neutral-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
              >
                <SiLeetcode className="text-sm" />
              </a>
              <a
                href="https://www.codechef.com/users/aman_nsut"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800/50 hover:bg-orange-500/20 text-neutral-400 hover:text-orange-400 transition-all duration-300 hover:scale-110"
              >
                <SiCodechef className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-800/50 gap-4">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span>&copy; {new Date().getFullYear()} Aman Singh. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>and</span>
            <FaCode className="text-cyan-400" />
            <span>by Aman</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-8 bg-gradient-to-t from-purple-600/50 to-transparent rounded-full"></div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
