import { useState } from "react";
import Input from "./input";
import Result from "./result";
import axios from "axios";

let Main_box = () => {

    const [showData, setShowData] = useState(null);

    let getData = async (city) => {
        if (city.trim() === "") {
            window.alert("Please Enter City");
        } else {
            try{
            let api_key = "d7523231a7f73afa5a25359a057887d6";
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
            setShowData(response.data)
            } catch {
                window.alert("Please Enter Valid City");
            }
        }
    }

    return (
        <div className="main_box">
            <div className="header">
                <h1><i class="ri-cloudy-2-fill"></i>Weather App</h1>
            </div>
            <Input func={getData} />
            <Result data={showData} />
        </div>
    )
}

export default Main_box;