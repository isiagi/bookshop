import React, { createContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorage";

export const AppContext = createContext();

export const Context = (props) => {
  const [cart, setCart] = useLocalStorageState("cartItems", []);

  const addCart = (parcel) => {
    const exist = cart.find((item) => item._id === parcel._id);
    if (!exist) {
      setCart([...cart, { ...parcel }]);
      alert(`${parcel.title} added to cart`);
    } else {
      alert("Item Already In Cart");
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
