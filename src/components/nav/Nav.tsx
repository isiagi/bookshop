// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { IoBookSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import MenuComponent from "../menu/MenuComponent";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

function Nav() {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState("");

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setInputValue("");
      navigate(`/search/${inputValue}`)
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
    >
      <Link to="/">
        <Flex align="center">
          <IoBookSharp />
          <Text>BookShop</Text>
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
