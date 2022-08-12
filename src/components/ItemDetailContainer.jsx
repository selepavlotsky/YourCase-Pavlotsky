import React from "react";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { customFetch } from "../assets/customFetch";
import { products } from "../assets/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    customFetch(products.filter((product) => product.id === id)).then(
      (data) => {
        setLoading(false);
        setProduct(data);
      }
    );
  }, []);

  return (
    <>
      <div className="cliploader">{loading && <ClipLoader />}</div>

      {product && <ItemDetail product={product} />}
    </>
  );
};

export default ItemDetailContainer;
