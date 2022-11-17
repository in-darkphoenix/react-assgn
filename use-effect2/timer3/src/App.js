import "./App.css";
import { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div className="App">
      {flag ? <Timer /> : <h1>Timer is Hidden</h1>}
      <div>
        <button onClick={() => setFlag(!flag)}>Toggle</button>
      </div>
    </div>
  );
}

export default App;
