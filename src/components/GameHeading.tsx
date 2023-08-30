import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../gameQueryStore";
import useGenreLookup from "../hooks/useGenreLookup";
import usePlatformLookup from "../hooks/usePlatformLookup";

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
