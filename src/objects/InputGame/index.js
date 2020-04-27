import React from "react";

const InputGame = ({ value = "", id = "", type = "text" }) => (
  <input className="input-game" id={id} type={type}  value={value} />
);

export default InputGame;
