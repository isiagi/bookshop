import { Box } from "@chakra-ui/react";
import Top from "../components/top/Top";
import Hero from "../components/hero/Hero";
import Seller from "../components/seller/Seller";
import TopRating from "../components/seller/TopRating";

function HomePage() {
  return (
    <Box>
      <Top />
      <Hero />
      <Seller />
      <TopRating />
    </Box>
  );
}

export default HomePage;
