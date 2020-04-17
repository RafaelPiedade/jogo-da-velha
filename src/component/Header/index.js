import React from "react";

import Sobre from "../../objects/Sobre";
import Logo from "../../objects/Logo";
import Menu from "../../objects/Menu";

import './styles.css'
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Sobre />
      <Menu />
    </header>
  );
};

export default Header;
/* 13:23 */