import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { IoBookSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import MenuComponent from "../menu/MenuComponent";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <Flex
      justifyContent={"space-between"}
      align="center"
      p="2"
      borderBottom="1px"
      borderColor="gray.100"
      wrap={"wrap"}
    >
      <Link to="/">
        <Flex align="center">
          <IoBookSharp />
          <Text>BookShop</Text>
        </Flex>
      </Link>
      <Box>
        <Input placeholder="Search by Full Title or Author" />
      </Box>
      <Box>
        <Flex align="center" gap={2}>
          <Link to="/checkout">
            <BsCart4 style={{ fontSize: "30px" }} />
           
          </Link>
          <Box>
            <MenuComponent />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Nav;
