import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Prasad Kulkarni</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;