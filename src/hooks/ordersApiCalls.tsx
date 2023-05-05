/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

// interface Order {
//   bookId: [string];
//   totalPrice: number;
//   qty: number;
// }

const token = localStorage.getItem("itemName");
const headers = { Authorization: `Bearer ${token}` };

export async function fetchOrders(): Promise<any> {
  try {
    const response: AxiosResponse<string> = await axios.get(
      "https://books-api-l2c5.onrender.com/api/v1/order/",
      { headers }
    );
    return response.data?.data;
  } catch (error) {
    console.error("Error Logging In:", error);
    return [];
  }
}

export async function postOrders(cart: any): Promise<any> {
  try {
    const response: AxiosResponse<string> = await axios.post(
      "https://books-api-l2c5.onrender.com/api/v1/order/create",
      { cartItems: cart },
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error Logging In:", error);
    return "Error Occuried";
  }
}

export function useFetchOrders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAndSetBooks() {
      setIsLoading(true);
      const fetchedBooks = await fetchOrders();
      setOrders(fetchedBooks);
      setIsLoading(false);
    }
    fetchAndSetBooks();
  }, []);

  return { orders, isLoading };
}
