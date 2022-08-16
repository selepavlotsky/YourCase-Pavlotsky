import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ listProducts }) => {
  return (
    <div>
      <div className="categorias-productos wrapper">
        <ul>
          <li>
            <Link className="categories-detail" to="/productos/iphone-13">
              Iphone 13
            </Link>
          </li>
          <li>
            <Link className="categories-detail" to="/productos/iphone-12">
              Iphone 12
            </Link>
          </li>
          <li>
            <Link className="categories-detail" to="/productos/iphone-11">
              Iphone 11
            </Link>
          </li>
          <li>
            <Link className="categories-detail" to="/productos/iphone-xs">
              Iphone Xs
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/productos">
        {" "}
        <div className="productos-container wrapper">
          {listProducts.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ItemList;
