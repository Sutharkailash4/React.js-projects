import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let root = reactDOM.createRoot(document.querySelector('#root')).render(
  <App />
)