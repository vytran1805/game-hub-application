import React from "react";
import usePlatform from "../hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatformLookup from "../hooks/usePlatformLookup";
import useGenreLookup from "../hooks/useGenreLookup";
import useGameQueryStore from "../gameQueryStore";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  // find the g (short for genre) where g.id equals given id
  const genre = useGenreLookup(genreId);
  // get Platform name from PlatformId
  const platform = usePlatformLookup(platformId);

  const heading = `${platform?.name || ""} ${genre || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
