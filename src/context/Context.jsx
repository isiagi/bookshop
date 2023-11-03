import React, { createContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorage";
import { useToast } from "@chakra-ui/react";

export const AppContext = createContext();

export const Context = (props) => {
  const [cart, setCart] = useLocalStorageState("cartItems", []);
  const toast = useToast();

  const addCart = (parcel) => {
    const exist = cart.find((item) => item._id === parcel._id);
    if (!exist) {
      setCart([...cart, { ...parcel }]);

      toast({
        title: `Book Added To Cart`,
        description: `${parcel.title} Added To Cart`,
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: `Item Already In Cart`,
        description: `${parcel.title} Already In Cart`,
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const onIncrease = (parcel) => {
    const exist = cart.find((item) => item._id === parcel._id);
    console.log(parcel);
    console.log(cart);
    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === parcel._id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      alert("Please");
    }
  };

  const onDecrease = (parcel) => {
    const exist = cart.find((item) => item._id === parcel._id);
    if (exist) {
      if (exist.qty === 1) return;
      setCart(
        cart.map((item) =>
          item._id === parcel._id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  const onRemove = (parcel) => {
    if (window.confirm("Are you sure you want to remove this item")) {
      setCart(cart.filter((item) => item._id !== parcel._id));
    }
  };

  const onClear = () => {
    if (window.confirm("Are you sure you want to clear the cart")) {
      setCart([]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        onRemove,
        addCart,
        onIncrease,
        onDecrease,
        onClear,
        setCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
