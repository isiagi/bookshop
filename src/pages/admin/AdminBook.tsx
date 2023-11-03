/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { deleteBook, useFetchBooks } from "../../hooks/booksApiCalls";
import { AiOutlineDelete } from "react-icons/ai";

function AdminBook() {
  const data = useFetchBooks();

  const handleBookDelete = async (itemId: string) => {
    await deleteBook(itemId);
    alert("hello");
  };

  return (
    <Flex direction="column" justify={"center"} align="center">
      {data.isLoading ? (
        <Text textAlign={"center"}>Loading...</Text>
      ) : data.books.length === 0 ? (
        <Text>Books Collection Empty</Text>
      ) : (
        data.books?.map((item: any) => (
          <Flex
            gap={10}
            mb={4}
            border={"1px solid gray"}
            w={600}
            borderRadius={5}
          >
            <Box>
              <Image
                src={item.imageUrl}
                alt=""
                boxSize="200px"
                objectFit="cover"
                borderRadius={5}
              />
            </Box>
            <Flex gap={10} align="center">
              <Box>
                <Text fontSize={"21px"}>{item.title}</Text>
                <Text fontSize={"17px"} py={3}>
                  Author: {item.author}
                </Text>

                <Text
                  onClick={() => handleBookDelete(item._id)}
                  fontSize={"26px"}
                  color={"red.500"}
                  cursor="pointer"
                >
                  <AiOutlineDelete />
                </Text>
              </Box>
              <Box>
                <Text fontSize={"21px"}>Shs {item.price}</Text>
              </Box>
            </Flex>
          </Flex>
        ))
      )}
    </Flex>
  );
}

export default AdminBook;
