import React from "react";
import "./styles.css";

const AboutLink = ({togleAbout}) => {
  return (
    <>
      <a href="!#" className="aboutLink" onClick={togleAbout}>
        Sobre
      </a>
    </>
  );
};

export default AboutLink;
