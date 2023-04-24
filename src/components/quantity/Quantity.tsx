import { Flex } from "@chakra-ui/react";

type Props = {
  qty: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

function Quantity({ qty, onIncrease, onDecrease }: Props) {
  return (
    <Flex gap={3}>
      <Flex align="center" bg="red" h={9} p={3} onClick={onIncrease}>
        +
      </Flex>
      <Flex align="center" bg="red" h={9} p={3}>
        {qty}
      </Flex>
      <Flex align="center" bg="red" h={9} p={3} onClick={onDecrease}>
        -
      </Flex>
    </Flex>
  );
}

export default Quantity;
