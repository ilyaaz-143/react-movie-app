import React, { useState, useEffect } from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";

import HeroImg from "../HeroImg.js/Hero";

import Grid from "../Grid/Grid";

import { Search } from "../Search/Search";

import { useHomeFetch } from "../../hookes/useHomeFetch";

import Noimg from "../../images/no_image.jpg";
import Thumb from "../Thumb/Thumb";
import { Spinner } from "../Spinner/Spinner.style";
import Button from "../Button/Button";

const Home = () => {
  const { state, loading, error, setSearchTerm, searhTerm, setIsLoadingMore } =
    useHomeFetch();
  console.log(state);
  if (error) return <div>Something went wrong.....</div>;
  return (
    <>
      {state.results[0] ? (
        <HeroImg
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Search setSearchTerm={setSearchTerm} />
      <Grid
        header={
          searhTerm ? "Movies Related To: " + searhTerm : "popular movies"
        }
      >
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : Noimg
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="loadMore" callBack={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
