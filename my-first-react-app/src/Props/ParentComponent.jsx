import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <hr />
      <ChildComponent>
        <h1>Hello Child Element</h1>
        <p>I am coming from Child opening and closing tag</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
        </ul>
      </ChildComponent>
    </div>
  );
};

export default ParentComponent;
