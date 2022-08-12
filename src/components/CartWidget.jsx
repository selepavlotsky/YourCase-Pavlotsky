import React from "react";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <Link to="/Cart">
      <span className="material-symbols-outlined">shopping_bag</span>;
    </Link>
  );
};

export default CartWidget;
