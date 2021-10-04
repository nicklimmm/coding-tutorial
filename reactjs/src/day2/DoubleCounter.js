import { useState } from "react";

const DoubleCounter = () => {
  const [count, setCount] = useState(0);
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementByTwo = () => {
    setCount(count + 2);
  };

  const incrementAndToggle = () => {
    setCount(count + 1);
    setOn(!on);
  };

  return (
    <div>
      <h2>
        Count: {count}, Toggle: {on ? "ON" : "OFF"}
      </h2>

      {/* Equivalent Conditional Rendering */}
      {/* {count === 10 ? <h2>You got 10 points!</h2> : null} */}
      {count === 10 && <h2>You got 10 points!</h2>}

      <button onClick={increment}>+1</button>
      <button onClick={incrementByTwo}>+2</button>
      <button onClick={decrement}>-1</button>
      <button onClick={toggle}>toggle</button>
      <button onClick={incrementAndToggle}>increment and toggle</button>
    </div>
  );
};

export default DoubleCounter;
