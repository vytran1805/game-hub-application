import React from "react";
import useGenres from "./useGenres";
import useGameQueryStore from "../gameQueryStore";

const useGenreLookup = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  // get Genre name from GenreId
  const { data: genres } = useGenres();
  // find the g (short for genre) where g.id equals given id
  return genres?.results.find((g) => g.id === genreId);
};

export default useGenreLookup;
