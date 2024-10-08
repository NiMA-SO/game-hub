import useScreenShot from "../hooks/useScreenShot";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data } = useScreenShot(gameId);

  const screenShots = data?.results;

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 1,md:1,lg:2 }} gap={10}>
        {screenShots?.map((screen) => (
          <Image key={screen.id} src={screen.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
