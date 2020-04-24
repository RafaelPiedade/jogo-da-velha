import React from "react";
import "./styles.css";

import AboutLink from "../../objects/AboutLink";
import LogoCollab from "../../objects/LogoCollab";
import Menu from "../../objects/Menu";

const HeaderExternal = ({ onClick }) => {
  return (
    <>
      <header className="header-external">
        <LogoCollab />
        <AboutLink onClick={onClick} />
        <Menu onClick={onClick} />
      </header>
    </>
  );
};

export default HeaderExternal;
