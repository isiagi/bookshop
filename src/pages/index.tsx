// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "../context/Context";
import HomePage from "./HomePage";
import Nav from "../components/nav/Nav";
import Details from "./Details";
import Checkout from "./Checkout";
import Book from "./Book";
import Protect from "../utils/Protect";


function index() {
  return (
    <Box>
      <Context>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/checkout" element={<Protect isLoggedIn={true}><Checkout /></Protect>} />
            <Route path="/books" element={<Book />} />
          </Routes>
        </Router>
        </Context>
    </Box>
  );
}

export default index;
