import React from "react";

const Input = ({ value = "", id = "", type = "text" }) => (
  <input className="input" id={id} type={type}  value={value} />
);

export default Input;
