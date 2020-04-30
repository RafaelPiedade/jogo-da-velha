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
  const [history, setHistory] = useState([]);
  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  const addHistory = (player) => {
    setHistory((old) => [...old, `Adicionou ${player.toUpperCase()}`]);
  };
  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <GameBoard callback={addHistory} />
      <InputCheckBox id="show" value="show" content="Mostrar Eventos" />
      <HistoryGame history={history} />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
