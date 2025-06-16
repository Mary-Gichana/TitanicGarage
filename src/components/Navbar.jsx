import React from "react";
import Image1 from "/assets/Image1.png"; // Adjust the path as needed

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-3">
        <img
          src={Image1}
          alt="Titanic Auto Solutions Logo"
          className="h-10 w-10 object-contain"
        />
        <span className="font-bold text-xl tracking-wide">
          Titanic Auto Garage Solutions
        </span>
      </div>
      <div className="space-x-6">
        <a href="#home" className="hover:text-green-400 transition">
          Home
        </a>
        <a href="#about" className="hover:text-green-400 transition">
          About
        </a>
        <a href="#products" className="hover:text-green-400 transition">
          Products
        </a>
        <a href="#services" className="hover:text-green-400 transition">
          Services
        </a>
        <a href="#contact" className="hover:text-green-400 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
