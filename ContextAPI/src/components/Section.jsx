import React from "react";
import { useContext } from "react";
import { theme_color } from "../context/UserContext";

const Section = () => {
    const data = useContext(theme_color);
    return (
        <section style={{ backgroundColor: `${data.color}`}}>
            <h2>Section</h2>
            <button onClick={data.toggle_theme}>Change Theme</button>
        </section>
    )
}

export default Section;