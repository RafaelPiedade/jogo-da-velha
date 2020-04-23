import React from "react";
import "./styles.css";

import Sobre from "../../objects/Sobre";
import Logo from "../../objects/Logo";
import Menu from "../../objects/Menu";

const Header = ({ logo, togleAbout }) => {
  return (
    <>
      <header className="header">
        <Logo logo={logo} />
        <Sobre togleAbout={togleAbout}/>
        <Menu/>
      </header>
    </>
  );
};

export default Header;
