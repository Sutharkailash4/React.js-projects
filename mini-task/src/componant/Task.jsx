import { useState } from "react";

let Task = ({ data, index, Delete }) => {
    const [line, setLine] = useState("")
    const [opa, setOpa] = useState("");
    return (
        <div className="task" style={{opacity:`${opa}`}}>
            <h2>{data}</h2>
            <div className="task_btn">
                <button style={{ textDecoration: `${line}`, opacity: `${opa}` }} className="complete" onClick={() => {
                    setLine('line-through')
                    setOpa('0.7');
                }}>Complete</button>
                <button style={{ textDecoration: `${line}` , opacity :`${opa}` }} className="remove" onClick={() => {
                    Delete(index);
                }}>Remove</button>
            </div>
        </div>
    )
}
export default Task;