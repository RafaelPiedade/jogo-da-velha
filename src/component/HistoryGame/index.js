import React from "react";
import TagGame from "../../objects/TagGame";

import "./styles.css";

const HistoryGame = ({ history, callback }) => {
  return (
    <ol className={`history-game`}>
      {history.map((player, key) => (
        <li key={key} className="action" onClick={() => callback(player)}>
          <TagGame content={`Adicionou ${player.content.toUpperCase()}`} />
        </li>
      ))}
    </ol>
  );
};

export default HistoryGame;
