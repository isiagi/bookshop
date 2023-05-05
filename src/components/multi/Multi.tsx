import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { BsStarFill } from "react-icons/bs";
// import img from "../../assets/book.jpg";

import { useFetchBooks } from "../../hooks/booksApiCalls";
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
    data.books.reverse();
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
      {data.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={speed}
          draggable
          infinite
        >
          {data.books.map((item) => (
            <Link to={`/details/${item._id}`}>
              {" "}
              <Box
                h={"420"}
                mr={4}
                mb={10}
                _hover={{ transform: "scale(1.02)" }}
              >
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
                  <Text color={"gray.700"} fontSize="18px">
                    {item.title}
                  </Text>
                  <Text color={"gray.600"}>{item.author}</Text>
                  <Button
                    display={!seller ? "block" : "none"}
                    variant={"outline"}
                    color={"#68D391"}
                    borderColor={"#68D391"}
                  >
                    shs {item.price}
                  </Button>
                  <Box display={seller ? "block" : "none"}>
                    <Flex align={"center"} gap={2}>
                      <BsStarFill style={{ color: "#4299E1" }} />{" "}
                      <Text color={"gray.600"}>4.5 rating</Text>
                    </Flex>
                    <Text color={"#68D391"}>shs {item.price}</Text>
                  </Box>
                </Box>
              </Box>
            </Link>
          ))}
        </Carousel>
      )}
    </Box>
  );
}

export default Multi;
