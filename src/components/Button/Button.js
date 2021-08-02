import React from "react";
import { Content } from "./Button.style";

const Button = ({ text, callBack }) => {
  return (
    <Content type="button" onClick={callBack}>
      {text}
    </Content>
  );
};

export default Button;
