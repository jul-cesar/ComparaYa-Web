import React from "react";
import InputSearch from "./InputSearch";
import logo from "../media/icon-512.png";
import textlogo from "../media/textlogo.png";

function Navbar() {
  return (
    <nav className="bg-wip p-1 shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-center ">
          {" "}
          <img
            src={logo}
            alt="Company Logo"
            className="h-16 w-20 sm:h-16 md:h-20 lg:h-20 object-cover"
          />
          <img
            src={textlogo}
            alt="Company Text Logo"
            className="h-10 w-44 sm:h-10 md:h-12 lg:h-12 object-cover"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <InputSearch />
          </div>
          <a
            href="#"
            className="hidden sm:hidden md:block lg:block text-black hover:text-gray-200"
          >
            Iniciar Sesión
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
