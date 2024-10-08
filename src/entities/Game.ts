import Genre from "./Genre";
import Platform from "./Platform";




export default interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  released: string;
  genres: Genre[];
  sort: string;
}
