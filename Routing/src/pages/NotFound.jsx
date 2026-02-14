import React from "react";
import { Link } from "react-router-dom";

let Not_Found = () => {
    return (
        <>
            <h1>404 | Page Not Found</h1>
            <button>
                <Link to={"/"}>Go to Home</Link>
            </button>
        </>
    )
}

export default Not_Found;