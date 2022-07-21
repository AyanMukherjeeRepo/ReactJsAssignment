import React, { useState } from "react";

function Counter() {
  const [counter, setcounter] = useState(0);
  const handleCount = (type) => {
    if (type === "increment") {
      setcounter((prev) => prev + 1);
    } else {
      setcounter((prev) => prev - 1);
    }
  };
  return (
    <>
      <button onClick={() => handleCount("increment")}>Increment</button>
      <div>{counter}</div>
      <button onClick={() => handleCount("decrement")}>Decrement</button>
    </>
  );
}

export default Counter;
