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
import Orders from "./Orders";
import Searched from "./Searched";
import AdminUser from "./admin/AdminUser";

function index() {
  return (
    <Box>
      <Context>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/books" element={<Book />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/search/:text" element={<Searched />} />
            <Route path="/admin" element={<AdminUser />} />
          </Routes>
        </Router>
      </Context>
    </Box>
  );
}

export default index;
