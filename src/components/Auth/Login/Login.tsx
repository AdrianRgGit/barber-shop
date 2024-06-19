import Submit from "@/components/Inputs/Submit/Submit";
import TextField from "@/components/Inputs/TextField/TextField";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="min-w-[50%]">
        <div className="mb-16 flex flex-col gap-y-6">
          <TextField />
          <TextField />
          <Submit />
          <small>¿Has olvidado la contraseña?</small>
        </div>

        <button className="w-full bg-gray py-4">NUEVO CLIENTE</button>
      </div>
    </>
  );
};

export default Login;
