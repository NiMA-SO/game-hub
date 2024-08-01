import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      minWidth={"200px"}
      width={{ base: "250px",sm: "300px", md: "300px", lg: "200px", xl: "300px" }}
      height={{ base: "250px",sm: "350px", md: "250px", lg: "240px" }}
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
