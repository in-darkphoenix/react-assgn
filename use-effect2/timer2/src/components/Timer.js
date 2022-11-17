import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);
  return (
    <div>
      <h1>Timer II</h1>
      <div>
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default Timer;
