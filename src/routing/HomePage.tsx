import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        //set the template for Grid
        templateAreas={{
          base: `"main"`, //For mobile devices: display single column
          lg: `"aside main"`, //For large devices: >= 1024px
        }}
        templateColumns={{
          // set width of the column to 1fr for base scenario
          base: "1fr",
          // on lg devices: 200px for 1st column (side panel), 1fr or the rest for 2nd column (Grid card)
          lg: "200px 1fr",
        }}
      >
        {/* Wrap this tag with <Show> to make sure Aside only displays in the large devices */}
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            {/* Pass the onSelectedGenre prop to <GenreList>. It takes a function that takes Genre obj and we call setSelected Genre */}
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box padding="10px">
            <GameHeading />
            <Flex>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              {/* onSelectOrder() takes new sortOrder, then calls setGameQuery, spread the existing gameQuery and add new sort order*/}
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
