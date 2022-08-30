import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import ItemDetail from "./ItemDetail";
import { db } from "../fireBase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const id = useParams().id;

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", id);
    const consulta = getDoc(docRef);

    consulta
      .then((product) => {
        setLoading(false);
        setProduct({ ...product.data(), id });
      })

      .catch((err) => {
        console.log(err);
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
