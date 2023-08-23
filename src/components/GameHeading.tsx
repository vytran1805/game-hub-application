import React from "react";
import usePlatform from "../hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  // get Genre name from GenreId
  const { data: genres } = useGenres();
  // find the g (short for genre) where g.id equals selected genreId
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  // get Platform name from PlatformId
  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const heading = `${platform?.name || ""} ${genre || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
