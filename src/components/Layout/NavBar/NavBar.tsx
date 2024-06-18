import Button from "@/components/Inputs/Button";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex w-full items-center justify-end gap-x-12 bg-light-gray px-6 py-4 text-gray">
      <div className="space-x-6">
        <a
          href="#"
          className="transition-colors duration-200 hover:text-orange"
        >
          NOSOTROS
        </a>
        <a
          href="#"
          className="transition-colors duration-200 hover:text-orange"
        >
          PRECIOS
        </a>
        <a
          href="#"
          className="transition-colors duration-200 hover:text-orange"
        >
          GALERÍA
        </a>
        <a
          href="#"
          className="transition-colors duration-200 hover:text-orange"
        >
          CONTACTO
        </a>
      </div>

      <div className="hidden lg:flex">
        <Button />
      </div>
    </nav>
  );
};

export default NavBar;
