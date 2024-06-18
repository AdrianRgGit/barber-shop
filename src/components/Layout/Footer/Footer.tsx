import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex min-h-[100vh] w-full flex-col items-center justify-center bg-dark-gray py-8 text-light-gray lg:block lg:min-h-0">
      <h2 className="mb-12 text-center text-2xl font-semibold">BARBER SHOP</h2>

      <section className="grid gap-y-8 px-8 lg:grid-cols-3 lg:gap-0">
        <article className="space-y-6">
          <div className="flex items-center gap-x-4">
            <MapPin />
            <div>
              <p>Carrer Valencia en fallas, 33</p>
              <p>46000 Valencia</p>
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <Phone />
            <p>999 99 99 99</p>
          </div>

          <div className="flex items-center gap-x-4">
            <Mail />
            <p>email@email.es</p>
          </div>
        </article>

        <article className="flex items-center justify-center gap-x-12 border-y px-8 py-12 lg:border-x lg:border-y-0 lg:py-0">
          <a
            href="#"
            className="transition-colors duration-200 hover:text-orange"
          >
            <Instagram size={48} />
          </a>

          <a
            href="#"
            className="transition-colors duration-200 hover:text-orange"
          >
            <Facebook size={48} />
          </a>
        </article>

        <article className="flex flex-col space-y-4 px-8 text-center lg:text-start">
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
        </article>
      </section>
    </footer>
  );
};

export default Footer;
