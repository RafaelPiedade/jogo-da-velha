import React, { useState } from "react";
import HistoryGame from "../../component/HistoryGame";
import GameBoard from "../../component/GameBoard";
import InputCheckBox from "../InputCheckBox";

const WrapperBoardHistory = () => {
  const [history, setHistory] = useState(["Start"]);
  const [active, setActive] = useState(false);

  const addHistory = (player) =>
    setHistory((old) => [...old, `Adicionou ${player.content.toUpperCase()}`]);

  const showHideHistory = () => setActive((old) => !!!old);

  const changeHistory = (key) => setHistory((old) => old.slice(0, key + 1));

  return (
    <div className={`wrapper-boardHistory ${active && "-active"}`}>
      <GameBoard callback={addHistory} />
      <InputCheckBox
        onClick={showHideHistory}
        id="show"
        value="show"
        content="Mostrar Eventos"
      />
      <HistoryGame history={history} onClick={changeHistory} />
    </div>
  );
};

export default WrapperBoardHistory;
