import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ listProducts }) => {
  return (
    <Link to="/productos">
      {" "}
      <div className="productos-container wrapper">
        {listProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </Link>
  );
};

export default ItemList;
