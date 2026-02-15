import React from "react";
import { useContext } from "react";
import { theme_color } from "../context/UserContext";

const Nav = () => {
    const data = useContext(theme_color);
    return (
        <nav style={{backgroundColor:`${data.color}`}}>
            <h2>Navbar</h2>
            <button onClick={data.toggle_theme}>Change Theme</button>
        </nav>
    )
}

export default Nav;