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
create<GameQueryStore>((set) => ({
  gameQuery: {},
  onSelectedGenre: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })), //update the genreId
  onSelectedPlatform: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })), //update platformId
  onSort: (sort: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: sort } })), //update sortOrder
  onSearchText: (text: string) =>
    set(() => ({ gameQuery: { searchText: text } })), //add the new object
}));
