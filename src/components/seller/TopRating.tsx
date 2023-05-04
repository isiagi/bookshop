import { Box, Text } from "@chakra-ui/react";
import Multi from "../multi/Multi";

function TopRating() {
  return (
    <Box px={"10"} py={27}>
      <Text fontSize="2xl" py={"3"} color={"gray.700"}>
        Top Rating
      </Text>
      <Multi seller={true} speed={6000} sellerData={true} />
    </Box>
  );
}

export default TopRating;
