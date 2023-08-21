import genres from "../data/genres";
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
const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
