import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

//! With JSX:
// const element = <h1>Hello, World!</h1>;

//! Without JSX:
// const element = React.createElement("h1", null, "Hello world");

// ReactDOM.createRoot(document.getElementById("root")).render(element);
