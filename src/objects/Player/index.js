import React from "react";
import "./styles.css";

import playerO from "../../img/player-o.png";
import playerX from "../../img/player-x.png";

const Player = ({player}) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;
  
  return (
    <button className="player">
      <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`}  />
    </button>
  );
};

export default Player;