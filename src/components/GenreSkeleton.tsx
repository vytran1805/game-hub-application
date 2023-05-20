import {
  Card,
  CardBody,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <HStack width="100px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <SkeletonText />
    </HStack>
  );
};

export default GenreSkeleton;
