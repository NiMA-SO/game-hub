import { Heading, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props{
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
  return (
    <Heading
    as={'h1'}
      fontSize={"30px"}
      ml={"40px"}
      mb={"10px"}
      cursor={"pointer"}
      _hover={{ color: "lightgray" }}
    >
      {`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''}  Games` } 
    </Heading>
  );
};

export default GameHeading;
