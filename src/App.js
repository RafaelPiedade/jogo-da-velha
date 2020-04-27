import React, { useState } from "react";
import "./App.css";

import HeaderExternal from "./component/HeaderExternal";
import GameBoard from "./component/GameBoard";
import CheckBox from "./objects/CheckBox";
import AboutLayer from "./objects/AboutLayer";

import HeaderInternal from "./component/HeaderInternal";
import ProfileUser from "./component/ProfileUser";
import GameMoves from './component/GameMoves'

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  return (
    <main className="app">
      <HeaderExternal onClick={handleClickAdd} />
      <GameBoard />
      <CheckBox id="show" value="show" content="Mostrar Eventos" />
      <GameMoves />
      <AboutLayer className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </AboutLayer>
    </main>
  );
};

export default App;
