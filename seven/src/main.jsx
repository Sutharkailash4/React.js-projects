import React from "react";
import ReactDOM from "react-dom/client";   
import Box from "./App";

let container = document.querySelector('#root');
let root = ReactDOM.createRoot(container);
root.render(<Box />);