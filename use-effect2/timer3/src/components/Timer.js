import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });

  return (
    <div>
      <h2>TIMER - III</h2>
      <div>
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default Timer;
