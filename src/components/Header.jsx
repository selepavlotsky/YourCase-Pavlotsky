import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="header-container wrapper">
        <div>
          <h1>YourCase</h1>
        </div>

        <NavBar />
      </div>
    </header>
  );
};

export default Header;
