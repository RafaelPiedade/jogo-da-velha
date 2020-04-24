import React from "react";

import "./styles.css";

const CardWrap = ({children}) => {
  return (
    <article className="card-wrap">
      {children}
    </article>
  );
};

export default CardWrap;
