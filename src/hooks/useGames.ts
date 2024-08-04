import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient,{ FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

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

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );
const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game> , Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    // staleTime: 24 * 60 * 60 * 1000, // 24h
    // initialData: { count: games.length, results: games },
  });

export default useGames;
