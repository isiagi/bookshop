type ID = {
    author: string;
    description: string;
    genre: [];
    imageUrl: string;
    title: string;
    __v: number;
    _id: string;
    price: number; //
  }[]

export async function useFetch():Promise<ID> {
    const response = await fetch('http://localhost:5000/api/v1/book/');
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    return data.data;
  }

// export async function FetchData() {
//     const [data, setData] = useState([]);
  
//     useEffect(() => {
//       fetchBooks();
  
//       function fetchBooks() {
//         useFetch().then((data) => {
//           setData(data.data);
//         });
//         console.log(data);
//       }
//     }, [data]);
  
//     return data
//   }
