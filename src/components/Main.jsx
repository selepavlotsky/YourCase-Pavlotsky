import React from "react";
import ItemListContainer from "./ItemListContainer";
import home from "../assets/home.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";

const Main = () => {
  return (
    <div>
      <div className="home-container">
        <p>Protegiéndote desde tu primer Iphone</p>
        <div className="home-seccion wrapper">
          <img src={home} />
          <img src={home2} />
          <img src={home3} />
          <img src={home} />
        </div>
      </div>

      <section className="productos wrapper">
        <h1>Productos</h1>
        <ItemListContainer />
      </section>
      <section className="contacto wrapper">
        <h1>Contacto</h1>
        <p></p>
      </section>
    </div>
  );
};

export default Main;
