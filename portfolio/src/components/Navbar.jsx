import React, { useState } from 'react';
import logo from '../assets/logo1.png';
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='z-50 text-white flex flex-col sm:flex-row items-center justify-between px-8 py-4 shadow-lg sm:sticky sm:top-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>

      {/* Logo & Hamburger Menu */}
      <div className="flex w-full justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 h-auto" />
        </Link>

        {/* Hamburger Button (Only on Small Screens) */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="hidden sm:flex sm:items-center gap-6 text-2xl">
        <a href="https://leetcode.com/u/codewithaman07/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="hover:text-yellow-400 hover:scale-110 transition duration-200" />
        </a>
        <a href="https://codeforces.com/profile/codewithaman" target="_blank" rel="noopener noreferrer">
          <SiCodeforces className="hover:text-blue-400 hover:scale-110 transition duration-200" />
        </a>
        <a href="https://www.codechef.com/users/aman_nsut" target="_blank" rel="noopener noreferrer">
          <SiCodechef className="hover:text-gray-400 hover:scale-110 transition duration-200" />
        </a>
        <a href="https://www.linkedin.com/in/codewithaman07/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-400 hover:scale-110 transition duration-200" />
        </a>
        <a href="https://github.com/codewithaman07" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 hover:scale-110 transition duration-200" />
        </a>
        <a href="https://www.instagram.com/np.random/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 hover:scale-110 transition duration-200" />
        </a>
      </div>

      {/* Mobile Menu (Only Visible When isOpen is True) */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center gap-6 text-2xl mt-4">
          <a href="https://leetcode.com/u/codewithaman07/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="hover:text-yellow-400 hover:scale-110 transition duration-200" />
          </a>
          <a href="https://codeforces.com/profile/codewithaman" target="_blank" rel="noopener noreferrer">
            <SiCodeforces className="hover:text-blue-400 hover:scale-110 transition duration-200" />
          </a>
          <a href="https://www.codechef.com/users/aman_nsut" target="_blank" rel="noopener noreferrer">
            <SiCodechef className="hover:text-gray-400 hover:scale-110 transition duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/codewithaman07/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400 hover:scale-110 transition duration-200" />
          </a>
          <a href="https://github.com/codewithaman07" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400 hover:scale-110 transition duration-200" />
          </a>
          <a href="https://www.instagram.com/np.random/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 hover:scale-110 transition duration-200" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
