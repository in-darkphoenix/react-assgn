import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  document.title = `Clicked ${count} times`;
  const counterFn = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button className="click" onClick={counterFn}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
