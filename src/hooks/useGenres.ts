import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Genre {
  id: number;
  name: string;
}
interface FetchGenresResponse {
  count: number; //
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  // empty string for error messages
  const [error, setError] = useState("");
  // May 17: declare state for loading skeletons
  const [isLoading, setLoading] = useState(false);
  // call the server by calling axios.get
  // and pass the <FetchGamesResponse> as a generic type argument
  useEffect(() => {
    // create controller obj and set it to an instance of AbortController() handle cancellation
    const controller = new AbortController();
    setLoading(true); //before fetching API
    apiClient //when making GET request, we pass a controller obj as a signal arg
      .get<FetchGenresResponse>("/genres", { signal: controller.signal }) //set signal prop to controller.signal
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false); //after fetching API
      }) //get the results
      .catch((err) => {
        //if error is an instance of CancledError => return
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false); //after displaying errors
      }); //catch the errors
    return () => controller.abort();
  }, []); //the array of dependencies to avoid sending request to the backend
  // after we call the effect hook, we return an object with two properties: games and error
  return { genres, error, isLoading };
};

export default useGenres;
