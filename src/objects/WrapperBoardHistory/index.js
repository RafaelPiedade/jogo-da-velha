import React, { useState } from "react";
import HistoryGame from "../../component/HistoryGame";
import GameBoard from "../../component/GameBoard";
import InputCheckBox from "../InputCheckBox";

const WrapperBoardHistory = () => {
  const [history, setHistory] = useState(["Start"]);
  const [active, setActive] = useState(false);
  const [lastRound, setLastRound] = useState(0);
  const [nextPlayer, setNextPlayer] = useState("x");
  const [historyGame, setHistoryGame] = useState([
    {
      round: 0,
      state: [
        { id: 1, content: "" },
        { id: 2, content: "" },
        { id: 3, content: "" },
        { id: 4, content: "" },
        { id: 5, content: "" },
        { id: 6, content: "" },
        { id: 7, content: "" },
        { id: 8, content: "" },
        { id: 9, content: "" },
      ],
    },
  ]);

  const addHistory = (player) =>
    setHistory((old) => [...old, `Adicionou ${player.content.toUpperCase()}`]);

  const showHideHistory = () => setActive((old) => !!!old);

  const changeHistory = (key) => {
    setLastRound(key);
    setHistory((old) => old.slice(0, key + 1));
    setHistoryGame((old) => old.slice(0, key + 1));
  };

  const handleClick = (id) => {
    setHistoryGame((old) => [
      ...old,
      {
        round: lastRound + 1,
        state: old[lastRound].state.map((player) =>
          player.id === id ? { id, content: nextPlayer } : player
        ),
      },
    ]);
    setLastRound((old) => old + 1);
    addHistory({ id, content: nextPlayer });
    setNextPlayer((old) => (old === "x" ? "o" : "x"));
  };

  return (
    <div className={`wrapper-boardHistory ${active && "-active"}`}>
      <GameBoard
        historyGame={historyGame}
        onClick={handleClick}
        lastRound={lastRound}
      />
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
