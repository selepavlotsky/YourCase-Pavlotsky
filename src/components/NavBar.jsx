import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="" href="#">
            Home
          </Link>
        </li>
        <li>
          <a href="#">Productos </a>
        </li>

        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
