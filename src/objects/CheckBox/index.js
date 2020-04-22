import React from "react";
import "./styles.css";
import LabelCollab from "../LabelCollab";

const CheckBox = () => (
  <>
    <LabelCollab content="Mostrar eventos" htmlFor="checkBox">
      <input type="checkBox" id="checkBox" />
      <div className="check"></div>
    </LabelCollab>
  </>
);

export default CheckBox;
