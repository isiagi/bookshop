import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useFetchBooks } from "../hooks/data";
import MInHeader from "../components/minheader/MInHeader";
import { Link } from "react-router-dom";

function Book() {
  const data = useFetchBooks();
  console.log(data);

  if (data.length === 0) {
    console.log(data);

    return (
      <Box>
        <Text>Books Collection Empty</Text>
      </Box>
    );
  }

  return (
    <Box>
      <MInHeader name={'Books'} />
      <Box my={10} mx={10}>
        <Flex wrap={"wrap"} gap={4} justify={"center"}>
          {data.map((item) => (
            <Link to={`/details/${item._id}`}>
              <Box w={250}>
                <Box h={330} borderRadius={10}>
                  <Image
                    src={item.imageUrl}
                    alt=""
                    h={"100%"}
                    borderRadius={10}
                    objectFit={"cover"}
                  />
                </Box>
                <Box>
                  <Text>{item.title}</Text>
                  <Text>{item.author}</Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default Book;

// async function FetchData() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchBooks();

//     function fetchBooks() {
//       useFetch().then((data) => {
//         setData(data.data);
//       });
//       console.log(data);
//     }
//   }, [data]);

//   return data
// }
