import React from "react";
import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { db } from "../fireBase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const CartWidgetDetail = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [compraFinalizadaId, setCompraFinalizadaId] = useState(null);

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleChangeTelefono = (e) => {
    setTelefono(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    console.log(carrito);

    const total = carrito.reduce((acc, current) => acc + current.cantidad, 0);

    if (nombre.trim() === "" || telefono.trim() === "" || email.trim() === "") {
      alert("Tienes que completar el formulario para finalizar la compra");
      return;
    }

    const orden = {
      items: carrito,
      total,
      buyer: {
        name: nombre,
        phone: telefono,
        email,
      },
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    const consulta = addDoc(ordersCollection, orden);

    consulta
      .then((res) => {
        clearCart();

        setCompraFinalizadaId(res.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

          <button onClick={clearCart}>Vaciar carrito</button>

          <div>
            <h1>Para finalizar su compra complete el siguiente formulario</h1>
            <form onSubmit={handleConfirm}>
              <input
                type="text"
                placeholder="Nombre completo"
                onChange={handleChangeNombre}
                value={nombre}
              />
              <input
                type="text"
                placeholder="Teléfono"
                onChange={handleChangeTelefono}
                value={telefono}
              />
              <input
                type="text"
                placeholder="Email"
                onChange={handleChangeEmail}
                value={email}
              />
              <button>Finalizar la compra</button>
            </form>
          </div>
        </>
      ) : compraFinalizadaId ? (
        <div>
          Gracias por comprar! Su numero de orden es: {compraFinalizadaId}
        </div>
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
