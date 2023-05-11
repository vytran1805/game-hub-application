import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

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
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
