import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { CACHE_KEY_GENRES } from "./constants";

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
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: { count: genres.length, results: genres },
  });
};
export default useGenres;
