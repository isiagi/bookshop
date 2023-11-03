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
import { useToast } from "@chakra-ui/react";

import { FaRegUser } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { TbPaperBag } from "react-icons/tb";
import { BiLogOutCircle } from "react-icons/bi";

import { signUp, logIn } from "../../hooks/booksApiCalls";
import { Link } from "react-router-dom";
import TokenChecker from "../../utils/TokenChecker";

function MenuComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [word, setWord] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const tokenChecker = TokenChecker({ key: "itemName" });

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
      try {
        setLoading(true);
        token = await signUp(nameRef.current.value, emailRef.current.value);
        console.log(token);
        onClose();
        toast({
          title: "SignIn Successful",
          description: "You have been logined in",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      } catch (error) {
        console.log(error);
        return;
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        const response = await logIn(
          nameRef.current.value,
          emailRef.current.value
        );
        setLoading(false);
        toast({
          title: "LogIn Successful",
          description: "You have been logined in",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        if (response === "Error Occuried") {
          toast({
            title: "Login Failed, Try Again",
            description: "Try Signing Up, If You Have No Account",
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
          onClose();
          return;
        }
        token = response;
        onClose();
      } catch (error) {
        console.log(error);
        return;
      }
    }

    localStorage.setItem("itemName", token.token);
    setIsLogged(true);
    return token;
  };

  const handleLogOut = () => {
    localStorage.removeItem("itemName");
    setIsLogged(false);
    onClose();
    toast({
      title: "Logout Successful",
      description: "You have been successfully sign out",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
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
          color={isLogged ? "green.500" : "red.400"}
          border={"none"}
          // bg={isLogged ? 'green.500': 'red.400'}
        />
        <MenuList>
          {isLogged ? (
            <>
              <Link to="/orders">
                <MenuItem icon={<TbPaperBag />}>Your Orders</MenuItem>
              </Link>
              <Link to="/admin">
                <MenuItem icon={<TbPaperBag />}>Admin</MenuItem>
              </Link>
              <MenuItem
                icon={<BiLogOutCircle />}
                onClick={() => handleLogOut()}
              >
                LogOut
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                icon={
                  <AiOutlineLogin
                    style={{ color: "green", fontSize: "18px" }}
                  />
                }
                onClick={() => handleMenuItemClickLog()}
              >
                Login
              </MenuItem>
              <MenuItem
                icon={
                  <FaRegIdCard style={{ color: "green", fontSize: "18px" }} />
                }
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
              <Input ref={nameRef} placeholder="FullName" required />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                ref={emailRef}
                placeholder="Email"
                required
                type={"password"}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={loading}
              loadingText="Submitting"
              colorScheme="teal"
              variant="outline"
              colorScheme="blue"
              mr={3}
              onClick={() => handleSign()}
            >
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
