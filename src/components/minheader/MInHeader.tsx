import { Flex, Text } from "@chakra-ui/react";
import img from "../../assets/book.jpg";

type CName = {
  name: string;
};

function MInHeader({ name }: CName) {
  return (
    <Flex
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${img})`}
      h={"30vh"}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={"cover"}
      align={"center"}
      justify={"center"}
      direction={"column"}
    >
      <Text fontSize="3xl" color={"#fff"}>
        Book
      </Text>
      <Text fontSize="3xl" color={"#fff"}>
        {name}
      </Text>
    </Flex>
  );
}

export default MInHeader;
