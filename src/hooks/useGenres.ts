import useData from "./useData";
export interface Genre {
  id: number;
  name: string;
}
// We don't need this as we defined it in a generic manner
// interface FetchGenresResponse {
//   count: number; //
//   results: Genre[];
// }
const useGenres = () => useData<Genre>("/genres");
export default useGenres;
