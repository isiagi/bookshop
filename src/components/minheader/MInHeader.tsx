import { Flex, Text } from "@chakra-ui/react";
import img from "../../assets/book.jpg";

function MInHeader() {
  return (
    <Flex
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${img})`}
      h={"30vh"}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={"cover"}
      align={'center'}
      justify={'center'}
    >
        <Text>Checkout</Text>
    </Flex>
  );
}

export default MInHeader;
