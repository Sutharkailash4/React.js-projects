import React from "react";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Product_detail from "./pages/Product_detail";
import Not_Found from "./pages/Not_Found";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Product/:id" element={<Product_detail />} />
          <Route path="*" element={<Not_Found />} />
        </Routes>

      <Footer />
    </div>
  )
}

export default App;