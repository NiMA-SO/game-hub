import { Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import useGameQueryStore from "./store";



function App() {

  const setGenre = useGameQueryStore(s => s.setGenre)



  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          sm: `"nav nav" "main"`,
          md: `"nav nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px",
        }}
      >
        <GridItem
          area="nav"
          position={"sticky"}
          top={"0px"}
          _light={{ bg: "#ffffffbd" }}
          zIndex={"10"}
          _dark={{ bg: "#111" }}
        >
          <NavBar/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" pl={"30px"}>
            <Heading
              as={"h2"}
              fontSize={"30px"}
              mb={"20px"}
              cursor={"pointer"}
              _hover={{ color: "lightgray" }}
              onClick={() => setGenre(null)}
            >
              All Games
            </Heading>
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem area="main" pl={{ md: "0", lg: "40px" }}>
          <GameHeading  />
          <Flex
            gap={"10px"}
            wrap={"wrap"}
            mt={"20px"}
            justifyContent={{ base: "center", sm: "center", md: "left" }}
            pl={{ md: "40px" }}
          >
            <PlatformSelector />
            <SortSelector/>
          </Flex>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
