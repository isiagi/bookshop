// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

import { FaRegUser } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { TbPaperBag } from "react-icons/tb";
import {BiLogOutCircle} from 'react-icons/bi'

import { signUp, logIn } from "../../hooks/booksApiCalls";
import { Link } from "react-router-dom";
import TokenChecker from "../../utils/TokenChecker";

function MenuComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [word, setWord] = useState({});
  const [isLogged, setIsLogged] = useState(false)

  const tokenChecker = TokenChecker({key: 'itemName'})

  const nameRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const emailRef = React.useRef(null);

  const handleMenuItemClickSign = () => {
    setWord({ head: "Create An Account", label: "Register" });
    onOpen();
  };

  const handleMenuItemClickLog = () => {
    setWord({ head: "LogIn To Your Account", label: "LogIn" });
    onOpen();
  };

  const handleSign = async () => {
    let token;
    if (word.label === "Register") {
      token = await signUp(nameRef.current.value, emailRef.current.value);
      console.log(token);
      onClose()
    } else {
      const response = await logIn(nameRef.current.value, emailRef.current.value);
      if(response === 'Error Occuried'){
        alert("try signing up")
        onClose()
        return
      }
      token = response
      onClose()
    }

    localStorage.setItem("itemName", token.token);
    setIsLogged(true);
    return token;
  };

  const handleLogOut = () => {
    localStorage.removeItem("itemName");
    setIsLogged(false);
    onClose()
  };
  // console.log(initialRef.current);

  useEffect(() => {
    setIsLogged(tokenChecker);
  }, [tokenChecker]);

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FaRegUser />}
          variant="outline"
          color={'#fff'}
          border={'none'}
          bg={isLogged ? 'green.500': 'red.400'}
        />
        <MenuList>
          {isLogged ? (
            <>
              <MenuItem icon={<BiLogOutCircle />} onClick={() => handleLogOut()}>
                LogOut
              </MenuItem>
              <Link to="/orders">
                <MenuItem icon={<TbPaperBag />}>Your Orders</MenuItem>
              </Link>
              <Link to="/admin">
                <MenuItem icon={<TbPaperBag />}>Admin</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <MenuItem
                icon={<AiOutlineLogin style={{color: 'green',fontSize:'18px'}}/>}
                onClick={() => handleMenuItemClickLog()}
              >
                Login
              </MenuItem>
              <MenuItem
                icon={<FaRegIdCard style={{color: 'green',fontSize:'18px'}}/>}
                onClick={() => handleMenuItemClickSign()}
              >
                Sign Up
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>

      <Modal
        initialFocusRef={nameRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{word.head}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={nameRef} placeholder="FullName" required/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input ref={emailRef} placeholder="Email" required type={'password'}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleSign()}>
              {word.label}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MenuComponent;
