import { useState } from "react";

function ListGroup() {
  let items = ["Speed", "Flexibility", "Reusbility", "Performance", "Rich"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>React Perks:</h1>
      {items.length === 0 && <p>Nothing here to learn</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
