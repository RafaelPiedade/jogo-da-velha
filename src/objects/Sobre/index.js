import React from "react";
import "./styles.css";

const Sobre = ({togleAbout}) => {
  return (
    <>
      <a href="!#" className="sobre" onClick={togleAbout}>
        Sobre
      </a>
    </>
  );
};

export default Sobre;
