// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, { useState } from "react";
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
import {TbPaperBag} from 'react-icons/tb'

import { signUp, logIn } from "../../hooks/data";
import { Link } from "react-router-dom";

function MenuComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [word, setWord] = useState({})

  const nameRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const emailRef = React.useRef(null);

  const handleMenuItemClickSign = () => {
      setWord({head:"Create An Account", label: "Register"})
    onOpen();
  };

  const handleMenuItemClickLog = () => {
      setWord({head:"LogIn To Your Account",label:"LogIn"})
    onOpen();
  };

  const handleSign = async () => {
    let token
    if(word.label === 'Register'){

      token = await signUp(nameRef.current.value, emailRef.current.value);
      console.log(token);
    } else {
      token = await logIn(nameRef.current.value, emailRef.current.value);
    }
    
    localStorage.setItem('itemName', token.token)
    return token
  }

  // console.log(initialRef.current);
  

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FaRegUser />}
          variant="outline"
        />
        <MenuList>
          <MenuItem
            icon={<AiOutlineLogin />}
            onClick={() => handleMenuItemClickLog()}
          >
            Login
          </MenuItem>
          <MenuItem icon={<FaRegIdCard />} onClick={() => handleMenuItemClickSign()}>Sign Up</MenuItem>
          <Link to="/orders"><MenuItem icon={<TbPaperBag />}>Your Orders</MenuItem></Link>
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
              <FormLabel>First name</FormLabel>
              <Input ref={nameRef} placeholder="FullName" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input ref={emailRef} placeholder="Email" />
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
