import React from "react";
import "./styles.css";

import InputGame from "../InputGame";
import Label from "../LabelGame";


const InputCheckBox = ({ id = "", value = "", content = ""}) => {
  return (
    <>
      <InputGame id={id} value={value} type="checkbox" />
      <Label htmlFor={id} content={content}  />
    </>
  );
};

export default InputCheckBox;
