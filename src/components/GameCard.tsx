import {
  Card,
  CardBody,
  // Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Game from "../entities/Game";
// import { useState } from "react";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // const [cardHover, setCardHover] = useState(false);

  return (
    <Card
      // onMouseOver={() => setCardHover(true)}
      // onMouseOut={() => setCardHover(false)}
      overflow={'hidden'}
      _light={{ bg: "#e9e7e7" }}
      cursor={"pointer"}
      boxSizing="border-box"
      width={{  base: "250px",sm: "300px", md: "300px", lg: "200px", xl: "300px" }}
      transition={'.2s'}
      _hover={{ transform: "scale(1.05)" }}
    >
      {/* {game.background_image && ( */}
      <Image
        height={{ base: "250px",sm: "300px", md: "200px", lg: "150px", xl: "200px" }}
        src={getCroppedImageUrl(game.background_image)}
      />
      {/* )} */}
      <CardBody>
        <Stack
          display="Flex"
          flexDirection={"row"}
          justifyContent={"space-between"}
          mb={"20pxl"}
        >
          <HStack
            display="Flex"
            flexDirection={"row"}
            alignItems={"center"}
            flexWrap={"wrap"}
            mb={"10px"}
          >
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </HStack>
          <Text
            borderColor={"green"}
            borderWidth={2}
            px={2}
            rounded={"xl"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _dark={{ color: "#6dc849" }}
            _light={{ color: "white", bg: "#6dc849", borderColor: "#6dc849" }}
          >
            {game.metacritic ? game.metacritic : "null"}
          </Text>
        </Stack>
        <Heading
          fontSize="2xl"
          _hover={{ color: "lightgray" }}
          cursor={"pointer"}
        >
          {game.name}
          <Emoji rating={game.rating_top} key={game.rating_top} />
        </Heading>
        {/* {cardHover && (
          <Stack mt={"20px"}>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Text>Release Date :</Text>
              <Text>{game.released}</Text>
            </Stack>
            <Divider _light={{ borderColor: "gray" }} />
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Text>Genres :</Text>
              <Text wordBreak={"break-all"}>
                {game.genres.map((genre) => genre.name + ",")}
              </Text>
            </Stack>
            <Divider _light={{ borderColor: "gray" }} />
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Text>Chart :</Text>
              <Text>{game.released}</Text>
            </Stack>
          </Stack>
        )} */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
