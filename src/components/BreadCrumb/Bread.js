import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./Bread.styled";

const Bread = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default Bread;
