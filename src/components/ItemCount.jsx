import { useState } from "react";
import React from "react";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [contador, setContador] = useState(inicial);

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuirContador = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const confirmar = () => {
    onAdd(contador);
  };

  return (
    <div>
      <div className="container-contador">
        <button onClick={disminuirContador}>-</button>
        <p>{contador}</p>
        <button onClick={aumentarContador}>+</button>
      </div>
      <div className="button-onAdd">
        <button onClick={confirmar}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
