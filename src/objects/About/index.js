import React from "react";
import "./styles.css";

const About = ({ children, className }) => {
  return <article 
    className="about">
        {children}
    </article>;
};

export default About;
