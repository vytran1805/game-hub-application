import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatform = () => useQuery({
  queryKey:
});

export default usePlatform;
