import React from "react";
import usePlatform from "../hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatformLookup from "../hooks/usePlatformLookup";
import useGenreLookup from "../hooks/useGenreLookup";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  // find the g (short for genre) where g.id equals given id
  const genre = useGenreLookup(gameQuery.genreId);
  // get Platform name from PlatformId
  const platform = usePlatformLookup(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
