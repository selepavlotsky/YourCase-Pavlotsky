import React from "react";
import Item from "./Item";

const ItemList = ({ listProducts }) => {
  return (
    <div className="productos-container wrapper">
      {listProducts.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
