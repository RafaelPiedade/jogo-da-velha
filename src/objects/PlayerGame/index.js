import React, { useState } from "react";
import "./styles.css";

import playerO from "../../img/player-o.png";
import playerX from "../../img/player-x.png";

const PlayerGame = ({ player = false }) => {
  const [statePlayer, setStatePlayer] = useState(player);

  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  const handleClick = () => setStatePlayer("x");

  return (
    <button className="player-game" onClick={handleClick}>
      {statePlayer && (
        <img src={players[statePlayer]} alt={`Jogador ${statePlayer.toUpperCase()}`} />
      )}
    </button>
  );
};

export default PlayerGame;
