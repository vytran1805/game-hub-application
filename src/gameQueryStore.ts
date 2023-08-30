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

