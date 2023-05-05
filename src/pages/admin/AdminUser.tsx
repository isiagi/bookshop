// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import MInHeader from "../../components/minheader/MInHeader";
import React, { useState } from "react";
import {
  createBook
} from "../../hooks/booksApiCalls";

import Post from "./Post";
import AdminBook from "./AdminBook";

function AdminUser() {
  const [first, setfirst] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const imageUrlRef = React.useRef(null);
  const genreRef = React.useRef(null);
  const priceRef = React.useRef(null);
  const qtyRef = React.useRef(null);

  const handleCreate = async () => {
    createBook({
      title: titleRef.current.value,
      author: initialRef.current.value,
      description: descriptionRef.current.value,
      imageUrl: imageUrlRef.current.value,
      price: priceRef.current.value,
      genre: [genreRef.current.value],
      qty: qtyRef.current.value,
    }).then(() => {
      console.log("hello");
    });

    onClose();
  };

  return (
    <Box minH={'100vh'}>
      <MInHeader name="Admin" />
      <Flex justify={"space-between"} my={6} mx={6} wrap={"wrap"} gap={4}>
        <Box>
          <Stack spacing={4} direction={"row"} align={"center"}>
            <Button onClick={() => setfirst(true)}>View All Books</Button>
            <Button onClick={() => setfirst(false)}>View Users Orders</Button>
          </Stack>
        </Box>
        <Box>
          <Button onClick={onOpen}>Create New Book</Button>

          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create New Book</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Author Name</FormLabel>
                  <Input ref={initialRef} placeholder="Author Name" required />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Book Title</FormLabel>
                  <Input ref={titleRef} placeholder="Book Title" required />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Book Description</FormLabel>
                  <Input
                    ref={descriptionRef}
                    placeholder="Book Description"
                    required
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Book Cover Image Url</FormLabel>
                  <Input
                    ref={imageUrlRef}
                    placeholder="Book Cover Image Url"
                    required
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Book Genre</FormLabel>
                  <Input ref={genreRef} placeholder="Book Genre" required />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Book Price</FormLabel>
                  <Input ref={priceRef} placeholder="Book Price" required />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Book Qty</FormLabel>
                  <Input ref={qtyRef} placeholder="Book Qty" required />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleCreate}>
                  Create Book
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
      {first ? <AdminBook /> : <Post />}
    </Box>
  );
}

export default AdminUser;
