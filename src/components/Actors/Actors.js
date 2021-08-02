import React from "react";

import { Wrapper, Images } from "./Actorsqurxis.styled";

const Actors = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Images src={imageUrl} alt="actor-thumb" />
      <p>{name}</p>
      <p>{character}</p>
    </Wrapper>
  );
};
export default Actors;
