import { ButtonProps } from "@/types/InputTypes";
import React from "react";

const Button = ({ text = "PIDE CITA" }: ButtonProps) => {
  return (
    <button
      type="button"
      className="rounded bg-gray px-6 py-4 text-light-gray transition-colors duration-200 hover:bg-orange lg:flex"
    >
      {text}
    </button>
  );
};

export default Button;
