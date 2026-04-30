import React from "react";
import Child1 from "./Child1";

const Parent1 = () => {
  //! Property (data)

  return (
    <>
      <h1>Parent1 Component</h1>
      <hr />
      <Child1
        username={"John"}
        age={20}
        role={"Admin"}
        skills={["HTML", "CSS", "JS", "Tailwind CSS"]}
      />
    </>
  );
};

export default Parent1;
