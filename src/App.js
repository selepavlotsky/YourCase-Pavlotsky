import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidgetDetail from "./components/CartWidgetDetail";
import Contacto from "./components/Contacto";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./components/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartWidgetDetail />} />
            <Route path="/productos/:id" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </CartContext>
      </BrowserRouter>
    </>
  );
}

export default App;
