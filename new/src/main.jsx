import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";

let container = document.querySelector('#root');
let root = ReactDOM.createRoot(container);
root.render(App());