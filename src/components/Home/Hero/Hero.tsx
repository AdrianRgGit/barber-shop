import React from "react";
import "./hero.css";
import Button from "@/components/Inputs/Button";

const Hero = () => {
  return (
    <section className="hero-container flex min-h-[100vh] flex-col justify-center px-2 lg:px-12">
      <div className="flex flex-col gap-y-6 bg-dark-gray/70 px-4 py-12 text-light-gray lg:max-w-[40%]">
        <h3 className="text-4xl">BARBER SHOP VALENCIA</h3>
        <p className="text-lg">
          Donde el estilo y la elegancia se encuentran. Nuestro equipo de
          expertos estilistas está aquí para ofrecerte los mejores cortes,
          peinados y tratamientos personalizados.
        </p>
        <p className="text-lg">
          ¡Reserva tu cita hoy y transforma tu look con nosotros!
        </p>

        <div className="self-end">
          <Button href="/cita" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
