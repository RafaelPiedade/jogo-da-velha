import React from "react";
import "./styles.css";

const handleClick = () => console.log("clicou");

const AboutLink = ({ className = "" }) => {
  return (
    <>
      <a
        href="#to-do"
        className={`about-link ${className}`}
        onClick={handleClick}
      >
        Sobre
      </a>
    </>
  );
};

export default AboutLink;
