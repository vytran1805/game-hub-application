import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  // initialize an empty array for useState with 2 params: games, setGame
  // we also need to pass in T[] to tell React that this is a Game[] array
  const [data, setData] = useState<T[]>([]);
  // empty string for error messages
  const [error, setError] = useState("");
  // May 17: declare state for loading skeletons
  const [isLoading, setLoading] = useState(false);
  // call the server by calling axios.get
  // and pass the <FetchGamesResponse> as a generic type argument
  useEffect(
    () => {
      // create controller obj and set it to an instance of AbortController() handle cancellation
      const controller = new AbortController();
      setLoading(true); //before fetching API
      apiClient //when making GET request, we pass a controller obj as a signal arg
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig, //spread the requestConfig to add additional props
        }) //set signal prop to controller.signal
        .then((res) => {
          setData(res.data.results);
          setLoading(false); //after fetching API
        }) //get the results
        .catch((err) => {
          //if error is an instance of CancledError => return
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false); //after displaying errors
        }); //catch the errors
      return () => controller.abort();
    },
    //if deps is true, spread the array of deps, otherwise pass an empty array
    deps ? [...deps] : [] //the array of dependencies to avoid sending request to the backend
  );
  // after we call the effect hook, we return an object with two properties: games and error
  return { data, error, isLoading };
};
export default useData;
