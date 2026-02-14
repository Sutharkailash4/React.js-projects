import React from "react";
import { Link, Outlet } from 'react-router-dom'

let Dashboard = () => {
    return (
        <div>
            <h1>Dashboard page</h1>
            <Link className="c_link" to={"Profile"}>Profile page</Link><br />
            <Link className="c_link" to={"Login"}>Login page</Link>
            <Outlet />
        </div >
    )
}   

export default Dashboard;