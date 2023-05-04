import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  // Create responsive layout using Grid
  return (
    //create a template object for both mobile and web app
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //For mobile devices: display single column
        lg: `"nav nav" "aside main"`, //For large devices: >= 1024px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      {/* Wrap this tag with <Show> to make sure Aside only displays in the large devices */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
