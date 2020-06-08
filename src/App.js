import React, { useState } from "react";
import "./App.css";

import HeaderGame from "./component/HeaderGame";
import LayerDark from "./objects/LayerDark";

import HeaderInternal from "./component/HeaderInternal";
import ProfileUser from "./component/ProfileUser";
import WrapperBoardHistory from "./objects/WrapperBoardHistory";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");
  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <WrapperBoardHistory />

      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
