// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {
  Badge,
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { BsBook } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import MenuComponent from "../menu/MenuComponent";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext, useState } from "react";
import { AppContext } from "../../context/Context";

function Nav() {
  const navigate = useNavigate();

  const { cart } = useContext(AppContext);

  const [inputValue, setInputValue] = useState("");

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setInputValue("");
      navigate(`/search/${inputValue}`);
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <Flex
      justifyContent={"space-between"}
      align="center"
      p="2"
      borderBottom="1px"
      borderColor="gray.100"
      wrap={"wrap"}
      position={"sticky"}
      w={"100%"}
      top={0}
      zIndex={1000}
      bg={"#fff"}
    >
      <Link to="/">
        <Flex align="center" gap={'5px'}>
          <BsBook style={{ color: "#4299E1", fontSize: "1.7rem"}} />
          <Text color='blackAlpha.700' fontSize='1.2rem' fontWeight={'500'}>BookShop</Text>
        </Flex>
      </Link>
      <Box>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch color="gray.300" />}
          />
          <Input
            placeholder="Search Title or Author"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </InputGroup>
      </Box>
      <Box>
        <Flex align="center" gap={2}>
          <Box position={"relative"}>
            {/* <Text position={"absolute"}>1</Text> */}
            <Badge
              ml="1"
              fontSize="0.7em"
              colorScheme="green"
              position={"absolute"}
              right={1}
              top={-1}
              borderRadius={"100%"}
            >
              {cart.length}
            </Badge>
            <Link to="/checkout">
              <BsCart4 style={{ fontSize: "30px", color: "#4299E1" }} />
            </Link>
          </Box>
          <Box>
            <MenuComponent />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Nav;
