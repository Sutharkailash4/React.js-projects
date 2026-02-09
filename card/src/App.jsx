import { useState } from "react";

let App = () => {

  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");

  let reload_handler = (e) => {
    e.preventDefault();
    setData([ ...data, {name, age, email, profession }]);
    setName("");
    setEmail("");
    setAge("");
    setProfession("");
  }

  let name_change = (val) => {
    setName(val.target.value);
  }

  let email_change = (val) => {
    setEmail(val.target.value);
  }


  let age_change = (val) => {
    setAge(val.target.value);
  }

  let professon_change = (val) => {
    setProfession(val.target.value);
  }
  return (
    <>
      <form onSubmit={(e) => {
        reload_handler(e);
      }}>
        <input type="text" placeholder="Enter Name" value={name} required onChange={name_change} />
        <input type="email" placeholder="Enter Email" value={email} required onChange={email_change} />
        <input type="text" placeholder="Enter Age" value={age} required onChange={age_change} />
        <input type="text" placeholder="Enter Profession" value={profession} required onChange={professon_change} />
        <button>Create Card</button>
      </form>

      <div className="main_box">
        {data.map((value, index) => {
          return (
            <div key={index} className="card_box">
              <h1>Name : {value.name}</h1>
              <h2>Email : {value.email}</h2>
              <h2>Age : {value.age}</h2>
              <h2>Profession : {value.profession}</h2>
            </div>
          )
        })}
      </div>

    </>
  )
}

export default App;