import { Button, HStack, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  // if (error)
  //   return (
  // <Text
  //   textAlign={"center"}
  //   mt={"10px"}
  //   border={"1px"}
  //   rounded={"10px"}
  //   fontSize={"20px"}
  //   py={"20px"}
  // >
  //   {error.message}
  // </Text>
  // );
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        display={"flex"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        gap={"20px"}
      >
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game: any) => (
              <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <HStack justify={'center'} mb={12} >
          <Button onClick={() => fetchNextPage()} fontSize={"20px"} px={8} py={6}>
            {isFetchingNextPage ?  'Loading...' : hasNextPage ? "Load More" : 'No More Cards'}
            {isFetchingNextPage && <Spinner ml={5}></Spinner>}
          </Button>
        </HStack>
      )}
    </>
  );
};

export default GameGrid;
