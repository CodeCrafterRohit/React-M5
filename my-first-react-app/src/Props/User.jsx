import React from "react";

const User = (props) => {
  console.log("Props:", props);
  let { employee1, employee2 } = props;
  //   console.log(employee1);
  //   let { eName, eAge, eSalary, eRole } = employee1;
  return (
    <div>
      <h1>User Component</h1>
      <h2>Name:{employee1.eName}</h2>
      <h2>Age:{employee1.eAge}</h2>
      <h2>Salary:{employee1.eSalary}</h2>
      <h2>Role:{employee1.eRole}</h2>
      <hr />

      <h2>Name:{employee2.eName}</h2>
      <h2>Age:{employee2.eAge}</h2>
      <h2>Salary:{employee2.eSalary}</h2>
      <h2>Role:{employee2.eRole}</h2>
      <hr />
      {/* Display the employee 3 details */}
    </div>
  );
};

export default User;
