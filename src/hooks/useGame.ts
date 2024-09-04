import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface GameDetail{
  name: string;
  description:string;
  description_raw:string;
  metacritic: number;
  released: string
}

const apiClient = new APIClient<GameDetail>("/games");
const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
};
export default useGame;
