import React from "react";
import "./App.css";

import Header from "./component/Header";
import Hashtag from "./component/Hashtag";
import CheckBox from './objects/CheckBox';


const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <CheckBox id="show" value="show" content="Mostrar Eventos"/>
  </main>
);

export default App;
