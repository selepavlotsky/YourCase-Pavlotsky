import React from "react";
import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidgetDetail = () => {
  const { carrito, deleteProduct, getPrice, clearCart } = useContext(contexto);
  return (
    <div className="carrito-compras-detail  wrapper">
      <h1>Tu carrito de compras:</h1>

      {carrito.length !== 0 ? (
        <>
          {carrito.map((item) => (
            <div>
              <div className="container-producto-carrito">
                <img src={item.imagen} alt="foto de funda" />
                <p>{item.producto}</p>
                <p>Cantidad:{item.cantidad} </p>
                <p>Precio : {item.cantidad * item.precio}</p>

                <button onClick={() => deleteProduct(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <p>Precio total : {getPrice()}</p>

          <button onClick={() => clearCart([])}>Vaciar carrito</button>
        </>
      ) : (
        <div>
          <p>No hay productos en tu carrito</p>
          <Link to="/productos">Ir a comprar a productos</Link>
        </div>
      )}
    </div>
  );
};

export default CartWidgetDetail;
