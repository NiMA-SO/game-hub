import { GameQuery } from "../App";
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
  rating_top: number;
  released: string;
  genres: Genre[];
  sort: string;
}

const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder ,
        search: gameQuery.searchText
      },
    },
    [gameQuery]
  );

export default useGames;
