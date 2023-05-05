// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Box, Flex, Text } from "@chakra-ui/react";
import { useFetchOrders } from "../../hooks/ordersApiCalls";

function Post() {
  const data = useFetchOrders();

  return (
    <>
      {data.isLoading ? (
        <Text textAlign={'center'}>Orders Loading...</Text>
      ) : data.orders.length === 0 ? (
        <Text>Orders Collection Empty</Text>
      ) : (
        <Flex justify={"space-between"} wrap={"wrap"} mx={6}>
          {data.orders.map((item) => (
            <Box mb={2} maxW={500} border={"1px solid gray"} padding={4}>
              <Text>{item.userId.email} Orders</Text>
              {item.books.map((book) => (
                <Flex justify={"space-between"} gap={5}>
                  <Text>{book.bookId.title}</Text>
                  <Text>{book.qty} Copies</Text>
                </Flex>
              ))}
              <Box>
                <Text>TotalPrice: shs {item.totalPrice}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
}

export default Post;
