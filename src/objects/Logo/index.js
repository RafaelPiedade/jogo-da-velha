import React from "react";

import logoDark from "../../img/logo.png"
import logoWhite from '../../img/logo-white.png'

const Logo = ({logo}) => {
  const logos = [];
  logos["white"] = logoWhite;
  logos["dark"] = logoDark;

  return (<img className="logo" src={logos[logo]} alt="Logo da CollabCode" />);
};

export default Logo;
