import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import { db } from "../fireBase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const id = useParams().id;

  useEffect(() => {
    const productosCollection = collection(db, "productos");

    const filtro = !id
      ? query(productosCollection)
      : query(productosCollection, where("categoriaUrl", "==", id));
    const consulta = getDocs(filtro);
    setLoading(false);

    consulta
      .then((snapshot) => {
        const listProducts = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        setLoading(true);
        setListProducts(listProducts);
      })
      .catch((err) => {
        console.log(err);
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
