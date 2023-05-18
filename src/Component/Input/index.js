import React from "react";
import "./index.scss";

const Input = ({ handleChange, text, type = "text" }) => {
  return (
    <>
      <input type={type} value={text} onChange={handleChange} />
    </>
  );
};

export default Input;
