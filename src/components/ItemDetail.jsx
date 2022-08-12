import React from "react";
import ItemCount from "./ItemCount";
import mediosPago from "../assets/mediosPago.png";

const ItemDetail = ({ product }) => {
  return (
    <div className="detail">
      <img className="image-detail" src={product.imagen} alt="foto de funda" />
      <div className="container-description">
        <div className="name-detail">{product.producto}</div>
        <p className=" price-detail">$ {product.precio}</p>
        <p className="stock-detail">Stock disponible: {product.stock}</p>
        <ItemCount stock={100} inicial={1} onAdd={() => {}} />
        <img
          className="pagos-img"
          src={mediosPago}
          alt="tarjetas y medios de pago"
        />
      </div>
    </div>
  );
};

export default ItemDetail;
