import React from "react";

//! Here, props = Default Parameter
//* The props default parameter is used to accept all upcoming data coming from parent component to child component in the form of object.

const Child = (props) => {
  console.log("Props:", props); // Object
//   console.log(props.username); // John
  return (
    <>
      <h1>Child Component</h1>
      <h2>Username:{props.username}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Status: {props.status}</h2>
      <h2>Married: {props.isMarried}</h2>
      <h2>Child: {props.isChild}</h2>
    </>
  );
};

export default Child;
