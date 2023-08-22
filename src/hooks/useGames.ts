import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";
import { CACHE_KEY_GAMES } from "./constants";
import { Platform } from "./usePlatforms";

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
      apiClient
        .get<FetchResponse<Game>>("/games", {
          //this curly bracket is a configuration obj
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hr
  });

export default useGames;
