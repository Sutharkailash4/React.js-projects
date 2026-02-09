import { useState } from "react";

let Nav = ({logo,nav_bar})=> {


    return (
        <nav>
            <div className="left_nav">
                <h1>{logo}</h1>
            </div>
            <div className="center_nav">
                {nav_bar.map(function(val,idx){
                    return (
                        <h3 key={idx}>{val}</h3>
                    )
                })}
            </div>
            <div className="right_nav">
                <button>
                    Dark
                </button>
            </div>
        </nav>
    )
}

export default Nav;