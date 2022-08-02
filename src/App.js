import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Header />

      <ItemListContainer greeting="Bienvenido, proximamente vas a poder ver la nueva colección!" />

      <Main />

      <Footer />
    </>
  );
}

export default App;
