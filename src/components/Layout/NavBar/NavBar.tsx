import Button from "@/components/Inputs/Button";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex w-full items-center justify-end gap-x-12 bg-light-gray px-6 py-4 text-gray">
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
      </div>

      <div className="hidden lg:flex">
        <Button href="/cita" />
      </div>
    </nav>
  );
};

export default NavBar;
