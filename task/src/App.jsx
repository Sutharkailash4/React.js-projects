import { useState } from "react";
import Washroom from "./componants/washroom";

let App = () => {

  const [gender, setGender] = useState("Male");

  return (
    <div className="box">
      <h1>Your Gender is = {gender}</h1>
      <button onClick={function () {
        if (gender === "Male") {
          setGender("Female");
        } else if(gender === "Female"){
          setGender("Others");
        }
         else {
          setGender("Male");
        }
      }} className="change">Change Gender</button>
      <Washroom gen={gender} />
      </div>
  )
}

export default App;