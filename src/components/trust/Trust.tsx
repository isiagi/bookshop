import { Box, Flex, Text } from "@chakra-ui/react";
import { TbTruckDelivery } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineTags } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";

function Trust() {
  return (
    <>
      <Flex
        px={6}
        py={6}
        wrap={"wrap"}
        color={"#4299E1"}
        my={"5px"}
        boxShadow={"lg"}
        gap={2}
        justify={"center"}
      >
        <Flex
          align={"center"}
          gap={"15px"}
          borderLeft={"2px"}
          borderRight={"2px"}
          borderColor="gray.300"
          pl={3}
        >
          <Box>
            <TbTruckDelivery style={{ fontSize: "2rem" }} />
          </Box>
          <Box>
            <Text fontWeight={600}>Quick Delievery</Text>
            <Text maxW={"240px"}>
              Fast and secure shipping options for timely delivery.
            </Text>
          </Box>
        </Flex>
        <Flex
          align={"center"}
          gap={"15px"}
          borderLeft={"0px"}
          borderRight={"2px"}
          borderColor="gray.300"
          pl={3}
        >
          <Box>
            <GiTakeMyMoney style={{ fontSize: "2rem" }} />
          </Box>
          <Box>
            <Text fontWeight={600}>Easy To Pay</Text>
            <Text maxW={"240px"}>
              Multiple payment options and hassle-free checkout.
            </Text>
          </Box>
        </Flex>
        <Flex
          align={"center"}
          gap={"15px"}
          borderLeft={"0px"}
          borderRight={"2px"}
          borderColor="gray.300"
          pl={3}
        >
          <Box>
            <AiOutlineTags style={{ fontSize: "2rem" }} />
          </Box>
          <Box>
            <Text fontWeight={600}>Nice Deals</Text>
            <Text maxW={"240px"}>
              Great discounts on our selection of books.
            </Text>
          </Box>
        </Flex>
        <Flex
          align={"center"}
          gap={"15px"}
          borderLeft={"0px"}
          borderRight={"2px"}
          borderColor="gray.300"
          pl={3}
        >
          <Box>
            <RiSecurePaymentLine style={{ fontSize: "2rem" }} />
          </Box>
          <Box>
            <Text fontWeight={600}>Secure Payments</Text>
            <Text maxW={"240px"}>
              State-of-the-art encryption for secure transactions.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Trust;
