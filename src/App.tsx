import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Speed", "Flexibility", "Reusbility", "Performance", "Rich"];
  return (
    <div>
      {" "}
      <ListGroup items={items} heading="Top Perks" />
    </div>
  );
}

export default App;
