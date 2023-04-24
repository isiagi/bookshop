import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Top() {
  return (
    <Flex
      wrap={"wrap"}
      justifyContent={"center"}
      gap={20}
      py={4}
      px={16}
      borderBottom="1px"
      borderColor="gray.100"
    >
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/books">
        <Text>Books</Text>
      </Link>
      <Text>Text Books</Text>
      <Text>Magazine</Text>
    </Flex>
  );
}

export default Top;
