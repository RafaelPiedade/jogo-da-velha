import React from "react";
import "./styles.css";

const AboutLayer = ({ children, className = ""}) => {
  return <article className={`about-layer ${className}`}>{children}</article>;
};

export default AboutLayer;
