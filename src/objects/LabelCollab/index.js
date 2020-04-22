import React from "react";

import "./styles.css";

const LabelCollab = ({ content, htmlFor, children }) => (
  <label htmlFor={htmlFor} className="labelCollab">
    {children}
    {content}
  </label>
);

export default LabelCollab;
