// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Box, Text } from "@chakra-ui/react";
import { useFetchBookByTitleOrAuthor } from "../hooks/data";
import MInHeader from "../components/minheader/MInHeader";
import Books from "../components/books/Books";
import { useParams } from "react-router-dom";

function Book() {
const {text} = useParams()
    
  const data = useFetchBookByTitleOrAuthor(text);
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
      <MInHeader name={`Searched`} />
      
      <Books data={data} />
    
    </Box>
  );
}

export default Book;
