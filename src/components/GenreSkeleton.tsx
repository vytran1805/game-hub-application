import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack width="100px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <SkeletonText />
    </HStack>
  );
};

export default GenreSkeleton;
