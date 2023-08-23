import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { CACHE_KEY_GENRES } from "./constants";
import ms from "ms";

// Create an APIClient instance
const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: [CACHE_KEY_GENRES],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24hr
    initialData: genres,
  });
};
export default useGenres;
