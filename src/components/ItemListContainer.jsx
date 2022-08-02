import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (cantidad) => {
    console.log(cantidad);
  };

  return (
    <div className="greeting-container">
      <h1>{greeting}</h1>

      <ItemCount stock={10} inicial={0} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
