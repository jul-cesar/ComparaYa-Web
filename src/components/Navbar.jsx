import React from "react";
import InputSearch from "./InputSearch";

function Navbar() {
    return (
      <nav className="bg-wip p-4 border-y-2 fixed top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black font-bold text-lg">ComparaYa</div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <InputSearch />
            </div>
            <a href="#" className="text-black hover:text-gray-200">
              Iniciar Sesión
            </a>
          </div>
        </div>
      </nav>
    );
  }
  
export default Navbar;
