import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { CACHE_KEY_GENRES } from "./constants";
import { FetchResponse } from "./useData";

// create an APIClient instance
// const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// We don't need this as we defined it in a generic manner
// interface FetchGenresResponse {
//   count: number; //
//   results: Genre[];
// }
// const useGenres = () => ({ data: genres, isLoading: false, error: null });
const useGenres = () => {
  return useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: { count: genres.length, results: genres },
  });
};
export default useGenres;
