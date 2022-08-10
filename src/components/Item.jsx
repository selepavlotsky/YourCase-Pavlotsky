import React from "react";

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
          <button>Ver detalle</button>
        </div>
      </div>
    </>
  );
};

export default Item;
