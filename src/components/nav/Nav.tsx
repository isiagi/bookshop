import { Box, Flex, IconButton, Input, Text} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";



import { IoBookSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import SignModel from "../signUpModal/SignModel";
import MenuComponent from "../menu/MenuComponent";

function Nav() {
  
  return (
    <Flex
      justifyContent={"space-between"}
      align="center"
      p="2"
      borderBottom="1px"
      borderColor="gray.100"
    >
      <Flex align="center">
        <IoBookSharp />
        <Text>BookShop</Text>
      </Flex>
      <Box>
        <Input placeholder="Basic usage" />
      </Box>
      <Box>
        <Flex align="center" gap={2}>
          <BsCart4 />
          <Box>
            {/* <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FaRegUser />}
                variant="outline"
              />
              <MenuList>
                <MenuItem icon={<AiOutlineLogin />} onClick={() => <SignModel />}>Login</MenuItem>
                <MenuItem icon={<FaRegIdCard />}>Sign Up</MenuItem>
              </MenuList>
            </Menu> */}
            <MenuComponent />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Nav;
