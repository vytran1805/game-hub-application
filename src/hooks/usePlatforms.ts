import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { CACHE_KEY_PLATFORMS } from "./constants";
import APIClient from "../services/api-client";

// Create an APIClient instance
const apiClient = new APIClient<Platform>("platforms");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: platforms,
  });

export default usePlatforms;
