import React from "react";

import "./styles.css";

const Label = ({ content, htmlFor, children }) => (
  <label htmlFor={htmlFor} className="label">
    {children}
    {content}
  </label>
);

export default Label;
