import React, { useState } from "react";

const WithoutState = () => {
  let count = 0;
  console.log(useState());

  //! increment function
  let incrementCount = () => {
    ++count;
    console.log("Count:", count);
  };

  //! decrement function
  let decrementCount = () => {
    --count;
    console.log("Count:", count);
  };

  //! reset function
  let resetCount = () => {
    count = 0;
    console.log("Count:", count);
  };

  return (
    <div>
      <h1>Component without state</h1>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment Count</button> &nbsp;
      <button onClick={decrementCount}>Decrement Count</button> &nbsp;
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
};

export default WithoutState;
