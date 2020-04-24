import React from "react";
import "./App.css";


import Header from "./component/Header";
import Hashtag from "./component/Hashtag";
import CheckBox from "./objects/CheckBox";
import About from "./objects/About";

import HeaderInternal from './component/HeaderInternal'
import ProfileUser from "./component/ProfileUser";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <CheckBox id="show" value="show" content="Mostrar Eventos" />
      <About className="-actisve">
        <HeaderInternal/>
        <ProfileUser/>
      </About>
    </main>
  );
};

export default App;
