import React from "react";

import "./styles.css";

const CardGame = ({children}) => {
  return (
    <article className="card-game">
      {children}
    </article>
  );
};

export default CardGame;
