import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="border-b border-neutral-800 py-6 text-center text-neutral-400"
    >
      <div className="flex flex-col items-center gap-6 pt-4">

        <div className="flex gap-6 text-xl">
          <a href="https://github.com/codewithaman07" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/codewithaman07" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition duration-300" />
          </a>
        </div>


        <p className="text-sm">&copy; {new Date().getFullYear()} Aman Singh. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
