import React from "react";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { customFetch } from "../assets/customFetch";
import { products } from "../assets/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    customFetch(products[1]).then((data) => {
      setLoading(false);
      setProduct(data);
    });
  }, []);

  return (
    <>
      <div className="cliploader">{loading && <ClipLoader />}</div>

      {product && <ItemDetail product={product} />}
    </>
  );
};

export default ItemDetailContainer;
