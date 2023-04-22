import { Box, Button, Flex, Text } from "@chakra-ui/react";
import img from "../../assets/book.jpg";

function Hero() {
  return (
    <Box
    bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${img})`}
      h={"90vh"}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={"cover"}
    >
      <Box pl={36} h={'100%'}>
        <Flex align={'center'} h='100%'>
          <Box>
            <Text fontSize='3xl'>Welcome To BookShop</Text>
            <Text>Broswer over 200 Books</Text>
            <Button>Broswer Collection</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Hero;
