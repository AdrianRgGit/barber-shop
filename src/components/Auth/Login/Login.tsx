import Button from "@/components/Inputs/Button/Button";
import TextField from "@/components/Inputs/TextField/TextField";
import { AuthProps } from "@/types/authTypes";
import React from "react";

const Login = ({ toggleFormView }: AuthProps) => {
  return (
    <div className="w-[60%]">
      <form action="submit" className="mb-16 flex flex-col gap-y-6">
        <TextField label="EMAIL" placeholder="Email *" />
        <TextField
          label="CONTRASEÑA"
          type="password"
          placeholder="Contraseña *"
        />

        <Button text="INICIAR SESIÓN" type="submit" />
        <a
          href="#"
          className="cursor-pointer text-sm font-semibold transition-colors duration-200 hover:text-orange"
        >
          ¿Has olvidado la contraseña?
        </a>
      </form>

      <Button text="NUEVO USUARIO" onClick={toggleFormView} />
    </div>
  );
};

export default Login;
