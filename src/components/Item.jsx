import React from "react";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const Item = ({ product }) => {
  return (
    <>
      <div className="productos-detalle-container">
        <div>
          <div className="product-name">{product.producto}</div>
          <img
            className="products-image"
            src={product.imagen}
            alt="foto de funda"
          />
          <p className="product-precio">$ {product.precio}</p>
          <Link to="/detalle" className="item-button-detail">
            Ver detalle
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
