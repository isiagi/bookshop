import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { BsStarFill } from "react-icons/bs";
// import img from "../../assets/book.jpg";

import { useFetchBooks } from "../../hooks/data";
import { Link } from "react-router-dom";

type Props = {
  seller: boolean;
  speed: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sellerData?: any;
};

function Multi({ seller, speed, sellerData }: Props) {
  const data = useFetchBooks();
  // console.log('muti', data);

  if (sellerData) {
    data.reverse();
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={speed}
        draggable
        infinite
      >
        {data.map((item) => (
          <Link to={`/details/${item._id}`}>
            {" "}
            <Box h={"420"} mr={4}>
              <Box h={"80"} w={"100%"}>
                <Image
                  src={item.imageUrl}
                  alt="hello"
                  h={"100%"}
                  w={"100%"}
                  objectFit={"cover"}
                />
              </Box>
              <Box>
                <Text>{item.title}</Text>
                <Text>{item.author}</Text>
                <Button
                  display={!seller ? "block" : "none"}
                  variant={"outline"}
                >
                  shs {item.price}
                </Button>
                <Box display={seller ? "block" : "none"}>
                  <Flex align={"center"} gap={2}>
                    <BsStarFill /> <Text>4.5 rating</Text>
                  </Flex>
                  <Text>shs {item.price}</Text>
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
}

export default Multi;
