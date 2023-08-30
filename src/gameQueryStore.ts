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
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setSortOrder: (sort: string) => void;
  setSearchText: (text: string) => void;
}
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })), //update the genreId
  setPlatformId: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })), //update platformId
  setSortOrder: (sort: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: sort } })), //update sortOrder
  setSearchText: (text: string) =>
    set(() => ({ gameQuery: { searchText: text } })), //add the new object
}));

export default useGameQueryStore;
