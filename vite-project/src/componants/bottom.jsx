import { useState } from "react";

let Bottom = (props) => {

    const [like,setLike] = useState("Follow");

    let Follow = ()=> {
        if(like === "Follow"){
            setLike("Unfollow");    
        } else {
            setLike("Follow");
        }
    }

    return (
        <div className="bottom">
            {
                props.bot.map(function (value, idx) {
                    return (
                        <>
                            <div className="profile_box">
                                <h3 className="profile_name">{value.username}</h3>
                                <button onClick={Follow} className="follow_btn">{like}</button>
                            </div>
                            <div className="para_box">
                                <p> {value.description}</p>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Bottom;