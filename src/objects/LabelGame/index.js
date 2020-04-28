import React from "react";

import "./styles.css";

const LabelGame = ({ content, htmlFor, children , onClick}) => (
  <label onClick={onClick} htmlFor={htmlFor} className="label-game">
    {children}
    {content}
  </label>
);

export default LabelGame;
