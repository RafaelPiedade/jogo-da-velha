import React from "react";
import TagGame from "../../objects/TagGame";

import "./styles.css";

const HistoryGame = ({ history }) => {
  return (
    <ol className={`history-game`}>
      {history.map((content,key) => (
        <li key={key} className="action">
          <TagGame content={content} />
        </li>
      ))}
    </ol>
  );
};

export default HistoryGame;
