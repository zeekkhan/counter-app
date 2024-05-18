import { useState } from "react";
import "./App.css";

export default function App() {
  const [counter, setCount] = useState(0);

  function increaseCounter() {
    setCount(counter + 1);
  }
  function decreaseCounter() {
    if (counter > 0) {
      setCount(counter - 1);
    }
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <>
      <div className="container">
        <h1>{counter}</h1>
        <div className="btn">
          <button onClick={increaseCounter}>Increament</button>
          <button onClick={resetCounter}>Reset</button>
          <button onClick={decreaseCounter}>Decreament</button>
        </div>
      </div>
    </>
  );
}
