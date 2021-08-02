import { useState, useEffect, useRef } from "react";
import Api from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};
export const useHomeFetch = () => {
  const [searhTerm, setSearchTerm] = useState("");
  const [state, setstate] = useState(initialState);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // console.log(searhTerm);
  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await Api.fetchMovies(searchTerm, page);

      setstate((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      console.error(error);
      setError(true);
    }
    setLoading(false);
  };
  //
  useEffect(() => {
    setstate(initialState);
    fetchMovies(1, searhTerm);
  }, [searhTerm]);

  //
  useEffect(() => {
    if (!isLoadingMore) {
      return;
    }
    fetchMovies(state.page + 1, searhTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, state, searhTerm]);

  return { state, Loading, error, setSearchTerm, searhTerm, setIsLoadingMore };
};
