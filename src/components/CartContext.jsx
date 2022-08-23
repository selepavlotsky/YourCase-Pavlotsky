import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const contexto = createContext();
const { Provider } = contexto;

export const useCarrito = () => {
  return useContext(contexto);
};

const CartContext = (props) => {
  const [carrito, setCarrito] = useState([]);

  const addProduct = (product, cantidad) => {
    const newProduct = {
      ...product,
      cantidad,
    };

    if (isInCart(newProduct.id)) {
      const findProduct = carrito.find(
        (product) => product.id === newProduct.id
      );

      const productIndex = carrito.indexOf(findProduct);
      const auxArray = [...carrito];
      auxArray[productIndex].cantidad += cantidad;
      setCarrito(auxArray);
    } else {
      setCarrito([...carrito, newProduct]);
    }
  };

  const isInCart = (id) => {
    return carrito.some((product) => product.id === id);
  };

  const clearCart = () => {
    setCarrito([]);
  };

  const getQuantity = () => {
    return carrito.reduce((acc, product) => (acc += product.cantidad), 0);
  };

  const getPrice = () => {
    return carrito.reduce(
      (acc, product) => (acc += product.cantidad * product.precio),
      0
    );
  };

  const deleteProduct = (id) => {
    return setCarrito(carrito.filter((product) => product.id !== id));
  };

  const calcularTotal = () => {
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    return total;
  };

  const valorDelContexto = {
    carrito,
    addProduct,
    deleteProduct,
    getQuantity,
    clearCart,
    getPrice,
    isInCart,
  };
  return <Provider value={valorDelContexto}>{props.children}</Provider>;
};

export default CartContext;
