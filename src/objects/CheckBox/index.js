import React from "react";
import "./styles.css";

import Input from "../Input";
import Label from "../Label";

const CheckBox = ({ id = "", value = "", content = "" }) => (
  <>
    <Input id={id} value={value} type="checkbox" />
    <Label htmlFor={id} content={content} />
  </>
);

export default CheckBox;
