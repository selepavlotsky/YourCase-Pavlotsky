import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Productos </a>
        </li>
        <li>
          <a href="#">Envíos</a>
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
