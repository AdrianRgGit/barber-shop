import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-end gap-x-12 bg-light-gray p-4 text-gray">
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

      <button
        type="button"
        className="rounded bg-gray px-2 py-4 text-light-gray transition-colors duration-200 hover:bg-orange"
      >
        PEDIR CITA ONLINE
      </button>
    </nav>
  );
};

export default NavBar;
