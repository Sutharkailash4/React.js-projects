import { useState } from "react";
import Card from "./card";

let Input = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [profession, setprofession] = useState("");
    const [description, setDesription] = useState("");

    let local_data = JSON.parse(localStorage.getItem("data")) || [];

    const [allData, setAllData] = useState(local_data);

    let remove = (index) => {
        let newArr = [...allData];
        newArr.splice(index, 1);
        setAllData([...newArr]);
        localStorage.setItem("data", JSON.stringify([...newArr]));
    }

    let submit = (e) => {
        e.preventDefault();
        if (name.trim() === "" || image.trim() === "" || profession.trim() === "" || description.trim() === "") {
            window.alert("PLease Fill All Fields");
        } else {
            let newObj = { name, image, profession, description };
            setAllData([...allData, newObj]);
            localStorage.setItem("data", JSON.stringify([...allData, newObj]));
            setName("");
            setImage("");
            setprofession("");
            setDesription("");
        }
    }

    return (
        <div className="Main_box">
            <form onSubmit={(e) => {
                submit(e);
            }}>
                <input type="text" placeholder="Enter Your Name" value={name} onChange={(text) => {
                    setName(text.target.value);
                }} />
                <input type="text" placeholder="Enter Image URL" value={image} onChange={(text) => {
                    setImage(text.target.value);
                }} />
                <input type="text" placeholder="Enter Your Profession" value={profession} onChange={(text) => {
                    setprofession(text.target.value);
                }} />
                <input type="text" placeholder="Enter Description" value={description} onChange={(text) => {
                    setDesription(text.target.value);
                }} />
                <button className="btn">Create</button>
            </form>
            <div className="card_box">
                {allData.map((value, idx) => {
                    return (
                        <Card data={value} index={idx} arr={allData} func={remove} />
                    )
                })}
            </div>
        </div >
    )
}

export default Input; 