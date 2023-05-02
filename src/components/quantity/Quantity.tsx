import { Flex } from "@chakra-ui/react";

type Props = {
  qty: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

function Quantity({ qty, onIncrease, onDecrease }: Props) {
  return (
    <Flex gap={3}>
      <Flex
        align="center"
        color="#fff"
        borderRadius={5}
        bg="#4299E1"
        h={9}
        p={3}
        onClick={onIncrease}
        cursor={"pointer"}
      >
        +
      </Flex>
      <Flex
        align="center"
        color="#fff"
        borderRadius={5}
        bg="#4299E1"
        h={9}
        p={3}
      >
        {qty}
      </Flex>
      <Flex
        align="center"
        color="#fff"
        borderRadius={5}
        bg="#4299E1"
        h={9}
        p={3}
        onClick={onDecrease}
        cursor={"pointer"}
      >
        -
      </Flex>
    </Flex>
  );
}

export default Quantity;
