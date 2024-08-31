import { Heading, Text } from "@chakra-ui/react";
import useGameQueryStore from "../store";


const GameHeading = () => {

  const platform = useGameQueryStore(s => s.gameQuery.platform)
  const genre = useGameQueryStore(s => s.gameQuery.genre)
  const searchText = useGameQueryStore(s => s.gameQuery.searchText)

  return (
    <Heading
      as={"h1"}
      fontSize={"30px"}
      ml={"40px"}
      mb={"10px"}
      cursor={"pointer"}
      _hover={{ color: "lightgray" }}
    >
      {`${platform?.name || ""} ${
        genre?.name || ""
      }  Games`}

      {searchText ? (
        <Text>{`search : ${searchText}`}</Text>
      ) : (
        ""
      )}
    </Heading>
  );
};

export default GameHeading;
