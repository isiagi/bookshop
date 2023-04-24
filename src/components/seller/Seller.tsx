import { Box, Text } from "@chakra-ui/react";
import Multi from "../multi/Multi";
import { useFetchBooks } from '../../hooks/data';

function Seller() {
  const data =  useFetchBooks()
  console.log(data);
  
  return (
    <Box px={"10"} py={27}>
      <Text>Best Seller</Text>
      <Multi seller={false} speed={3000} sellerData={false}/>
    </Box>
  );
}

export default Seller;
