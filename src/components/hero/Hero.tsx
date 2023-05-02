import { Box, Button, Flex, Text } from "@chakra-ui/react";
import vid from "../../assets/vid.mp4"

function Hero() {
  return (
    <Box
      h={"100vh"}
      position={'relative'}
    >
      <video autoPlay loop muted playsInline poster="../../assets/book.jpg" style={{objectFit: 'cover',height: '100%', width: '100%'}}>
        <source src={vid} type="video/mp4"/>
      </video>
      <Box pl={36} h={'100%'} w={'100%'} position={'absolute'} top={0} bg={'rgba(0, 0, 0, 0.6)'}>
        <Flex align={'center'} h='100%'>
          <Box>
            <Text fontSize='4xl' color={"#fff"}>Welcome To BookShop</Text>
            <Text fontSize='2xl' color={"#fff"}>Broswer over 200 Books</Text>
            <Button>Broswer Collection</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Hero;
