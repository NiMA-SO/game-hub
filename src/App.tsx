import { Flex, Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre, Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedSort, setSelectedSort] = useState<string>("");

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
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
          bg={"#1a202ca8"}
          _light={{ bg: "#ffffffbd" }}
          zIndex={"10"}
        >
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" pl={"30px"}>
            <Text
              fontSize={"30px"}
              mb={"10px"}
              cursor={"pointer"}
              _hover={{ color: "lightgray" }}
              onClick={() => setSelectedGenre(null)}
            >
              All Games
            </Text>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Flex gap={"10px"} pl={"50px"}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <SortSelector
              selectedSort={selectedSort}
              onSelectSort={(sort) => setSelectedSort(sort)}
            />
          </Flex>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
            selectedSort={selectedSort}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
