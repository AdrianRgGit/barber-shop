import { TextFieldProps } from "@/types/inputTypes";
import React from "react";

const TextField = ({
  label,
  type = "text",
  placeholder,
  value,
  required = false,
}: TextFieldProps) => {
  return (
    <label className="flex flex-col font-semibold">
      {label}
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        // value={value}
        className="border-b border-b-dark-gray bg-transparent pb-2 pt-4 font-normal outline-none"
      />
    </label>
  );
};

export default TextField;
