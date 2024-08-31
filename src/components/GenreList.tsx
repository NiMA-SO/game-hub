import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";


const GenreList = () => {
  const { data, isLoading } = useGenres();
  // const { games} = useGames();
  const selectedGenre = useGameQueryStore(s => s.gameQuery.genre?.id)
  const setGenre = useGameQueryStore(s => s.setGenre)

  return (
    <List display={"flex"} flexDirection={"column"} gap={"15px"}>
      {/* {error && <Text>{error.message}</Text>} */}
      {data?.results.map((genre : any) => (
        <ListItem
          key={genre.id}
          display={"flex"}
          flexDirection="row"
          gap="10px"
          cursor={"pointer"}
          fontSize={"20px"}
        >
          <Image
            width={"45px"}
            height={"40px"}
            rounded={"10px"}
            objectFit={"cover"}
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Text
            _hover={{ color: "lightgray", textDecoration: "underline" }}
            fontWeight={genre.id === selectedGenre ? "bold" : "normal"}
            onClick={() => setGenre(genre)}
            key={genre.id}
          >
            {genre.name}
          </Text>
        </ListItem>
      ))}

      {isLoading && (
        <HStack
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"350px"}
        >
          <Spinner size="xl" />
        </HStack>
      )}
    </List>
  );
};

export default GenreList;
