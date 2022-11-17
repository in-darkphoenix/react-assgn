import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  });

  return (
    <div>
      <h2>TIMER - I</h2>
      <div>
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default Timer;
