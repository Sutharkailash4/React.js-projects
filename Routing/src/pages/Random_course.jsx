import React from "react";
import { useParams } from "react-router-dom";

let Random = ()=>{

    const value = useParams();
    console.log(value);

    return (
        <h1>{`Course Id is : ${value.id}`}</h1>
    )
}

export default Random;