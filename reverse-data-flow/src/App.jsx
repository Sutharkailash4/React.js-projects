import React, { useState } from "react";
import Nav from "./components/Navbar";

let App = () => {
  const [name, setname] = useState("");
  let get = (value) => {
    setname(value);
  }
  return (
    <div>
      <h1>Name is : {name}</h1>
      <Nav func={get}/>
    </div>
  )
}

export default App; 