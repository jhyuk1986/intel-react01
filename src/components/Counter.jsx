import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const max = 5;
  const min = -5;

  return (
    <div className="counter-container">
      <h1
        className={`counter-count ${count > 0 ? "counter-positive" : count < 0 ? "counter-negative" : ""}`}
      >
        {count}
      </h1>
      <div className="counter-buttons">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          disabled={count <= min}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          disabled={count >= max}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
