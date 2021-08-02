import Ract from "react";
import { Wrapper, Content, Text } from "./Hero.style";

const HeroImg = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default HeroImg;
