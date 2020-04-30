import React, { useState } from "react";
import CardWrap from "../../objects/CardGame";
import PlayerGame from "../../objects/PlayerGame";
import "./styles.css";

const GameBoard = ({callback}) => {
  const [nextPlayer, setNextPlayer] = useState("x");
  const [players, setPlayers] = useState([
    { id: 1, content: "" },
    { id: 2, content: "" },
    { id: 3, content: "" },
    { id: 4, content: "" },
    { id: 5, content: "" },
    { id: 6, content: "" },
    { id: 7, content: "" },
    { id: 8, content: "" },
    { id: 9, content: "" },
  ]);

  const handleClick = (id) => {
    setPlayers((old) =>
      old.map((player) =>
        player.id === id ? { id, content: nextPlayer } : player
      )
    );
    callback(nextPlayer)
    setNextPlayer((old) => (old === "x" ? "o" : "x"));
  };

  return (
    <CardWrap>
      <ul className="game-board">
        {players.map((player) => (
          <li
            className="item"
            key={player.id}
            onClick={() => player.content === "" && handleClick(player.id)}
          >
            <PlayerGame id={player.id} content={player.content} />
          </li>
        ))}
      </ul>
    </CardWrap>
  );
};

export default GameBoard;
