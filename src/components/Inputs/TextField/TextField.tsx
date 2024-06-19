import React from "react";

const TextField = () => {
  return (
    <label className="flex flex-col">
      EMAIL
      <input
        type="text"
        placeholder="TextField"
        // value={"TextField"}
        className="border-b border-b-dark-gray bg-transparent py-4 outline-none"
      />
    </label>
  );
};

export default TextField;
