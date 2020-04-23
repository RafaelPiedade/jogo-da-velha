import React, { useState } from "react";
import "./App.css";

import Header from "./component/Header";
import Hashtag from "./component/Hashtag";
import CheckBox from "./objects/CheckBox";
import About from "./component/About";
const App = () => {
  const [open, setOpen] = useState(false);

  const togleAbout = () => setOpen(!open);
  return (
    <main className="app">
      <Header logo="dark" togleAbout={togleAbout} />
      {open && <About togleAbout={togleAbout} />}
      <Hashtag />
      <CheckBox id="show" value="show" content="Mostrar Eventos" />
    </main>
  );
};

export default App;
