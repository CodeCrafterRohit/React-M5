import React from "react";
import UserDisplay from "./UserDisplay";

const UserData = () => {
  //! Data
  let userDetails = {
    name: "Smith",
    salary: 25000,
    role: "Admin",
    address: {
      city: "Chennai",
      pincode: 123456,
    },
  };

  //! Function
  let displayMsg = () => {
    let userInput = confirm("Are you really interested to learn React.js?");
    if (userInput === true) {
      alert("Ok Then why you people are not responding?");
    } else {
      alert("Thank you for your reply");
    }
  };

  return (
    <div>
      <h1>User Data Component</h1>
      <hr />
      <UserDisplay userDetails={userDetails} displayMsg={displayMsg} />
    </div>
  );
};

export default UserData;
