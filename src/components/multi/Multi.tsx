import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { BsStarFill } from "react-icons/bs";
import img from "../../assets/book.jpg";

type Props = {
  seller: boolean;
  speed: number;
};

function Multi({ seller, speed }: Props) {
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
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
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
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <Box bg={"red"} h={"360"} mr={4}>
            <Box h={"60"} w={"100%"}>
              <Image
                src={img}
                alt="hello"
                h={"100%"}
                w={"100%"}
                objectFit={"cover"}
              />
            </Box>
            <Box>
              <Text>The Crown</Text>
              <Text>Geofrey Isiagi</Text>
              <Button display={!seller ? "block" : "none"} variant={"outline"}>
                shs 2000
              </Button>
              <Box display={seller ? "block" : "none"}>
                <Flex align={"center"} gap={2}>
                  <BsStarFill /> <Text>4.5 rating</Text>
                </Flex>
                <Text>shs 2000</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default Multi;
