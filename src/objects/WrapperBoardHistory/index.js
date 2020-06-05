import React from "react";

const WrapperBoardHistory = ({ children, active = false }) => (
  <div className={`wrapper-boardHistory ${active && '-active'}`}>{children}</div>
);

export default WrapperBoardHistory;
