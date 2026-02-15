import React from "react";
import { theme_color } from "../context/UserContext";
import { useContext } from "react";

const Footer = () => {
    let data = useContext(theme_color);
    console.log(data);
    return (
        <footer style={{ backgroundColor: `${data.color}`}}>
            <h2>Footer</h2>
            <button onClick={data.toggle_theme}>Change Theme</button>
        </footer>
    )
}

export default Footer