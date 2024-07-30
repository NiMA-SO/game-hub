import { Flex, Grid, GridItem, Heading, HStack, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import { Genre, Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}


function App() {
  const [GameQuery , setGameQuery] = useState<GameQuery>({} as GameQuery)


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
          _light={{ bg: "#ffffffbd" }}
          zIndex={"10"}
        >
          <NavBar onSearch={(searchText) => setGameQuery({ ...GameQuery , searchText})} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" pl={"30px"}>
            <Heading
            as={'h2'}
              fontSize={"30px"}
              mb={"20px"}
              cursor={"pointer"}
              _hover={{ color: "lightgray" }}
              onClick={() => setGameQuery({...GameQuery , genre: null})}
            >
              All Games
            </Heading>
            <GenreList
              selectedGenre={GameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...GameQuery , genre})}
            />
          </GridItem>
        </Show>
        <GridItem area="main" pl={"40px"}>
          <GameHeading gameQuery={GameQuery} />
          <Flex gap={"10px"} wrap={"wrap"} ml={"40px"} mt={"20px"}>
            <PlatformSelector
              selectedPlatform={GameQuery.platform}
              onSelectPlatform={(platform) => setGameQuery({ ...GameQuery , platform})}
            />
            <SortSelector
              selectedSort={GameQuery.sortOrder}
              onSelectSort={(sortOrder) => setGameQuery({...GameQuery,sortOrder})}
            />
          </Flex>
          <GameGrid
          gameQuery={GameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
