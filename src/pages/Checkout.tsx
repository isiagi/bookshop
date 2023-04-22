import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import img from "../assets/book.jpg";
import Quantity from "../components/quantity/Quantity";
import BreadcrumbComponent from "../components/breadcrumb/Breadcrumb";
import MInHeader from "../components/minheader/MInHeader";

function Checkout() {
  return (
    <Box>
        <MInHeader />
      <Box>
        <BreadcrumbComponent />
      </Box>
      <Flex justify="center">
        <Flex gap={10}>
          <Flex gap={10}>
            <Box>
              <Image src={img} alt="" boxSize="200px" objectFit="cover" />
            </Box>
            <Flex gap={10}>
              <Box>
                <Text>Geofrey Isiagi</Text>
                <Text>Author: Grit</Text>
                <Quantity qty={1}/>
                <Text>Delete</Text>
              </Box>
              <Box>
                <Text>Shs 5000</Text>
              </Box>
            </Flex>
          </Flex>
          <Box>
            <Text>Order Summary</Text>
            <Flex gap={10}>
              <Text>original price</Text>
              <Text>Shs 5000</Text>
            </Flex>
            <Flex gap={10}>
              <Text>original price</Text>
              <Text>Shs 5000</Text>
            </Flex>
            <Button>Checkout</Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Checkout;
