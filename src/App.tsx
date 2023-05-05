import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  // Create responsive layout using Grid
  return (
    //create a template object for both mobile and web app
    <Grid
      padding="10px" //add some padding
      //set the template for Grid
      templateAreas={{
        base: `"nav" "main"`, //For mobile devices: display single column
        lg: `"nav nav" "aside main"`, //For large devices: >= 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* Wrap this tag with <Show> to make sure Aside only displays in the large devices */}
      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
