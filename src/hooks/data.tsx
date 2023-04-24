import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface Book {
  author: string;
  description: string;
  genre: string[];
  imageUrl: string;
  title: string;
  __v: number;
  _id: string;
  price: number;
}

export async function logIn(email: string, password: string): Promise<string> {
  try {
      const response: AxiosResponse<string> = await axios.post('https://books-api-l2c5.onrender.com/api/v1/auth/login',{email: email, password: password});
      return response.data;
    } catch (error) {
      console.error('Error Logging In:', error);
     return "Error Occuried"
    }
}

export async function signUp(email: string, password: string): Promise<string> {
  try {
      const response: AxiosResponse<string> = await axios.post('https://books-api-l2c5.onrender.com/api/v1/auth/signup',{email: email, password: password});
      return response.data;
    } catch (error) {
      console.error('Error Logging In:', error);
     return "Error Occuried"
    }
}

async function fetchBooks(): Promise<Book[]> {
    try {
        const response: AxiosResponse<Book[]> = await axios.get('https://books-api-l2c5.onrender.com/api/v1/book/');
        return response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
        return [];
      }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchBookById(id:any): Promise<Book[]> {
    try {
        const response: AxiosResponse<Book[]> = await axios.get(`https://books-api-l2c5.onrender.com/api/v1/book/${id}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
        return [];
      }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useFetchBookById(id:any): Book[] {
    const [books, setBooks] = useState<Book[]>([]);
  
    useEffect(() => {
      async function fetchAndSetBooks() {
        const fetchedBooks = await fetchBookById(id);
        setBooks(fetchedBooks);
      }
      fetchAndSetBooks();
    }, [id]);
  
    return books;
  }

export function useFetchBooks(): Book[] {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchAndSetBooks() {
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
    }
    fetchAndSetBooks();
  }, []);

  return books;
}
