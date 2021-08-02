import { useState, useEffect } from "react";
import Api from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setsteate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const movie = await Api.fetchMovie(movieId);
        // const credits = await Api.fetchCredits(movie);
        // console.log(credits);
        // const directs = credits.crew.filter(
        //   (member) => member.job === "Director"
        // );
        setsteate({
          ...movie,
          // actors: credits.cast,
          // directs: directs,
        });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };
    fetchMovie();
  }, [movieId]);
  return { state, loading, error };
};
