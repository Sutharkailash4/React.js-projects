import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

let conatiner = document.querySelector('#root');
let root = ReactDOM.createRoot(conatiner);
root.render(App());