import React from "react";

//! 1. JSX Expression must have one parent element.
//! It will return single HTML element (node).
//! Tradtionally we are using the <div> element as wrapper.

const Rule1 = () => {
  return (
    <div>
      <h1>Heading-1</h1>
      <h1>Heading-2</h1>
    </div>
  );
};

export default Rule1;
