import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import ExpandableText from "../components/ExpandableText";

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
        <Box
          padding={"10px"}
          rounded={"50%"}
          _dark={{ backgroundColor: "white", color: "black" }}
          _light={{ backgroundColor: "black", color: "white" }}
          boxSize={"30px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={'20px'}
          cursor={'pointer'}
          onClick={() => history.back()}
        >
          <Icon as={FaArrowLeft} />
        </Box>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <Image
          src={game.background_image}
          width={"500px"}
          mx={"auto"}
          mt={"40px"}
          rounded={"10px"}
        ></Image>
      </Box>
    </>
  );
};

export default GameDetailPage;
