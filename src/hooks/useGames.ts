import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "../gameQueryStore";
import APIClient, { FetchResponse } from "../services/api-client";
import { CACHE_KEY_GAMES } from "./constants";
import { Platform } from "./usePlatforms";

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

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery], //anytime the value in this obj changes, react query will refetch the games from the backend
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"), //24hr
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
