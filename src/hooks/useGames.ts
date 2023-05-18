import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  // This is an array of obj where each obj has an array of props called platform type platform
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
// this interface represents the shape of the data, contains Gamep[] array
interface FetchGamesResponse {
  count: number; //
  results: Game[];
}
const useGames = () => {
  // initialize an empty array for useState with 2 params: games, setGame
  // we also need to pass in Game[] to tell React that this is a Game[] array
  const [games, setGames] = useState<Game[]>([]);
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
      .get<FetchGamesResponse>("/games", { signal: controller.signal }) //set signal prop to controller.signal
      .then((res) => {
        setGames(res.data.results);
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
  return { games, error, isLoading };
};

export default useGames;
