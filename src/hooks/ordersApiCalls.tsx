/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface Order {
  bookId: [string];
  totalPrice: number;
  qty: number;
}

const token = localStorage.getItem('itemName')
const headers = {Authorization:`Bearer ${token}`}

export async function fetchOrders(): Promise<any> {
  try {
      const response: AxiosResponse<string> = await axios.get('http://localhost:5000/api/v1/order/',{headers});
      return response.data;
    } catch (error) {
      console.error('Error Logging In:', error);
     return "Error Occuried"
    }
}

export async function postOrders(cart:any): Promise<any> {
    try {
        const response: AxiosResponse<string> = await axios.post('http://localhost:5000/api/v1/order/create',{cartItems:cart},{headers});
        return response.data;
      } catch (error) {
        console.error('Error Logging In:', error);
       return "Error Occuried"
      }
  }



export function useFetchOrders(): Order[] {
    const [orders, setOrders] = useState<Order[]>([]);
  console.log(headers);
  
    useEffect(() => {
      async function fetchAndSetBooks() {
        const fetchedBooks = await fetchOrders();
        setOrders(fetchedBooks);
      }
      fetchAndSetBooks();
    }, []);
  
    return orders;
  }