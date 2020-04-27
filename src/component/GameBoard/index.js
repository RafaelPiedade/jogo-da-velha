import React from "react";
import CardWrap from "../../objects/CardGame";
import PlayerGame from "../../objects/PlayerGame";

import './styles.css'
const GameBoard = () => (
  <CardWrap>
    <ul className="game-board">
        <li className="item"><PlayerGame player="o" /></li>
        <li className="item"><PlayerGame player="x" /></li>
        <li className="item"><PlayerGame player="x" /></li>

        <li className="item"><PlayerGame player="o" /></li>
        <li className="item"><PlayerGame player="x" /></li>
        <li className="item"><PlayerGame player="o" /></li>

        <li className="item"><PlayerGame player="x" /></li>
        <li className="item"><PlayerGame player="o" /></li>
        <li className="item"><PlayerGame player="x" /></li>
    </ul>
  </CardWrap>
);

export default GameBoard;
