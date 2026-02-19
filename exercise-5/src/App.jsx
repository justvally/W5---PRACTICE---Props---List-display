<Card item={item} />

import data from "./data";
import Card from "./components/card";
import "./index.css";

function App() {
  return (
    <div className="app">
      {data.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
