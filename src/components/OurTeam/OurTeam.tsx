import React from "react";
import OurTeamCard from "./OurTeamCard/OurTeamCard";
import Button from "../Inputs/Button";

const OurTeam = () => {
  return (
    <section className="flex min-h-[100vh] flex-col px-2 py-12 lg:px-1">
      <h2 className="mb-6 text-center text-2xl font-bold text-dark-gray lg:mb-0">
        OUR TEAM
      </h2>

      <div className="mx-auto grid sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 lg:gap-8">
        <OurTeamCard
          name="Mario Gonzalez"
          avatar="/images/barber-1.webp"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, similique
        recusandae amet sed sequi eius laudantium adipisci tenetur nisi
        corrupti, soluta accusamus explicabo praesentium sint quia placeat! Est,
        doloribus beatae."
        />
        <OurTeamCard
          name="Mario Gonzalez"
          avatar="/images/barber-2.webp"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, similique
        recusandae amet sed sequi eius laudantium adipisci tenetur nisi
        corrupti, soluta accusamus explicabo praesentium sint quia placeat! Est,
        doloribus beatae."
        />
        <OurTeamCard
          name="Mario Gonzalez"
          avatar="/images/barber-3.webp"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, similique
        recusandae amet sed sequi eius laudantium adipisci tenetur nisi
        corrupti, soluta accusamus explicabo praesentium sint quia placeat! Est,
        doloribus beatae."
        />
      </div>

      <div className="mt-12 self-center">
        <Button text="REVISA DISPONIBILIDAD" />
      </div>
    </section>
  );
};

export default OurTeam;
