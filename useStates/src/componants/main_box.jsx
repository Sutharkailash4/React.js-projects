import { useState } from "react";

let Box = () => {

    let [value,setValue] = useState(0);

    let Increament = ()=> {
        setValue(value+1);
    }

    let Dreament = ()=> {
        setValue(value-1);
    }

    let Reset = ()=> {
        setValue(0);
    }

    return (
        <div className="box">
            <h1 className="number">{value}</h1>
            <div className="btn_box">
                <button onClick={Increament} className="increase">Increase</button>
                <button onClick={Dreament} className="decrease">Decrease</button>
                <button onClick={Reset} className="reset">Reset</button>
            </div>
        </div>
    )
}

export default Box;