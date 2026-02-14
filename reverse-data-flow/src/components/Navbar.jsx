import React from "react";
import axios from 'axios';

let Nav = (props) => {

    let num = 0 ;

    let {func} = props;

    let getData = async () => {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        func(response.data.abilities[num].ability.name);
        num===0?num=1:num=0;
    }
    
    return (
        <div>
            <button onClick={getData}>Get Name</button>
        </div>
    )
}

export default Nav;