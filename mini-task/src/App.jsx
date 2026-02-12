import React from "react";
import { useState } from "react";
import Task from "./componant/Task.jsx";
let App = () => {
  const [input_value, setInput_value] = useState("");
  const [allData, setAllData] = useState([]);
  let remove_task = (index) => {
    let copy_data = allData;
    copy_data.splice(index, 1);
    setAllData([...copy_data]);
  }
  return (
    <div className="main_box">
      <div className="input_box">
        <h1>Task Manager</h1>
        <input type="text" name="userTask" spellCheck="false" value={input_value} onChange={(text) => {
          setInput_value(text.target.value);
        }} />
        {input_value && <i class="ri-close-line" onClick={() => {
          setInput_value("");
        }}></i>}
        <button disabled={input_value.trim() ? false : true} className="add_btn" onClick={() => {
          if (input_value.trim() === "") {
            window.alert("Please Fill Input");
          } else {
            setAllData([...allData, input_value]);
            setInput_value("");
          }
        }}>Add</button>
      </div>
      <div className="output_box">
        {allData.map((elem, idx) => {
          return (
            <div key={idx}>
              <Task data={elem} index={idx} Delete={remove_task} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default App;