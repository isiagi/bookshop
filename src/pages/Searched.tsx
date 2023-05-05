// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Box, Text } from "@chakra-ui/react";
import { useFetchBookByTitleOrAuthor } from "../hooks/booksApiCalls";
import MInHeader from "../components/minheader/MInHeader";
import Books from "../components/books/Books";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Book() {
  const { text } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = useFetchBookByTitleOrAuthor(text);

  return (
    <Box minH={'100vh'}>
      <MInHeader name={`Searched`} />

      {data.isLoading ? (
        <Text textAlign={'center'}>Loading...</Text>
      ) : data.books.length === 0 ? (
        <Text>Book Not Found</Text>
      ) : (
        <Books data={data.books} />
      )}
    </Box>
  );
}

export default Book;
