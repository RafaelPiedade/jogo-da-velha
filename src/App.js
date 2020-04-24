import React from "react";
import "./App.css";

import Header from "./component/Header";
import Hashtag from "./component/Hashtag";
import CheckBox from "./objects/CheckBox";
import About from "./objects/About";

import HeaderInternal from "./component/HeaderInternal";
import ProfileUser from "./component/ProfileUser";

let activeAbout = "";

const handleClick = () => {
  console.log("clicou");
  activeAbout = "-active";
};

const App = () => {
  return (
    <main className="app">
      <Header onClick={handleClick} />
      <Hashtag />
      <CheckBox id="show" value="show" content="Mostrar Eventos" />
      <About className={activeAbout}>
        <HeaderInternal />
        <ProfileUser />
      </About>
    </main>
  );
};

export default App;
