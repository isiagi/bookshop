import { Flex, Text } from "@chakra-ui/react"

function Top() {
  return (
    <Flex wrap={'wrap'} justifyContent={'space-between'} gap={1} py={4} px={16} borderBottom="1px"
    borderColor="gray.100">
        <Text>Home</Text>
        <Text>Books</Text>
        <Text>Audiobooks</Text>
        <Text>Audiobooks</Text>
    </Flex>
  )
}

export default Top