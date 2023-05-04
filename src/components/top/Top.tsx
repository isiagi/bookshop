import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Top() {
  return (
    <Flex
      wrap={"wrap"}
      justifyContent={"center"}
      gap={10}
      py={4}
      px={16}
      borderBottom="1px"
      borderColor="gray.100"
    >
      <Link to="/">
        <Text
          color={"gray.700"}
          fontSize={"17px"}
          _hover={{ color: "#4299E1" }}
        >
          Home
        </Text>
      </Link>
      <Link to="/books">
        <Text
          color={"gray.700"}
          fontSize={"17px"}
          _hover={{ color: "#4299E1" }}
        >
          Books
        </Text>
      </Link>
      <Text color={"gray.700"} fontSize={"17px"} _hover={{ color: "#4299E1" }}>
        Text Books
      </Text>
      <Text color={"gray.700"} fontSize={"17px"} _hover={{ color: "#4299E1" }}>
        Magazine
      </Text>
    </Flex>
  );
}

export default Top;
