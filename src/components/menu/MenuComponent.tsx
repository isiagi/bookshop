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

function MenuComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [word, setWord] = useState("")

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleMenuItemClickSign = () => {
      setWord("Create An Account")
    onOpen();
  };

  const handleMenuItemClickLog = () => {
      setWord("LogIn To Your Account")
    onOpen();
  };

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
        </MenuList>
      </Menu>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{word}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MenuComponent;
