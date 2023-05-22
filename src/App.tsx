import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";

function App() {
  // share State between Genre and Game component
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); //null means no Genre selected
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
        <NavBar />
      </GridItem>
      {/* Wrap this tag with <Show> to make sure Aside only displays in the large devices */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {/* Pass the onSelectedGenre prop to <GenreList>. It takes a function that takes Genre obj and we call setSelected Genre */}
          <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
