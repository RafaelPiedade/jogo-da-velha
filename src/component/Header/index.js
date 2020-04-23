import React from "react";
import "./styles.css";

import AboutLink from "../../objects/AboutLink";
import Logo from "../../objects/Logo";
import Menu from "../../objects/Menu";

const Header = ({ logo, togleAbout }) => {
  return (
    <>
      <header className="header">
        <Logo logo={logo} />
        <AboutLink togleAbout={togleAbout}/>
        <Menu/>
      </header>
    </>
  );
};

export default Header;
