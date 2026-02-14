import React from "react";
import { Link } from "react-router-dom";

let Nav = () => {
    return (
        <nav>
            <h1>Navbar</h1>
            <div className="right_nav">
                <Link className="link" to={"/"}>Home</Link>
                <Link className="link" to={"/Courses"}>Couses</Link>
                <Link className="link" to={"/About"}>About</Link>
                <Link className="link" to={"Contact"}>Contact</Link>
                <Link className="link" to={"/Dashboard"}>Dashboard</Link>
            </div>
        </nav>
    )
}

export default Nav;