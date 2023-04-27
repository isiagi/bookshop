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
                <Flex gap={10} mb={4} border={"1px solid gray"}>
                  <Box>
                    <Image
                      src={item.imageUrl}
                      alt=""
                      boxSize="200px"
                      objectFit="cover"
                    />
                  </Box>
                  <Flex gap={10}>
                    <Box>
                      <Text>{item.title}</Text>
                      <Text>Author: {item.author}</Text>
                      <Quantity
                        qty={item.qty}
                        onIncrease={() => onIncrease(item)}
                        onDecrease={() => onDecrease(item)}
                      />
                      <Text onClick={() => onRemove(item)}>Delete</Text>
                    </Box>
                    <Box>
                      <Text>Shs {item.qty * item.price}</Text>
                    </Box>
                  </Flex>
                </Flex>
              ))
            )}
          </Box>
          <Box>
            <Text>Order Summary</Text>
            <Flex gap={10}>
              <Text>VAT</Text>
              <Text>Shs 0</Text>
            </Flex>
            <Flex gap={10}>
              <Text>Total price</Text>
              <Text>Shs {totalPrice}</Text>
            </Flex>
            <Box>
              <Button onClick={HandleCheckout}>Checkout</Button>
              <Text>
                <small>Login To Checkout</small>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Checkout;
