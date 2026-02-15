import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import UserContext from "./context/UserContext.jsx";

let root = ReactDOM.createRoot(document.querySelector('#root')).render(
  <UserContext>
    <App />
  </UserContext>
)