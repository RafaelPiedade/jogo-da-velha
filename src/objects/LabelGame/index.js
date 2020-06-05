import React from "react";

import "./styles.css";

const LabelGame = ({ content, htmlFor, children, onClick}) => (
  <label htmlFor={htmlFor} className="label-game" onClick={onClick}>
    {children}
    {content}
  </label>
);

export default LabelGame;
