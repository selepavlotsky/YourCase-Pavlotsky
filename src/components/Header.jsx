import React from "react";
import NavBar from "./NavBar";
import LogoImg from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-container wrapper">
        <div>
          <img
            className="header-logo"
            src={LogoImg}
            alt="Logo principal de Your Case"
          />
        </div>

        <NavBar />
      </div>
    </header>
  );
};

export default Header;
