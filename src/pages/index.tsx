import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "../context/Context";
import HomePage from "./HomePage";
import Nav from "../components/nav/Nav";
import Details from "./Details";
import Checkout from "./Checkout";

function index() {
  return (
    <Box>
      <Context>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details" element={<Details />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
        </Context>
    </Box>
  );
}

export default index;
