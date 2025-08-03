import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#07254B] border-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse no-highlight">
          <img src="../src/assets/logo.png" className="h-14 object-contain" alt="Triple S Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Triple S Marine Services
          </span>
        </NavLink>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-[#09385e] focus:outline-none focus:ring-2 focus:ring-[#09385e]"
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

        {/* Navigation Links */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#75afd8] rounded-lg bg-[#07254B] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-2 text-gray-300 rounded-sm md:hover:bg-transparent md:hover:text-[#75afd8] sm:py-1.5"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-2 text-gray-300 rounded-sm md:hover:bg-transparent md:hover:text-[#75afd8] sm:py-1.5"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-2 text-gray-300 rounded-sm md:hover:bg-transparent md:hover:text-[#75afd8] sm:py-1.5"
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
