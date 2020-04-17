import React from "react";

import Sobre from "../../objects/Sobre";
import LogoCollabCode from "../../objects/LogoCollabcode";
import Menu from "../../objects/Menu";

import './styles.css'
const Header = () => {
  return (
    <header className="header">
      <LogoCollabCode />
      <Menu />
      <Sobre />
    </header>
  );
};

export default Header;
