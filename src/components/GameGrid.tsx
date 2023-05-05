import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
// interface that contains properties of each game
interface Game {
  id: number;
  name: string;
}
// this interface represents the shape of the data, contains Gamep[] array
interface FetchGamesResponse {
  count: number; //
  results: Game[];
}
const GameGrid = () => {
  // initialize an empty array for useState with 2 params: games, setGame
  // we also need to pass in Game[] to tell React that this is a Game[] array
  const [games, setGames] = useState<Game[]>([]);
  // empty string for error messages
  const [error, setError] = useState("");
  // call the server by calling axios.get
  // and pass the <FetchGamesResponse> as a generic type argument
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/gadmes")
      .then((res) => setGames(res.data.results)) //get the results
      .catch((err) => setError(err.message)); //catch the errors
  });
  return (
    <>
      {/* Incase of error, display error */}
      {error && <Text color="red">{error}</Text>}

      {/* // return a list of games, map each game with the <li> element */}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
