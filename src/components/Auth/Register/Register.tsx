import Button from "@/components/Inputs/Button/Button";
import TextField from "@/components/Inputs/TextField/TextField";
import { AuthProps } from "@/types/authTypes";
import React from "react";

const Register = ({ toggleFormView }: AuthProps) => {
  return (
    <div className="w-[60%]">
      <form action="submit" className="mb-16 flex flex-col gap-y-6">
        <TextField label="NOMBRE" placeholder="Email *" />
        <TextField label="EMAIL" placeholder="Email *" />
        <TextField
          label="CONTRASEÑA"
          type="password"
          placeholder="Contraseña *"
        />
        <TextField
          label="REPITE CONTRASEÑA"
          type="password"
          placeholder="Contraseña *"
        />

        <Button text="CREAR CUENTA" type="submit" />
        <p className="text-sm font-semibold">
          Al crear la cuenta aceptas y entiendes la {" "}
          <a href="#" className="text-orange">Política de Privacidad y Cookies</a>
        </p>
      </form>

      <Button text="¿YA ESTÁS REGISTRADO?" onClick={toggleFormView} />
    </div>
  );
};

export default Register;
