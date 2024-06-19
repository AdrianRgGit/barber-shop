import React from "react";
import Login from "./Login/Login";
import "./auth.css";

const Auth = () => {
  return (
    <>
      <section className="auth-image hidden w-[50%] lg:block"></section>
      <section className="flex flex-1 flex-col items-center justify-center">
        <Login />
      </section>
    </>
  );
};

export default Auth;
