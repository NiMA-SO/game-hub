import { Box } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";
import VideoPlayer from "./VideoPlayer";


interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <Box pb={10} rounded={30} overflow={'hidden'}>
          <VideoPlayer videoUrl={first.data[480]} poster={first.perview}/>
    </Box>
  ) : null;
};

export default GameTrailer;
