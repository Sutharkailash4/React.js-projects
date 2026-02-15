import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const theme_color = createContext();

const UserContext = (props) => {

    const [color, setColor] = useState("red");

    let toggle_theme = () => {
        setColor(previous_color => {
            return previous_color === 'red' ? 'blue' : 'red';
        })
    }

    return (
        <theme_color.Provider value={{ color, setColor, toggle_theme }}>
            {props.children}
        </theme_color.Provider>
    )
}

export default UserContext;