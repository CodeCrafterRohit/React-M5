import React from "react";
import User from "./User";

const Admin = () => {
  //! Employess Data
  let employee1 = {
    eName: "John",
    eAge: 20,
    eSalary: 30000,
    eRole: "Full Stack Developer",
  };
  let employee2 = {
    eName: "Smith",
    eAge: 21,
    eSalary: 20000,
    eRole: "MERN Stack Developer",
  };
  let employee3 = {
    eName: "Bob",
    eAge: 23,
    eSalary: 35000,
    eRole: "Java Full Stack Developer",
  };
  return (
    <div>
      <h1>Admin Component</h1>
      <hr />
      <User employee1={employee1} employee2={employee2} employee3={employee3} />
    </div>
  );
};

export default Admin;
