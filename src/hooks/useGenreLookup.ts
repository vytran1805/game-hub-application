import React from "react";
import useGenres from "./useGenres";

const useGenreLookup = (id?: number) => {
  // get Genre name from GenreId
  const { data: genres } = useGenres();
  // find the g (short for genre) where g.id equals given id
  return genres?.results.find((g) => g.id === id);
};

export default useGenreLookup;
