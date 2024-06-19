import { ButtonProps } from "@/types/inputTypes";
import Link from "next/link";
import React from "react";

const Button = ({
  text = "PIDE CITA",
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="w-full rounded bg-gray px-6 py-4 text-light-gray transition-colors duration-200 hover:bg-orange lg:flex"
    >
      <span className="w-full">{text}</span>
    </button>
  );
};

export default Button;
