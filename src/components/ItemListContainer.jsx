import React from "react";
import { customFetch } from "../assets/customFetch";
import { useState, useEffect } from "react";
import { products } from "../assets/products";
import ItemList from "./ItemList";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const id = useParams().id;

  useEffect(() => {
    setLoading(false);
    customFetch(
      products.filter((product) => {
        if (!id) return true;
        return product.categoriaUrl === id;
      })
    ).then((data) => {
      setLoading(true);
      setListProducts(data);
    });
  }, [id]);

  return (
    <>
      <div className="cliploader">{!loading && <ClipLoader />}</div>

      {loading && <ItemList listProducts={listProducts} />}
    </>
  );
};

export default ItemListContainer;
