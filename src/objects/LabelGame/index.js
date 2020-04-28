import React from "react";

import "./styles.css";

const LabelGame = ({ content, htmlFor, children }) => (
  <label htmlFor={htmlFor} className="label-game">
    {children}
    {content}
  </label>
);

export default LabelGame;
