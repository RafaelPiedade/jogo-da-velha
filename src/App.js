import React, { useState } from "react";
import "./App.css";

import HeaderGame from "./component/HeaderGame";
import GameBoard from "./component/GameBoard";
import InputCheckBox from "./objects/InputCheckBox";
import LayerDark from "./objects/LayerDark";

import HeaderInternal from "./component/HeaderInternal";
import ProfileUser from "./component/ProfileUser";
import HistoryGame from "./component/HistoryGame";
import WrapperBoardHistory from "./objects/WrapperBoardHistory";

const App = () => {
  const [active, setActive] = useState(false);
  const [activeAbout, setActiveAbout] = useState("");
  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  const [history, setHistory] = useState([]);
  const addHistory = (player) => {
    setHistory((old) => [...old, player]);
  };
  const returnHistory = (player) => {
    setHistory();
  };

  const showHideHistory = () => setActive((old) => !!!old);
  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <WrapperBoardHistory active={active}>
        <GameBoard callback={addHistory} />
        <InputCheckBox
          onClick={showHideHistory}
          id="show"
          value="show"
          content="Mostrar Eventos"
        />
        <HistoryGame history={history} callback={returnHistory} />
      </WrapperBoardHistory>
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
