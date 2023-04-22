import { Flex } from "@chakra-ui/react";

type Props = {
    qty: number
}

function Quantity({qty}:Props) {
  return (
    <Flex gap={3}>
      <Flex align="center" bg="red" h={9} p={3}>
        +
      </Flex>
      <Flex align="center" bg="red" h={9} p={3}>
        {qty}
      </Flex>
      <Flex align="center" bg="red" h={9} p={3}>
        -
      </Flex>
    </Flex>
  );
}

export default Quantity;
