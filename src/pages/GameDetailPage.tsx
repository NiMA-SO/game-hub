import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, HStack, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <HStack justifyContent={"center"} height={"60vh"} alignItems={"center"}>
        <Spinner height={"100px"} width={"100px"} />
      </HStack>
    );
  if (error || !game) throw error;

  return (
    <>
      <Box padding={5}>
        <Heading>{game.name}</Heading>
        <Text wordBreak={"break-all"}>{game.description_raw}</Text>
      </Box>
    </>
  );
};

export default GameDetailPage;
