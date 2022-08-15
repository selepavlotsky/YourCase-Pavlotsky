import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Home from "./Home";
import ItemDetailContainer from "./ItemDetailContainer";
import CartWidgetDetail from "./CartWidgetDetail";
import Contacto from "./Contacto";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartWidgetDetail />} />
        <Route path="/productos/:id" element={<ItemListContainer />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </main>
  );
};

export default Main;
