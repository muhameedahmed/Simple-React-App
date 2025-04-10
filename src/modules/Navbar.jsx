import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 navb">
      <div className="flex flex-wrap items-center justify-around mx-auto p-4">
        <NavLink to="/" className="text-white font-bold text-3xl">
          START REACT
        </NavLink>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1h15M1 7h15M1 13h15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={`${menuOpen ? "" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <NavLink to="Portfolio" className="flex items-center justify-center text-white shadow-2xl shadow-gray-800">
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink to="About" className="flex items-center justify-center text-white py-4 shadow-2xl shadow-gray-800">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className="flex items-center justify-center text-white shadow-2xl shadow-gray-800">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
