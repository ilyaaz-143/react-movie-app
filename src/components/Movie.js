import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner.js";
import MovieInfo from "./MovieInfo/MovieInfo";
import Bar from "./MovieInfoBar/MovieInfoBar";
import Actors from "./Actors/Actors";
import { useMovieFetch } from "../hookes/UseMovieFetch";
import NOImg from "../images/no_image.jpg";
import Bread from "./BreadCrumb/Bread";
const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);
  console.log(movie);
  if (loading) return <Spinner />;
  if (error) return <div>Error</div>;

  return (
    <>
      <Bread movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <Bar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      {/* <Grid header="Actors">
        {movie.actors.map(
          (actor = (
            <Actors
              key={actor.creadit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NOImg
              }
            />
          ))
        )}
      </Grid> */}
    </>
  );
};

export default Movie;
