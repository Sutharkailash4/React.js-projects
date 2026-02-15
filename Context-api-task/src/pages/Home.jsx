import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const navi = () => {
        navigate('/Product');
    }

    return (
        <div className="home">
        <h1>Welcome To The Website</h1>
        <button onClick={navi}>Explore Products</button>
        </div>
    )
}

export default Home;