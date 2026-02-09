import { useState } from "react";

let Card = (props) => {
    let { data, index, func } = props;

    return (
        <div style={{ transition: "all ease 0.3s" }} className="card" key={index}>
            <div className="img_box">
                <img style={{ transition: "all ease 0.3s" }} src={data.image} alt="" />
            </div>
            <h1>{data.name}</h1>
            <h2>{data.profession}</h2>
            <p>{data.description}</p>
            <button className="remove" onClick={() => {
                func(index);
            }}>Remove</button>
        </div>
    )
}

export default Card;