import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex justify={'space-between'} align="center" bg={'gray.300'} py={5} px={'10'}>
      <Flex gap={15}>
        <Text>Home</Text>
        <Text>Books</Text>
        <Text>Text Books</Text>
        <Text>Magazine</Text>
      </Flex>
      <Box>
        <Text>Geofrey Isiagi @2023</Text>
      </Box>
      <Box>
        <Text>All Rights Reserved</Text>
      </Box>
    </Flex>
  );
}

export default Footer;
