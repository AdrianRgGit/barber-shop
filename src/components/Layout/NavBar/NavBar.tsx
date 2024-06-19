import Button from "@/components/Inputs/Button/Button";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav className="flex w-full items-center justify-between gap-x-12 bg-light-gray px-6 py-4 text-gray">
        <Link href="/">INICIO</Link>
        <div className="space-x-6">
          <Link
            href="#"
            className="transition-colors duration-200 hover:text-orange"
          >
            NOSOTROS
          </Link>
          <Link
            href="#"
            className="transition-colors duration-200 hover:text-orange"
          >
            PRECIOS
          </Link>
          <Link
            href="#"
            className="transition-colors duration-200 hover:text-orange"
          >
            GALERÍA
          </Link>
          <Link
            href="#"
            className="transition-colors duration-200 hover:text-orange"
          >
            CONTACTO
          </Link>
          <Link
            href="/auth"
            className="transition-colors duration-200 hover:text-orange"
          >
            INICIA SESIÓN
          </Link>
        </div>

        <div className="hidden lg:flex">
          <Link href="/cita">CITA</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
