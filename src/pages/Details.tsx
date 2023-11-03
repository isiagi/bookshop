// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Box, Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import TopRating from "../components/seller/TopRating";
// import Quantity from "../components/quantity/Quantity";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/Context";
import { useParams } from "react-router-dom";
import { useFetchBookById } from "../hooks/booksApiCalls";
import MInHeader from "../components/minheader/MInHeader";

function Details() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const item = useFetchBookById(id);

  const { addCart } = useContext(AppContext);

  item.price = parseInt(item.price);
  item.qty = parseInt(item.qty);

  return (
    <Box>
      <MInHeader
        name={item.isLoading ? `Details` : `${item.books.title} Details`}
      />
      {item.isLoading ? (
        <Flex h={490} gap={2} justify={"center"} align={"center"}>
          <Spinner />
          <Text>{`Loading...`}</Text>
        </Flex>
      ) : item.books.length === 0 ? (
        <Box h={490}>
          <Text>Books Collection Empty</Text>
        </Box>
      ) : (
        <Flex justify={"center"} gap={4} wrap={"wrap"} pt={7}>
          <Box h={490}>
            <Image
              src={item.books.imageUrl}
              alt=""
              h={"100%"}
              w={400}
              objectFit={"cover"}
            />
          </Box>
          <Box maxW={400}>
            <Text mb={2} color="#4299E1" fontWeight={600} fontSize={"2xl"}>
              {item.books.title}
            </Text>
            <Text color="gray.500" fontSize={"xl"} fontWeight={100}>
              {item.books.author}
            </Text>
            <Button my={5} variant={"outline"}>
              Shs {item.books.price}
            </Button>
            <Box mb={5} color={"#68D391"} borderColor={"#68D391"}>
              <Text color="gray.600" fontSize="md">
                {item.books.description}
              </Text>
            </Box>
            {/* <Quantity
            qty={item.qty}
            onIncrease={() => onIncrease(item)}
            onDecrease={() => onDecrease(item)}
          /> */}
            <Box my={5}>
              <Button
                onClick={() => addCart(item.books)}
                bg={"#4299E1"}
                color={"#fff"}
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
        </Flex>
      )}
      <TopRating />
    </Box>
  );
}

export default Details;
