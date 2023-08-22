import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import { CACHE_KEY_GAMES } from "./constants";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";

// Create an APIClient instance
const apiClient = new APIClient<Game>("games");
export interface Game {
  id: number;
  name: string;
  background_image: string;
  // This is an array of obj where each obj has an array of props called platform type platform
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number; //whole number
}
const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery], //anytime the value in this obj changes, react query will refetch the games from the backend
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24hr
  });

export default useGames;
