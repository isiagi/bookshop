// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Box, Text } from "@chakra-ui/react";
import { useFetchBooks } from "../hooks/booksApiCalls";
import MInHeader from "../components/minheader/MInHeader";
import Books from "../components/books/Books";

function Book() {
  const data = useFetchBooks();
  console.log(data);

  if (data.length === 0) {
    console.log(data);

    return (
      <Box>
        <Text>Books Collection Empty</Text>
      </Box>
    );
  }

  return (
    <Box>
      <MInHeader name={"Books"} />
      <Books data={data} />
    </Box>
  );
}

export default Book;
