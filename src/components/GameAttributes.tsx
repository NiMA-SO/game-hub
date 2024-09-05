import { HStack , Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import { GameDetail } from "../entities/GameDetail";

interface Props {
  game: GameDetail;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <HStack
      alignItems={"start"}
      justifyContent={"space-around"}
      flexWrap={"wrap"}
    >
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <Text
          width={"50px"}
          mx={"auto"}
          rounded={"10px"}
          py={"2px"}
          color={"#89bba2"}
          backgroundColor={"#27312a"}
          fontWeight={"bold"}
        >
          {game.metacritic ? game.metacritic : "NULL"}
        </Text>
      </DefinitionItem>
      <DefinitionItem term="Genre">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinitionItem>
    </HStack>
  );
};

export default GameAttributes;
