import React from "react";
import { customFetch } from "../assets/customFetch";
import { useState, useEffect } from "react";
import { products } from "../assets/products";
import ItemList from "./ItemList";
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    customFetch(products).then((data) => {
      setLoading(true);
      setListProducts(data);
    });
  }, []);

  return (
    <>
      <div className="cliploader">{!loading && <ClipLoader />}</div>

      {loading && <ItemList listProducts={listProducts} />}
    </>
  );
};

export default ItemListContainer;
