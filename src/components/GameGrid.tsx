import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
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

  if (error) return <Text color="red">{error.message}</Text>;
  return (
    // return a list of games, map each game with the <li> element
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={4}
    >
      {/* if the loading is true, we map each skeleton to a <GameSkeleton> component */}
      {isLoading &&
        skeletons.map((skeletons) => (
          <GameCardContainer key={skeletons}>
            <GameSkeleton />
          </GameCardContainer>
        ))}
      {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCards game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
