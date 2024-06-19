import Auth from "@/components/Auth/Auth";
import NavBar from "@/components/Layout/NavBar/NavBar";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <main className="flex min-h-[100vh]">
        <Auth />
      </main>
    </>
  );
};

export default page;
