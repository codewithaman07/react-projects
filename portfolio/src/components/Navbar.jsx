import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo1.png';
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes, FaCode, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['about', 'tech', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset for better detection
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: FaUser, href: '#about' },
    { id: 'tech', label: 'Skills', icon: FaCode, href: '#tech' },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram, href: '#projects' },
    { id: 'contact', label: 'Contact', icon: FaEnvelope, href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/codewithaman07/', color: 'hover:text-yellow-400' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/codewithaman07', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/codewithaman07/', color: 'hover:text-blue-500' },
    { name: 'CodeChef', icon: SiCodechef, url: 'https://www.codechef.com/users/aman_nsut', color: 'hover:text-orange-400' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/np.random/', color: 'hover:text-pink-400' },
  ];

  const handleNavClick = (href, id, isExternal = false, url = null) => {
    if (isExternal && url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    
    setActiveSection(id);
    setIsOpen(false);
    
    // Find element by ID instead of href
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    
    if (element) {
      const elementTop = element.offsetTop;
      const offset = 120; // Increased offset for better positioning
      
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-800/60 to-neutral-900/80 backdrop-blur-xl rounded-[2rem] border border-neutral-700/30 shadow-2xl"></div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-600/10 rounded-[2rem] animate-pulse"></div>
          
          <div className="relative flex items-center justify-between px-6 py-4">
            
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Aman Singh" 
                  className="w-12 h-12 rounded-[1rem] border-2 border-purple-500/50 shadow-lg"
                />
                <div className="absolute -top-1 -right-1">
                  <HiSparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Aman Singh
                </h1>
                <p className="text-xs text-neutral-400 font-medium">Full Stack Developer</p>
              </div>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id || item.name}
                  onClick={() => handleNavClick(item.href, item.id, item.isExternal, item.url)}
                  className={`group relative px-4 py-2 rounded-[1rem] text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.label || item.name}</span>
                  </div>
                  
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      layoutId="activeTab"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-1 px-3 py-2 rounded-[1rem] bg-neutral-800/30 border border-neutral-700/30">
                {socialLinks.slice(0, 3).map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-[0.75rem] text-neutral-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    title={social.name}
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              <motion.button
                onClick={() => handleNavClick('#contact', 'contact')}
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-[1rem] hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border border-purple-500/20"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Let's Connect
              </motion.button>

              <motion.button
                className="lg:hidden p-3 rounded-[1rem] bg-neutral-800/50 border border-neutral-700/30 text-neutral-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaTimes className="w-5 h-5 text-pink-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaBars className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <motion.button
              className="md:hidden p-3 rounded-[1rem] bg-neutral-800/50 border border-neutral-700/30 text-neutral-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaTimes className="w-5 h-5 text-pink-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaBars className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 z-50"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/95 to-neutral-800/95 backdrop-blur-xl rounded-[2rem] border border-neutral-700/50 shadow-2xl"></div>
              
              <div className="relative p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Navigation</h3>
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id || item.name}
                      onClick={() => handleNavClick(item.href, item.id, item.isExternal, item.url)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-[1rem] text-left transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-white border border-purple-500/50'
                          : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label || item.name}</span>
                    </motion.button>
                  ))}
                </div>

                <div className="border-t border-neutral-700/50 pt-6">
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Connect</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center p-4 rounded-[1rem] bg-neutral-800/30 border border-neutral-700/30 text-neutral-400 ${social.color} transition-all duration-300 hover:border-current/30`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.05 }}
                      >
                        <social.icon className="w-6 h-6 mb-2" />
                        <span className="text-xs font-medium">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={() => handleNavClick('#contact', 'contact')}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-[1rem] hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's Work Together
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
