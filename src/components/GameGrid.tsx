import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Games } from "@mui/icons-material";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";
/**
 * created a prop to pass Selected Genre to the backend
 */
interface Props {
  gameQuery: GameQuery;
}
/**
 * this component should be only responsible for returning markup and handling user interactions at a high level
 * => move the logic for making HTTP requests inside a service or the entire logic (States and fetch) inside a hook (useGames.ts)
 * @returns
 */
const GameGrid = ({ gameQuery }: Props) => {
  // call useGames() to get an object with two params: games and error
  const { data, error, isLoading } = useGames(gameQuery);
  //initialize skeleton array
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {/* Incase of error, display error */}
      {error && <Text color="red">{error}</Text>}

      {/* // return a list of games, map each game with the <li> element */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {/* if the loading is true, we map each skeleton to a <GameSkeleton> component */}
        {isLoading &&
          skeletons.map((skeletons) => (
            <GameCardContainer key={skeletons}>
              <GameSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCards game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
