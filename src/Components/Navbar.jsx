import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "University Admission", href: "/uniadmission" },
    { label: "HSC Program", href: "/hsc" },
    { label: "Teachers Panel", href: "/teachers" },
    { label: "About Us", href: "#" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 shadow-lg fixed w-full top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="images/log.png"
            alt="Logo"
            className="w-11 h-11 rounded-full  shadow-md hover:scale-105 transition-transform duration-300 object-cover border-2 border-white object-center"
          />
          <h1 className="text-white font-bold text-base text-md lg:text-xl tracking-wide drop-shadow-sm">
            <Link to="/" className="hover:text-yellow-300 transition-colors">
                Monir's Admission Care
            </Link>
            </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex  space-x-5 lg:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white font-medium hover:text-yellow-300 transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-yellow-300 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-500 z-50 ease-in-out overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-5 space-y-4 bg-white/10 backdrop-blur-lg border-t border-white/20 shadow-inner rounded-b-3xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="w-[85%] text-center text-white font-semibold py-3 rounded-xl bg-gradient-to-r from-purple-700 to-pink-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
