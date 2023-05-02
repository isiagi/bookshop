/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Quantity from "../components/quantity/Quantity";
import BreadcrumbComponent from "../components/breadcrumb/Breadcrumb";
import MInHeader from "../components/minheader/MInHeader";
import { useContext } from "react";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { postOrders } from "../hooks/ordersApiCalls";

function Checkout() {
  const { cart, onIncrease, onDecrease,onRemove } = useContext(AppContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((a: any, b: any) => a + b.qty * b.price, 0);

  const HandleCheckout = () => {
    console.log(cart);

    alert("hello");
    navigate("/orders");
    //eslint-disable-next-line react-hooks/rules-of-hooks
    postOrders(cart);
  };

  return (
    <Box>
      <MInHeader name={"Cart CheckOut"} />
      <Box>
        <BreadcrumbComponent />
      </Box>
      <Flex justify="center">
        <Flex gap={10} wrap="wrap">
          <Box>
            {cart.length === 0 ? (
              <Text>No Item Available In Cart</Text>
            ) : (
              cart.map((item: any) => (
                <Flex gap={10} mb={4} border={"1px solid #E2E8F0"} borderRadius={'lg'}>
                  <Box>
                    <Image
                      src={item.imageUrl}
                      alt=""
                      boxSize="200px"
                      objectFit="cover"
                      borderRadius={'lg'}
                    />
                  </Box>
                  <Flex gap={10}pr={5}>
                    <Box>
                      <Text color="#4299E1">{item.title}</Text>
                      <Text color='gray.600'>Author: {item.author}</Text>
                      <Quantity
                        qty={item.qty}
                        onIncrease={() => onIncrease(item)}
                        onDecrease={() => onDecrease(item)}
                      />
                      <Text onClick={() => onRemove(item)} color={'tomato'} cursor={'pointer'}>Delete</Text>
                    </Box>
                    <Box>
                      <Text color={'#68D391'}>Shs {item.qty * item.price}</Text>
                    </Box>
                  </Flex>
                </Flex>
              ))
            )}
          </Box>
          <Box>
            <Text color='gray.600'>Order Summary</Text>
            <Flex gap={10} color='gray.600'>
              <Text>VAT</Text>
              <Text>Shs 0</Text>
            </Flex>
            <Flex gap={10} color='gray.600'>
              <Text>Total price</Text>
              <Text>Shs {totalPrice}</Text>
            </Flex>
            <Box>
              <Button onClick={HandleCheckout} bg={'#68D391'} color="#fff">Checkout</Button>
              <Text>
                <small style={{color:'gray'}}>Login To Checkout</small>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Checkout;
