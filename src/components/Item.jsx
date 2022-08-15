import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <>
      <div className="productos-detalle-container">
        <div>
          <h1 className="product-name">{product.producto}</h1>
          <img
            className="products-image"
            src={product.imagen}
            alt="foto de funda"
          />
          <p className="product-precio">$ {product.precio}</p>
          <Link to={`/detalle/${product.id}`} className="item-button-detail">
            Ver detalle
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
