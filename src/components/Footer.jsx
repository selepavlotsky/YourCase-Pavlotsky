import React from "react";
import LogoImg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container wrapper">
        <img
          className="header-logo"
          src={LogoImg}
          alt="Logo principal de Your Case"
        />

        <p>Sitio Web: Selene Pavlotsky</p>
      </div>
    </footer>
  );
};

export default Footer;
