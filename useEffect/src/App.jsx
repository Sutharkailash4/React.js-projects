import { useState } from "react";
import Card from "./componant/card";
import axios from 'axios';

let App = () => {

  const [allData, setAllData] = useState([]);

  let getData = async () => {
    try {
      let response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response.data);
      setAllData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button className="get" onClick={() => {
        getData();
      }}>Get Data</button>
      <button className="remove" onClick={() => {
        setAllData([]);
      }}>Remove Data</button>
      <div className="card_box">
        {allData.map((value, index) => {
          return (
              <Card data={value} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default App;