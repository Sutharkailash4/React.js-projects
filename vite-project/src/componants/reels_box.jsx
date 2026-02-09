import Bottom from "./bottom";
import Aside from "./aside";
import { useState } from "react";

let Reel_box = () => {

    const posts = [
        {
            username: "fit_guy01",
            video: "https://www.pexels.com/download/video/29034848/",
            description: "Morning workout routine 💪...",
            likeCount: 120,
            commentCount: 35,
            isLiked: true,
            isFollow: false
        },
        {
            username: "travel_diaries",
            video: "https://www.pexels.com/download/video/6430763/",
            description: "Travel vlog from Goa 🌊...",
            likeCount: 560,
            commentCount: 89,
            isLiked: false,
            isFollow: true
        },
        {
            username: "js_coder",
            video: "https://www.pexels.com/download/video/27857309/",
            description: "JavaScript tips for beginners 🚀...",
            likeCount: 45,
            commentCount: 10,
            isLiked: false,
            isFollow: false
        },
        {
            username: "street_foodie",
            video: "https://www.pexels.com/download/video/34661916/",
            description: "Delicious street food 🍔...",
            likeCount: 980,
            commentCount: 120,
            isLiked: true,
            isFollow: true
        },
        {
            username: "react_dev",
            video: "https://www.pexels.com/download/video/27857309/",
            description: "React project walkthrough ⚛️...",
            likeCount: 300,
            commentCount: 55,
            isLiked: true,
            isFollow: false
        },
        {
            username: "city_vibes",
            video: "https://www.pexels.com/download/video/36008211/",
            description: "Night city timelapse 🌃...",
            likeCount: 1500,
            commentCount: 210,
            isLiked: false,
            isFollow: true
        },
        {
            username: "dev_motivation",
            video: "https://www.pexels.com/download/video/6430763/",
            description: "Motivation for developers 💡...",
            likeCount: 670,
            commentCount: 98,
            isLiked: true,
            isFollow: true
        },
        {
            username: "funny_reels",
            video: "https://www.pexels.com/download/video/6430763/",
            description: "Funny moments compilation 😂...",
            likeCount: 2200,
            commentCount: 340,
            isLiked: true,
            isFollow: false
        },
        {
            username: "night_coder",
            video: "https://www.pexels.com/download/video/6430763/",
            description: "Coding late night vibes 🌙...",
            likeCount: 410,
            commentCount: 60,
            isLiked: false,
            isFollow: false
        },
        {
            username: "gym_life",
            video: "https://www.pexels.com/download/video/6430763/",
            description: "Gym transformation journey 🏋️...",
            likeCount: 890,
            commentCount: 130,
            isLiked: true,
            isFollow: true
        }
    ];

    const [scale, setscale] = useState("0")
    const [rot, setrot] = useState("-45deg")
    const [op,setOp] = useState("0")

    return (
        <>
            {posts.map(function (val, idx) {
                return (
                    <div onDoubleClick={function () {
                        setscale("1");
                        setrot("0");
                        setOp("1");
                        setTimeout(function(){
                            setOp("0");
                        },800);
                        setTimeout(function () {
                            setscale("0");
                            setrot("-45deg");
                        },1000);
                    }} className="reels_box">
                        <i style={{ transform: `translate(-50% ,-50%) rotate(${rot}) scale(${scale})` , opacity:`${op}`}} id="heart" class="ri-heart-fill"></i>
                        <video loop autoPlay muted src={val.video}></video>
                        <Aside aside={[val]} />
                        <Bottom bot={[val]} />
                    </div>
                )
            })}
        </>
    )
}

export default Reel_box;