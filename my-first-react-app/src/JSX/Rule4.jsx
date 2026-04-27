import React from "react";

//! 4. Use JSX Expression -> {}
//* If we want to access or write the JavaScript code into the JSX we will use JSX expression.
//* And it is represented by -> {}
//! Special Note: In JSX expression only expressions are allowed not the statements.
//* if-else, switch => Ternary Operator
//* for loop => map(), filter(), reduce()

const Rule4 = () => {
  let username = "John";
  const age = 20;

  return (
    <div>
      <h1>JSX Expression</h1>
      <h2>Username:{username}</h2>
      <h2>Age:{age}</h2>
    </div>
  );
};

export default Rule4;
