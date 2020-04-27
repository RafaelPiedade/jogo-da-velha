import React, { useState } from "react";
import "./App.css";

import HeaderGame from "./component/HeaderGame";
import GameBoard from "./component/GameBoard";
import InputCheckBox from "./objects/InputCheckBox";
import LayerDark from "./objects/LayerDark";

import HeaderInternal from "./component/HeaderInternal";
import ProfileUser from "./component/ProfileUser";
import GameMoves from "./component/GameMoves";
import TagGame from "./objects/TagGame";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <GameBoard />
      <InputCheckBox id="show" value="show" content="Mostrar Eventos" />
      <TagGame content="Adicionou X" />
      <GameMoves />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
