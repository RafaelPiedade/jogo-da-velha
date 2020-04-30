import React from "react";
import "./styles.css";

import playerO from "../../img/player-o.png";
import playerX from "../../img/player-x.png";

const PlayerGame = ({ content = "" }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  return (
    <button className="player-game">
      {content && (
        <img src={players[content]} alt={`Jogador ${content.toUpperCase()}`} />
      )}
    </button>
  );
};

export default PlayerGame;
