import { ButtonProps } from "@/types/inputTypes";
import Link from "next/link";
import React from "react";

const Button = ({ href = "#", text = "PIDE CITA" }: ButtonProps) => {
  return (
    <Link href={href}>
      <button
        type="button"
        className="rounded bg-gray px-6 py-4 text-light-gray transition-colors duration-200 hover:bg-orange lg:flex"
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
