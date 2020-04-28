import React from "react";
import CardWrap from "../../objects/CardGame";
import PlayerGame from "../../objects/PlayerGame";

import './styles.css'
const GameBoard = () => (
  <CardWrap>
    <ul className="game-board">
        <li className="item"><PlayerGame /></li>
        <li className="item"><PlayerGame/></li>
        <li className="item"><PlayerGame/></li>

        <li className="item"><PlayerGame/></li>
        <li className="item"><PlayerGame/></li>
        <li className="item"><PlayerGame/></li>

        <li className="item"><PlayerGame/></li>
        <li className="item"><PlayerGame/></li>
        <li className="item"><PlayerGame/></li>
    </ul>
  </CardWrap>
);

export default GameBoard;
