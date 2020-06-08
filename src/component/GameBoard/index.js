import React from "react";
import CardWrap from "../../objects/CardGame";
import PlayerGame from "../../objects/PlayerGame";
import "./styles.css";


const GameBoard = ({ historyGame, onClick, lastRound }) => (
  <CardWrap>
    <ul className="game-board">
      {historyGame[lastRound].state.map((player) => (
        <li
          className="item"
          key={player.id}
          onClick={() => player.content === "" && onClick(player.id)}
        >
          <PlayerGame id={player.id} content={player.content} />
        </li>
      ))}
    </ul>
  </CardWrap>
);

export default GameBoard;
