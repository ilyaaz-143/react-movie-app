import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumb.style";
const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="thimb" />
      </Link>
    ) : (
      <Image src={image} alt="thimb" />
    )}
  </div>
);

export default Thumb;
