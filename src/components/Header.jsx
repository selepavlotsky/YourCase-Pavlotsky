import React from "react";
import NavBar from "./NavBar";
import LogoImg from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container wrapper">
        <Link to="/">
          <div>
            <img
              className="header-logo"
              src={LogoImg}
              alt="Logo principal de Your Case"
            />
          </div>
        </Link>

        <NavBar />
      </div>
    </header>
  );
};

export default Header;
