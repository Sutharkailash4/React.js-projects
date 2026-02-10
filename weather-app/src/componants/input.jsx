import { useState } from "react";

let Input = (props) => {
    let { func } = props;

    const [city, setCity] = useState("")

    let reload_handler = (e) => {
        e.preventDefault();
        func(city);
        setCity("");
    }

    return (
        <form onSubmit={(e) => {
            reload_handler(e);
        }}>
            <input type="text" placeholder="Enter City" value={city} onChange={(text)=>{
                setCity(text.target.value);
            }}/>
            <button>Click</button>
        </form>
    )
}

export default Input;