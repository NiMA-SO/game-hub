import { useNavigate, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  const navigate = useNavigate()

  if (isLoading)
    return (
      <HStack justifyContent={"center"} height={"60vh"} alignItems={"center"}>
        <Spinner height={"100px"} width={"100px"} />
      </HStack>
    );
  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid
        m={{ base: "0", sm: "0px", md: 10 }}
        padding={{ base: "20px", sm: "20px", md: 5 }}
        columns={{ base: 1, sm: 1, md: 1,lg: 2 }}
        gap={5}
      >
        <Stack>
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
            onClick={() => navigate('/')}//history.back()}
          >
            <Icon as={FaArrowLeft} />
          </Box>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </Stack>
        <Stack>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
