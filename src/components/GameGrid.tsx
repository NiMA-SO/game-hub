import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Genre, Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Props{
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedSort: string;
}

const GameGrid = ({selectedGenre , selectedPlatform , selectedSort}: Props) => {
  const { data, error ,isLoading } = useGames(selectedGenre,selectedPlatform,selectedSort);
  const skeleton = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid  columns={{ sm:1, md:2, lg:3,xl:5 }} padding={10} display={"flex"} flexWrap={"wrap"} flexDirection={"row"} gap={"20px"}>
        {isLoading && skeleton.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton key={skeleton}/>
          </GameCardContainer>
        ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;