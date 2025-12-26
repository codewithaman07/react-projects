import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import animeAvatar from '../assets/anime_avatar.png';
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

      const sections = ['about', 'tech', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: FaUser, href: '#about' },
    { id: 'tech', label: 'Skills', icon: FaCode, href: '#tech' },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram, href: '#projects' },
    { id: 'contact', label: 'Contact', icon: FaEnvelope, href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/codewithaman07/', color: 'hover:text-amber-400 hover:shadow-amber-400/50' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/codewithaman07', color: 'hover:text-white hover:shadow-white/50' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/codewithaman07/', color: 'hover:text-cyan-400 hover:shadow-cyan-400/50' },
    { name: 'CodeChef', icon: SiCodechef, url: 'https://www.codechef.com/users/aman_nsut', color: 'hover:text-orange-400 hover:shadow-orange-400/50' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/np.random/', color: 'hover:text-pink-400 hover:shadow-pink-400/50' },
  ];

  const handleNavClick = (href, id, isExternal = false, url = null) => {
    if (isExternal && url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }

    setActiveSection(id);
    setIsOpen(false);

    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);

    if (element) {
      const elementTop = element.offsetTop;
      const offset = 120;

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
      className={`relative w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Glassmorphism background - Night Sky */}
          <div className="absolute inset-0 bg-[#0b1528]/80 backdrop-blur-xl rounded-2xl border border-cyan-400/20 shadow-2xl shadow-cyan-900/10"></div>

          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-amber-400/10 to-orange-400/20 animate-gradient-shift opacity-50"></div>

          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/5 via-amber-500/5 to-orange-500/5 rounded-2xl blur-xl"></div>

          <div className="relative flex items-center justify-between px-6 py-4">

            {/* Logo Section - Anime Avatar */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src={animeAvatar}
                  alt="Aman Singh"
                  className="relative w-12 h-12 rounded-xl border-2 border-cyan-400/50 shadow-lg object-cover"
                />
                <div className="absolute -top-1 -right-1">
                  <HiSparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">
                  Aman Singh
                </h1>
                <p className="text-xs text-cyan-300/60 font-medium">Full Stack Developer</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-cyan-500/30 to-amber-500/30 border border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                      : 'text-cyan-200/70 hover:text-white hover:bg-cyan-500/10'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className={`w-4 h-4 ${activeSection === item.id ? 'text-amber-300' : ''}`} />
                    <span>{item.label}</span>
                  </div>

                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 rounded-full"
                      layoutId="activeTab"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Social & CTA Section */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-[#162544]/50 border border-cyan-500/20">
                {socialLinks.slice(0, 3).map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg text-cyan-300/60 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    title={social.name}
                    whileHover={{ y: -3 }}
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
                className="relative px-6 py-2.5 text-sm font-semibold rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* Button gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 animate-gradient-shift"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <span className="relative text-[#0b1528] font-bold">Let's Connect</span>
              </motion.button>

              {/* Mobile menu button for medium screens */}
              <motion.button
                className="lg:hidden p-3 rounded-xl bg-[#162544]/50 border border-cyan-500/20 text-cyan-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="close" initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 180, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <FaTimes className="w-5 h-5 text-orange-400" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -180, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <FaBars className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-3 rounded-xl bg-[#162544]/50 border border-cyan-500/20 text-cyan-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 180, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <FaTimes className="w-5 h-5 text-orange-400" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -180, opacity: 0 }} transition={{ duration: 0.3 }}>
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
              {/* Glass background */}
              <div className="absolute inset-0 bg-[#0b1528]/95 backdrop-blur-xl rounded-2xl border border-cyan-400/30 shadow-2xl shadow-cyan-900/20"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-amber-500/10 to-orange-500/10 rounded-2xl blur-xl"></div>

              <div className="relative p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">Navigation</h3>
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.href, item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${activeSection === item.id
                          ? 'bg-gradient-to-r from-cyan-500/30 to-amber-500/30 text-white border border-cyan-400/50'
                          : 'text-cyan-200/70 hover:text-white hover:bg-cyan-500/10'
                        }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <item.icon className={`w-5 h-5 ${activeSection === item.id ? 'text-amber-300' : ''}`} />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Social Links */}
                <div className="border-t border-cyan-500/20 pt-6">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">Connect</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center p-4 rounded-xl bg-[#162544]/50 border border-cyan-500/20 text-cyan-300/60 ${social.color} transition-all duration-300`}
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

                {/* CTA Button */}
                <motion.button
                  onClick={() => handleNavClick('#contact', 'contact')}
                  className="relative w-full px-6 py-4 font-semibold rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-amber-400 to-orange-400 animate-gradient-shift"></div>
                  <span className="relative text-[#0b1528] font-bold">Let's Work Together</span>
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
