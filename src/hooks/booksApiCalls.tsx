/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

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

const token = localStorage.getItem("itemName");
const headers = { Authorization: `Bearer ${token}` };

export async function logIn(email: string, password: string): Promise<string> {
  try {
    const response: AxiosResponse<string> = await axios.post(
      "https://books-api-l2c5.onrender.com/api/v1/auth/login",
      { email: email, password: password }
    );

    if (response.status === 400) {
      return "Error Ocurred";
    }

    return response.data;
  } catch (error) {
    console.error("Error Logging In:", error);
    return "Error Occuried";
  }
}

export async function signUp(email: string, password: string): Promise<string> {
  try {
    const response: AxiosResponse<string> = await axios.post(
      "https://books-api-l2c5.onrender.com/api/v1/auth/signup",
      { email: email, password: password }
    );
    return response.data;
  } catch (error) {
    console.error("Error Logging In:", error);
    return "Error Occuried";
  }
}

async function fetchBooks(): Promise<Book[]> {
  try {
    const response: AxiosResponse<Book[]> = await axios.get(
      "https://books-api-l2c5.onrender.com/api/v1/book/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchBookById(id: any): Promise<Book[]> {
  try {
    const response: AxiosResponse<Book[]> = await axios.get(
      `https://books-api-l2c5.onrender.com/api/v1/book/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

async function fetchBookByTitleOrAuthor(book: any): Promise<Book[]> {
  console.log(book);

  try {
    const response: AxiosResponse<Book[]> = await axios.get(
      `https://books-api-l2c5.onrender.com/api/v1/book/query/${book}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

export async function createBook(book: any): Promise<Book[]> {
  try {
    const response: AxiosResponse<Book[]> = await axios.post(
      `https://books-api-l2c5.onrender.com/api/v1/book/create`,
      {
        title: book.title,
        author: book.author,
        description: book.description,
        imageUrl: book.imageUrl,
        genre: book.genre,
        price: book.price,
        qty: 1,
      },
      { headers }
    );
    alert("success");
    return response.data;
  } catch (error) {
    console.error("Error creating book:", error);
    return [];
  }
}

export async function deleteBook(id:any): Promise<any> {
  try {
      const response: AxiosResponse<string> = await axios.delete(`https://books-api-l2c5.onrender.com/api/v1/book/delete/${id}`,{headers});
      return response.data;
    } catch (error) {
      console.error('Error deleting book:', error);
     return "Error Occuried"
    }
}



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useFetchBookById(id: any) {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAndSetBooks() {
      setIsLoading(true)
      const fetchedBooks = await fetchBookById(id);
      setBooks(fetchedBooks);
      setIsLoading(false)
    }
    fetchAndSetBooks();
  }, [id]);

  return {books, isLoading};
}

export function useFetchBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAndSetBooks() {
      setIsLoading(true)
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
      setIsLoading(false)
    }
    fetchAndSetBooks();
  }, []);

  return {books, isLoading};
}

export function useFetchBookByTitleOrAuthor(book: any) {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAndSetBooks() {
      setIsLoading(true)
      const fetchedBooks = await fetchBookByTitleOrAuthor(book);
      setBooks(fetchedBooks);
      setIsLoading(false)
    }
    fetchAndSetBooks();
  }, [book]);

  return {books, isLoading};
}
