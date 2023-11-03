// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Box, Text } from "@chakra-ui/react";
import { useFetchBooks } from "../hooks/booksApiCalls";
import MInHeader from "../components/minheader/MInHeader";
import Books from "../components/books/Books";
import { useEffect } from "react";

import { Spinner } from "@chakra-ui/react";

function Book() {
  const data = useFetchBooks();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box minH={"100vh"}>
      <MInHeader name={"Books"} />
      {data.isLoading ? (
        <Box>
          <Spinner />
          <Text textAlign={"center"}>Loading...</Text>
        </Box>
      ) : data.books.length === 0 ? (
        <Text>Books Collection Empty</Text>
      ) : (
        <Books data={data.books} isLoading={data.isLoading} />
      )}
    </Box>
  );
}

export default Book;
