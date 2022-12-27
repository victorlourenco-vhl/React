import { useState } from "react";
import { List } from "./List";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
