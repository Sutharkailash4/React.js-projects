import React from "react";
import reactDOM from 'react-dom/client';
import './index.css';
import App from "./App.jsx"

let container = document.querySelector('#root');
let root = reactDOM.createRoot(container);
root.render(<App />);