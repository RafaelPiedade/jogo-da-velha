import React from "react";

import './styles.css'

const GameMoves = () => {
  return (
    <ol className="game-moves">
      <li className="item">Adicionou O</li>
      <li className="item">Adicionou X</li>
      <li className="item">Adicionou O</li>
      <li className="item">Adicionou X</li>
      <li className="item">Adicionou O</li>
      <li className="item">Adicionou X</li>
      <li className="item">Adicionou O</li>
      <li className="item">Adicionou X</li>
      <li className="item">Adicionou O</li>
      <li className="item -last -draw">Empate!</li>
    </ol>
  );
};

export default GameMoves;
