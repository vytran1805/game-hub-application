import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

// Query object that contains all the information to query the games
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // Create responsive layout using Grid
  return (
    //create a template object for both mobile and web app
    <Grid
      //set the template for Grid
      templateAreas={{
        base: `"nav" "main"`, //For mobile devices: display single column
        lg: `"nav nav" "aside main"`, //For large devices: >= 1024px
      }}
      templateColumns={{
        // set width of the column to 1fr for base scenario
        base: "1fr",
        // on lg devices: 200px for 1st column (side panel), 1fr or the rest for 2nd column (Grid card)
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      {/* Wrap this tag with <Show> to make sure Aside only displays in the large devices */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {/* Pass the onSelectedGenre prop to <GenreList>. It takes a function that takes Genre obj and we call setSelected Genre */}
          <GenreList
            // this attribute is to style the selected Genre
            selectedGenre={gameQuery.genre}
            // filter the Games by genre
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex padding="10px">
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform} //create and spread gameQuery obj, then add new platform
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          {/* onSelectOrder() takes new sortOrder, then calls setGameQuery, spread the existing gameQuery and add new sort order*/}
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
