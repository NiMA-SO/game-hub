import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      minWidth={"200px"}
      width={{ sm: "250px", md: "300px", lg: "200px", xl: "300px" }}
      height={{ sm: "350px", md: "300px", lg: "240px" }}
      borderRadius={10}
      overflow={"hidden"}
      mx={"auto"}
    >
      <Skeleton
        minHeight={"150px"}
        height={{ sm: "300px", md: "200px", lg: "180px", xl: "200px" }}
      />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
