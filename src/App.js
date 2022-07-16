import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Link from "./pages/Link";
import Layout from "./components/Layout";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import LayoutJoker from "./components/LayoutJoker";
import WindowComponent from "./pages/Window";
import Joker from "./pages/Joker";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="link" element={<Link />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="/joker" element={<LayoutJoker />}>
            <Route index element={<Joker />} />
            <Route path="window" element={<WindowComponent />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
