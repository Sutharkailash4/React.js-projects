import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import UserContext from "./pages/context/UserContext.jsx";

let root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <UserContext>
      <App />
    </UserContext>
  </BrowserRouter>
);