import React, { useState } from "react";
import "./App.css";

import Header from "./component/Header";
import Hashtag from "./component/Hashtag";
import CheckBox from "./objects/CheckBox";
import About from "./objects/About";

import HeaderInternal from "./component/HeaderInternal";
import ProfileUser from "./component/ProfileUser";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  return (
    <main className="app">
      <Header onClick={handleClickAdd} />
      <Hashtag />
      <CheckBox id="show" value="show" content="Mostrar Eventos" />
      <About className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </About>
    </main>
  );
};

export default App;
