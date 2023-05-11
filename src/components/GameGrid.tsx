import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

/**
 * this component should be only responsible for returning markup and handling user interactions at a high level
 * => move the logic for making HTTP requests inside a service or the entire logic (States and fetch) inside a hook (useGames.ts)
 * @returns
 */
const GameGrid = () => {
  // call useGames() to get an object with two params: games and error
  const { games, error } = useGames();
  return (
    <>
      {/* Incase of error, display error */}
      {error && <Text color="red">{error}</Text>}

      {/* // return a list of games, map each game with the <li> element */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
