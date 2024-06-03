import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Speed", "Flexibility", "Reusbility", "Performance", "Rich"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {" "}
      <ListGroup
        items={items}
        heading="Top Perks"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
