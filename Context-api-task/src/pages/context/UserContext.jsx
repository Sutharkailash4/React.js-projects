import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const UserDataContext = createContext();

const UserContext = (props) => {

    const [data, setData] = useState([]);

    const getData = async () => {
        let response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
    }

    useEffect(()=>{
        getData();
    },[]);

    console.log(data);

    return (
            <UserDataContext.Provider value={data}>
                {props.children}
            </UserDataContext.Provider>
    )
}

export default UserContext;