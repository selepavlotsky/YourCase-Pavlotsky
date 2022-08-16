import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { customFetch } from "../assets/customFetch";
import { products } from "../assets/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const id = parseInt(useParams().id);

  useEffect(() => {
    setLoading(true);
    customFetch(products.find((product) => product.id === id)).then((data) => {
      setLoading(false);
      setProduct(data);
    });
  }, [id]);

  return (
    <>
      <div className="cliploader">{loading && <ClipLoader />}</div>

      {product && <ItemDetail product={product} />}
    </>
  );
};

export default ItemDetailContainer;
