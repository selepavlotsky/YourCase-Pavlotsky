import React from "react";
import { Link } from "react-router-dom";
import { contexto } from "./CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { getQuantity } = useContext(contexto);

  return (
    <Link to="/Cart">
      <div className="shop-cart">
        <span className="material-symbols-outlined">shopping_bag</span>
        {getQuantity()};
      </div>
    </Link>
  );
};

export default CartWidget;
