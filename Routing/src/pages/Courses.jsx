import React from "react";
import { Link, Outlet } from "react-router-dom";

let Courses = () => {
    return (
        <div>
            <h1>Courses Page</h1>
            <Link className="c_link" to={"101"}>Course id 1</Link><br />
            <Link className="c_link" to={"102"}>Course id 2</Link><br />
            <Link className="c_link" to={"103"}>Course id 3</Link>
            <Outlet />
        </div>
    )
}

export default Courses;