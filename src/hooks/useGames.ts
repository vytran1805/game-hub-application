import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
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
  // call the server by calling axios.get
  // and pass the <FetchGamesResponse> as a generic type argument
  useEffect(() => {
    // create controller obj and set it to an instance of AbortController() handle cancellation
    const controller = new AbortController();
    apiClient //when making GET request, we pass a controller obj as a signal arg
      .get<FetchGamesResponse>("/games", { signal: controller.signal }) //set signal prop to controller.signal
      .then((res) => setGames(res.data.results)) //get the results
      .catch((err) => {
        //if error is an instance of CancledError => return
        if (err instanceof CanceledError) return;
        setError(err.message);
      }); //catch the errors
    return () => controller.abort();
  }, []); //the array of dependencies to avoid sending request to the backend
  // after we call the effect hook, we return an object with two properties: games and error
  return { games, error };
};

export default useGames;
