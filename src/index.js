import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import DoorUI from "./door";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <DoorUI />
  </React.StrictMode>,
  rootElement
);
