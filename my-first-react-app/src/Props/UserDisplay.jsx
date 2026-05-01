import React from "react";

const UserDisplay = (props) => {
  //   console.log(props.userDetails);

  let {
    name,
    salary,
    role,
    address: { city, pincode },
  } = props.userDetails;

  console.log(props);
  let { displayMsg } = props;
  //   console.log(displayMsg);

  return (
    <div>
      <h1>UserDetails👇</h1>
      <h2>Name:{name}</h2>
      <h2>Role:{role}</h2>
      <h2>Salary:{salary}</h2>
      <h2>City:{city}</h2>
      <h2>Pincode:{pincode}</h2>
      <hr />
      <button onClick={displayMsg} style={{ marginBottom: "50px" }}>
        Click For Response
      </button>
    </div>
  );
};

export default UserDisplay;
