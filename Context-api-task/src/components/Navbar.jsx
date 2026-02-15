import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <h1>Navbar</h1>
            <div className="links_box">
                <Link to="/">Home</Link>
                <Link to="/Product">Products</Link>
                <Link to="/Product/1">Products Details</Link>
            </div>
        </nav>
    )
}

export default Nav;