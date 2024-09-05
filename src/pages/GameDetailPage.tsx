import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

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
      <Box
        backgroundColor={"#121212cf"}
        _light={{ backgroundColor: "#ffffffcf" }}
        m={{ base: "0", sm: "0px", md: 10 }}
        rounded={30}
        padding={{ base: "20px", sm: "20px", md: 5 }}
        position={"relative"}
        height={"80vh"}
      >
        <Box
          padding={"10px"}
          rounded={"50%"}
          _dark={{ backgroundColor: "white", color: "black" }}
          _light={{ backgroundColor: "black", color: "white" }}
          boxSize={"30px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={"20px"}
          cursor={"pointer"}
          // position={'fixed'}
          onClick={() => history.back()}
        >
          <Icon as={FaArrowLeft} />
        </Box>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </Box>
    </>
  );
};

export default GameDetailPage;
