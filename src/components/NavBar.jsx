import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>

        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
