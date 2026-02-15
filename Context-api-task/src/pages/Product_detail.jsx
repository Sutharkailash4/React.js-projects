import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserDataContext } from "./context/UserContext";

const Product_detail = () => {
    let param = useParams();
    let data = useContext(UserDataContext);

    let selected_data = {id:'Loading...'};

    if (data.length > 0) {
         selected_data  = data.find((element) => {
            if (element.id == param.id) {
                return element;
            }
        })
        console.log(selected_data);
    }
    return (
        <div className="detail">
            <div className="detail_box">
                <div className="detail_img_box">
                    <img src={selected_data.image} alt="Loading..." />
                </div>
                <div className="detail_title">
                    <h2>{selected_data.title}</h2>
                    <h2>{selected_data.price}</h2>
                    <p>{selected_data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Product_detail;