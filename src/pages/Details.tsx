// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import TopRating from "../components/seller/TopRating";
import Quantity from "../components/quantity/Quantity";
import { useContext } from "react";
import { AppContext } from "../context/Context";
import { useParams } from "react-router-dom";
import { useFetchBookById } from "../hooks/booksApiCalls";
import MInHeader from "../components/minheader/MInHeader";

function Details() {
  const { id } = useParams();

  const item = useFetchBookById(id);

  const { addCart, onIncrease, onDecrease } = useContext(AppContext);

  item.price = parseInt(item.price);
  item.qty = parseInt(item.qty);

  return (
    <Box>
      <MInHeader name={`${item.title} Details`} />
      <Flex justify={"center"} gap={4} wrap={"wrap"} pt={7}>
        <Box h={490}>
          <Image
            src={item.imageUrl}
            alt=""
            h={"100%"}
            w={400}
            objectFit={"cover"}
          />
        </Box>
        <Box maxW={400}>
          <Text mb={2}>{item.title}</Text>
          <Text>{item.author}</Text>
          <Button my={5} variant={"outline"}>
            Shs {item.price}
          </Button>
          <Box mb={5}>
            <Text>{item.description}</Text>
          </Box>
          <Quantity
            qty={item.qty}
            onIncrease={() => onIncrease(item)}
            onDecrease={() => onDecrease(item)}
          />
          <Box my={5}>
            <Button onClick={() => addCart(item)}>Add To Cart</Button>
          </Box>
        </Box>
      </Flex>
      <TopRating />
    </Box>
  );
}

export default Details;
