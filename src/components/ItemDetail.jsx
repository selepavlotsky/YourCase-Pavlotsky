import React from "react";
import ItemCount from "./ItemCount";
import mediosPago from "../assets/mediosPago.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [displaycount, setDisplaycount] = useState(true);

  const onAdd = (contador) => {
    product.cantidad = contador;
    setDisplaycount(false);
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
          <Link className="finalizar-compra" to="/cart">
            Terminar la compra
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
