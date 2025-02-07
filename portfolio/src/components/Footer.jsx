import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-neutral-400 py-6 text-center border-t border-neutral-800 m-0 p-0"

    >
      <div className="flex flex-col items-center gap-4 px-6">
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/codewithaman07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-white transition duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/codewithaman07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400 transition duration-300" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 transition duration-300" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aman Singh. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
