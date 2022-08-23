import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "./CartContext";

const ItemDetail = ({ product }) => {
  const [displaycount, setDisplaycount] = useState(true);

  const { addProduct } = useCarrito();

  const onAdd = (contador) => {
    setDisplaycount(false);
    addProduct(product, contador);
  };

  return (
    <div className="detail">
      <img className="image-detail" src={product.imagen} alt="foto de funda" />
      <div className="container-description">
        <div className="name-detail">{product.producto}</div>
        <p className=" price-detail">$ {product.precio}</p>
        <p className="stock-detail">Stock disponible: {product.stock}</p>
        {displaycount ? (
          <ItemCount stock={100} inicial={1} onAdd={onAdd} />
        ) : (
          <>
            <Link className="finalizar-compra" to="/cart">
              Terminar la compra
            </Link>

            <Link to="/productos" className="continuar-compra">
              Seguir comprando
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
