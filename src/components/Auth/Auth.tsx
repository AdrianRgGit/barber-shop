"use client";

import React, { useState } from "react";
import Login from "./Login/Login";
import "./auth.css";
import Register from "./Register/Register";
import Button from "../Inputs/Button/Button";

const Auth = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormView = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <section className="auth-image hidden w-[50%] lg:block"></section>
      <section className="flex flex-1 flex-col items-center justify-center bg-neutral-50">
        {showForm ? (
          <Login toggleFormView={toggleFormView} />
        ) : (
          <Register toggleFormView={toggleFormView} />
        )}
      </section>
    </>
  );
};

export default Auth;
