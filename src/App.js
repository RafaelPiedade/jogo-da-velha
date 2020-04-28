import React, { useState } from "react";
import "./App.css";

import HeaderGame from "./component/HeaderGame";
import GameBoard from "./component/GameBoard";
import InputCheckBox from "./objects/InputCheckBox";
import LayerDark from "./objects/LayerDark";

import HeaderInternal from "./component/HeaderInternal";
import ProfileUser from "./component/ProfileUser";
import HistoryGame from "./component/HistoryGame";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");
  const [activeHistoryGame, setHistoryGame] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  const handleClick = () => {
    setHistoryGame((old) => (old === "-active" ? "" : "-active"));
  };

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <GameBoard />
      <InputCheckBox
        onClick={handleClick}
        id="show"
        value="show"
        content="Mostrar Eventos"
      />
      <HistoryGame className={activeHistoryGame} />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
