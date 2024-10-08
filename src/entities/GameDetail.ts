import Genre from "./Genre";
import Platform from "./Platform";

export interface GameDetail {
  id:number;
  name: string;
  description: string;
  description_raw: string;
  metacritic: number;
  released: string;
  background_image: string;
  parent_platforms: { platform : Platform }[];
  genres: Genre[];
  publishers: Publishers[];
}

interface Publishers{
  id: number;
  name: string;
}