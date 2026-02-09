import Card from "./componant/card";
import { useState } from "react";

let App = () => {

  const [name, setName] = useState("")
  const [image, setImage] = useState("");
  const [profession, setProfession] = useState("");
  const [description, setDescription] = useState("");

  const [allData, setAllData] = useState([]);

  let delete_box = (index) => {
    let copyData = [...allData];
    copyData.splice(index, 1);
    setAllData(copyData);
  }

  let submitHandler = (dets) => {

    if (name.trim() === "" || image.trim() === "" || profession.trim() === "" || description.trim() === "") {
      dets.preventDefault();
      window.alert("Please Fill All Details");
    } else {
      dets.preventDefault();

      setAllData([...allData, { name, image, profession, description }]);

      setName("");
      setImage("");
      setProfession("");
      setDescription("");
    }
  }

  return (
    <>
      <form onSubmit={(dets) => {
        submitHandler(dets);
      }}>
        <input type="text" placeholder="Enter Your Name" value={name} onChange={(text) => {
          setName(text.target.value);
        }} />
        <input type="text" placeholder="Image URL" value={image} onChange={(text) => {
          setImage(text.target.value);
        }} />
        <input type="text" placeholder="Enter Your Profession" value={profession} onChange={(text) => {
          setProfession(text.target.value);
        }} />
        <input type="text" placeholder="Description" value={description} onChange={(text) => {
          setDescription(text.target.value);
        }} />
        <button>Create Card</button>
      </form>
      <div className="main_box">
        {allData.map(function (value, index) {
          return (
            <>
              <Card idx={index} information={[value]} func={delete_box} />
            </>
          )
        })}
      </div>
    </>
  )
}

export default App;