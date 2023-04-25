// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

type TData = {
    data: []
}

function Books({data}:TData) {
  return (
    <Box my={10} mx={10}>
        <Flex wrap={"wrap"} gap={4} justify={"center"}>
          {data.map((item) => (
            <Link to={`/details/${item._id}`}>
              <Box w={250}>
                <Box h={330} borderRadius={10}>
                  <Image
                    src={item.imageUrl}
                    alt=""
                    h={"100%"}
                    borderRadius={10}
                    objectFit={"cover"}
                  />
                </Box>
                <Box>
                  <Text>{item.title}</Text>
                  <Text>{item.author}</Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>
  )
}

export default Books