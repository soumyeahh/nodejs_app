import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then(res => res.json())
      .then(setItems);
  }, []);

  return (
    <div>
      <h1>Items</h1>
      {items.map((item, i) => (
        <div key={i}>{item.name}</div>
      ))}
    </div>
  );
}

export default App;