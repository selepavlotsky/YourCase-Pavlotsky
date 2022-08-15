import React from "react";
import home from "../assets/home.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-container">
      <p>Protegiéndote desde tu primer Iphone</p>
      <div className="home-seccion wrapper">
        <img src={home} />
        <img src={home2} />
        <img src={home3} />
        <img src={home} />
      </div>
    </div>
  );
};

export default Home;
