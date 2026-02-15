import React, { useContext } from "react";
import { UserDataContext } from "./context/UserContext";
import { Link } from "react-router-dom";

const Product = () => {
    const data = useContext(UserDataContext);

    let render = 'Loading...'

    if(data.length > 0){
    render = data.map((element, idx) => {
        return (
            <div key={idx} className="product_box">
                <div className="product_img_box">
                    <img src={element.image} alt="" />
                </div>
                <div className="product_title">
                    <Link to={`/Product/${idx + 1}`}>
                        <h2>{element.title}</h2>
                    </Link>
                </div>
            </div>
        )
    })}
    

    return (
        <div className="product_main_box">
            {render}
        </div>
    )
}

export default Product;