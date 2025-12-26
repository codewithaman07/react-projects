import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaCode, FaRocket } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/codewithaman07', label: 'GitHub', gradient: 'from-gray-400 to-white' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/codewithaman07', label: 'LinkedIn', gradient: 'from-cyan-400 to-blue-500' },
    { icon: FaInstagram, url: 'https://www.instagram.com/np.random/', label: 'Instagram', gradient: 'from-pink-400 to-rose-500' },
  ];

  const codingProfiles = [
    { icon: SiLeetcode, url: 'https://leetcode.com/u/codewithaman07/', label: 'LeetCode', gradient: 'from-amber-400 to-orange-500' },
    { icon: SiCodechef, url: 'https://www.codechef.com/users/aman_nsut', label: 'CodeChef', gradient: 'from-orange-400 to-red-500' },
  ];

  return (
    <motion.footer
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="relative w-full bg-[#050a14] text-cyan-200/60 py-16 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/5 via-amber-900/5 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

      {/* Floating star particles */}
      <div className="absolute top-10 left-1/4 w-1.5 h-1.5 bg-amber-300/30 rounded-full animate-star-twinkle"></div>
      <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-star-twinkle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-16 right-1/4 w-1 h-1 bg-orange-400/30 rounded-full animate-star-twinkle" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <motion.div
              className="flex items-center gap-2 justify-center md:justify-start mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <FaRocket className="text-cyan-400 animate-pulse" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                Aman Singh
              </h3>
              <HiSparkles className="text-amber-300 animate-pulse" />
            </motion.div>
            <p className="text-sm text-cyan-300/50 leading-relaxed max-w-sm mx-auto md:mx-0">
              Full Stack Developer passionate about creating innovative digital solutions and bringing ideas to life through code.
            </p>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-medium text-cyan-200/80 mb-6">Connect With Me</h4>

            {/* Main Social Links */}
            <div className="flex justify-center md:justify-end gap-3 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl overflow-hidden"
                  whileHover={{ y: -5, scale: 1.1 }}
                  title={social.label}
                >
                  {/* Background */}
                  <div className="absolute inset-0 bg-[#0b1528]/70 backdrop-blur-xl border border-cyan-400/20 rounded-xl group-hover:border-amber-400/50 transition-all duration-300"></div>

                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                  <social.icon className="relative w-5 h-5 text-cyan-300/60 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Coding Profiles */}
            <div className="flex justify-center md:justify-end gap-3">
              {codingProfiles.map((profile) => (
                <motion.a
                  key={profile.label}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2.5 rounded-xl overflow-hidden"
                  whileHover={{ y: -5, scale: 1.1 }}
                  title={profile.label}
                >
                  {/* Background */}
                  <div className="absolute inset-0 bg-[#0b1528]/70 backdrop-blur-xl border border-cyan-400/20 rounded-xl group-hover:border-amber-400/50 transition-all duration-300"></div>

                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${profile.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                  <profile.icon className="relative w-4 h-4 text-cyan-300/60 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          {/* Border with gradient */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>

          <div className="text-sm text-cyan-400/50">
            <span>&copy; {new Date().getFullYear()} Aman Singh. All rights reserved.</span>
          </div>

          <motion.div
            className="flex items-center gap-2 text-sm text-cyan-400/50"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <FaHeart className="text-rose-500 animate-pulse" />
            <span>and</span>
            <FaCode className="text-cyan-400" />
            <span>by</span>
            <span className="bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 bg-clip-text text-transparent font-medium">
              Aman
            </span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
