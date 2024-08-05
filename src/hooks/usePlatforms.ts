import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../Data/platforms";



const apiClient = new APIClient<Platform>('/platforms/lists/parents');


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length , results: platforms }
  });

export default usePlatforms;
