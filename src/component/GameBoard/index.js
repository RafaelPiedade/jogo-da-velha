import React from "react";
import CardWrap from "../../objects/CardWrap";
import Player from "../../objects/Player";

import './styles.css'
const GameBoard = () => (
  <CardWrap>
    <ul className="game-board">
        <li className="item"><Player player="o" /></li>
        <li className="item"><Player player="x" /></li>
        <li className="item"><Player player="x" /></li>

        <li className="item"><Player player="o" /></li>
        <li className="item"><Player player="x" /></li>
        <li className="item"><Player player="o" /></li>

        <li className="item"><Player player="x" /></li>
        <li className="item"><Player player="o" /></li>
        <li className="item"><Player player="x" /></li>
    </ul>
  </CardWrap>
);

export default GameBoard;
