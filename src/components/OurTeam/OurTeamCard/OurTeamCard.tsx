import { OurTeamCardProps } from "@/types/ourTeamTypes";
import React from "react";

const OurTeamCard = ({ name, avatar, description }: OurTeamCardProps) => {
  return (
    <article className="flex flex-col items-center gap-y-6 px-4 py-12 text-dark-gray">
      <h3 className="text-xl font-semibold">{name.toUpperCase()}</h3>
      <picture>
        <img
          src={avatar}
          alt="Mario Gonzalez"
          height={260}
          width={260}
          className="w-h-64 h-64 rounded-full object-cover"
        />
      </picture>

      <p className="text-justify">{description}</p>
    </article>
  );
};

export default OurTeamCard;
