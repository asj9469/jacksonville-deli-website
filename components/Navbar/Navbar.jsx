"use client";
import React, { useState } from "react";
import {Link} from "react-scroll"
import NavLink from "@/components/Navbar/NavLink";
import MenuOverlay from "./MenuOverlay";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  {
    title: "About",
    path: "about",

  },
  {
    title: "Menu",
    path: "menu",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-20 bg-black bg-opacity-100 font-serif">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-white">
          (609) 261-5060
        </div>
      
        <div className="mobile-menu block md:hidden ml-auto">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-white hover:text-[#5c5c5c]"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-white hover:text-[#5c5c5c]"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="font-serif flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <div key={index}>
                <NavLink href={link.path} title={link.title} />
              </div>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;