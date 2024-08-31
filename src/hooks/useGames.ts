import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>("/games");

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
const useGames = () =>{
  const gameQuery = useGameQueryStore(s => s.gameQuery)
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [
      "games",
      `${gameQuery.genre?.id ? `genre : ${gameQuery.genre.id}` : ""} ${
        gameQuery.platform?.id ? `platform : ${gameQuery.platform.id}` : ""
      } ${gameQuery.sortOrder ? `sort : ${gameQuery.sortOrder}` : ""} ${
        gameQuery.searchText ? `search : ${gameQuery.searchText}` : ""
      } `,
    ],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms('24h'),
    // keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    // staleTime: 24 * 60 * 60 * 1000, // 24h
    // initialData: { count: games.length, results: games },
  });

}

export default useGames;
