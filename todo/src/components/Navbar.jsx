import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 text-white p-3 sticky top-0 z-10 shadow-md">
      <div className="logo">
        <span className="font-bold text-2xl mx-7">TaskFlow</span>
      </div>
      <ul className="flex gap-8 mx-8">
        <li className="cursor-pointer hover:text-purple-400 hover:font-semibold transition-all duration-300">Home</li>
        <li className="cursor-pointer hover:text-purple-400 hover:font-semibold transition-all duration-300">About</li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
