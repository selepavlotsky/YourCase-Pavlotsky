import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Home from "./Home";
import ItemDetailContainer from "./ItemDetailContainer";
import CartWidgetDetail from "./CartWidgetDetail";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/detalle" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartWidgetDetail />} />
      </Routes>
    </main>
  );
};

export default Main;
