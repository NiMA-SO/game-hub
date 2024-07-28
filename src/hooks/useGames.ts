import SortSelector from "../components/SortSelector";
import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
// export interface Parent_platforms{
//   platform:Platform;
// }

export interface Genre {
  name: string;
  id: number;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  released: string;
  genres: Genre[];
  sort: string;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedSort: string
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedSort ,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedSort]
  );

export default useGames;
