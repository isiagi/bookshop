import { Box, Text } from "@chakra-ui/react";
import Multi from "../multi/Multi";

function Seller() {
  return (
    <Box px={"10"} py={27}>
      <Text>Best Seller</Text>
      <Multi seller={false} speed={3000}/>
    </Box>
  );
}

export default Seller;
