import usePlatforms from "./usePlatforms";

const usePlatformLookup = (id?: number) => {
  // usePlatformLookup() to get data dynamically and handle error
  const { data: platforms } = usePlatforms();

  return platforms?.results.find((p) => p.id === id);
};

export default usePlatformLookup;
