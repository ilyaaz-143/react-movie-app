import React from "react";

import Thumb from "../Thumb/Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { Wrapper, Content, Text } from "./MovieInfo.style";

import noImg from "../../images/no_image.jpg";

const MovieInfo = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : noImg
          }
          clickable={false}
          alt="thimb"
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating">
            <div>
              <h3>Ratting</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
