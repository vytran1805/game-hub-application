/**
 * This Zustand store holds GameQuery object
 */
import { create } from "zustand";

interface GameQuery {
  genreId?: number | undefined;
  platformId?: number | undefined;
  sortOrder?: string;
  searchText?: string;
}
// Define the shape of the store
interface GameQueryStore {
  gameQuery: GameQuery;
  onSelectedGenre: (id: number) => void;
  onSelectedPlatform: (id: number) => void;
  onSort: (sort: string) => void;
  onSearchText: (text: string) => void;
}

