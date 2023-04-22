import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import TopRating from "../components/seller/TopRating";
import Quantity from "../components/quantity/Quantity";
import {data} from '../utils/data'
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";

function Details() {
  const [item, setItem] = useState(Object)

  const { addCart } = useContext(AppContext);

  const id = 9780060935467
  
  useEffect(() => {
    const ite = data.filter((item) => {
      return parseInt(item.isbn) === id;
    });
    console.log(ite[0]);
    setItem(ite[0]);
  }, [id]);

  return (
    <Box>
    <Flex justify={'center'} gap={4} wrap={'wrap'}>
      <Box h={450}>
        <Image src={item.imageUrl} alt="" h={"100%"} />
      </Box>
      <Box maxW={400}>
        <Text>{item.title}</Text>
        <Text>{item.author}</Text>
        <Button variant={'outline'}>Shs {item.price}</Button>
        <Box>
          <Text>
            {item.description}
          </Text>
        </Box>
        <Quantity qty={item.qty}/>
        <Box>
            <Button onClick={() => addCart(item)}>Add To Cart</Button>
        </Box>
      </Box>
    </Flex>
    <TopRating />
    </Box>
  );
}

export default Details;
