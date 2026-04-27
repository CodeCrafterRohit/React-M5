import React from "react";

//! 5. Attributes should be written in the camelCase convention.

const Rule5 = () => {
  return (
    <div>
      {/* In JavaScript */}
      <button onclick="">Click Me</button>

      {/* In React JS */}
      <button onClick={() => alert("Button is clicked")}>Click Me</button>
    </div>
  );
};

export default Rule5;
