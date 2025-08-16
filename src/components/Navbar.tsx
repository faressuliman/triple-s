import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#07254B] md:bg-transparent md:absolute md:inset-0 md:z-10">
      <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto lg:px-16 px-4 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center md:space-x-3 space-x-1 rtl:space-x-reverse no-highlight">
          <motion.img 
            src={logo} 
            className="responsive-navbar-logo" 
            alt="Triple S Logo"
            fetchPriority="high"
            loading="eager"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <span className="self-center md:text-2xl text-lg font-semibold whitespace-nowrap text-white">
            Triple S Marine Services
          </span>
        </NavLink>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-[#38d49c] rounded-lg md:hidden hover:bg-[#09385e] focus:outline-none focus:ring-2 focus:ring-[#09385e] transition-all duration-300"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`
            transition-all duration-300 ease-in-out
            overflow-hidden md:overflow-visible
            md:block md:opacity-100 md:w-auto w-full
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
          id="navbar-default"
        >
          <ul className={`
            font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#75afd8] rounded-lg 
            md:bg-transparent bg-[#07254B] md:flex-row md:space-x-8 rtl:space-x-reverse 
            md:mt-0 md:border-0
            transform transition-all duration-300 ease-in-out 
            ${isOpen ? "translate-y-0" : "-translate-y-4"}
          `}>
            <li>
              <NavLink
                to="/"
                className="block py-2 px-2 text-white normal-case md:uppercase font-bold rounded-sm md:hover:bg-transparent md:hover:text-[#38d49c] sm:py-1.5 duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-2 text-white normal-case md:uppercase font-bold rounded-sm md:hover:bg-transparent md:hover:text-[#38d49c] sm:py-1.5 duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-2 text-white normal-case md:uppercase font-bold rounded-sm md:hover:bg-transparent md:hover:text-[#38d49c] sm:py-1.5 duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;