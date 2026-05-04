import React, { useState } from "react";

//! State: State is used to store and manage the data for functional based component in react js.

const Counter = () => {
  //   console.log(useState()); // (2) [undefined, ƒ]
  //! state for count variable
  let [count, setCount] = useState(0);
  console.log("Count:", count);
  

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  let resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Counter;
