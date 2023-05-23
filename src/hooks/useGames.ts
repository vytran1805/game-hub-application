import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }
export interface Game {
  id: number;
  name: string;
  background_image: string;
  // This is an array of obj where each obj has an array of props called platform type platform
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const useGames = (
  selectedGenre: Genre | null, //filter by Genre
  selectedPlatform: Platform | null //filter by Platform
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
