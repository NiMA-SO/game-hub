import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import  { Genre } from "../hooks/useGames";


interface Props{
  onSelectGenre: (genre:Genre)=> void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre,onSelectGenre} : Props ) => {
  const { data, isLoading , error } = useGenres();
    // const { games} = useGames();


  return (
    <List display={"flex"} flexDirection={"column"} gap={"15px"}>
      {error && <Text>{error}</Text>}
      {data.map((genre) => (
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
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Text  _hover={{color:"lightgray"}} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} key={genre.id}>{genre.name}</Text>
        </ListItem>
      ))}

      {isLoading && (
        <HStack display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"350px"}>
          <Spinner size='xl'/>
        </HStack>)}
    </List>
  );
};

export default GenreList;
