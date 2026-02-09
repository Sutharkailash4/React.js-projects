import { useState } from "react";

let Aside = (props) => {

    let { aside } = props;

    return (
        <div className="aside">
            {aside.map(function (value, idx) {
                return (
                    <>
                        <div className="like_box">
                            <h4>{value.isLiked ? <i class="ri-heart-line"></i> : <i class="ri-heart-fill"></i>}</h4>
                            <h5>{value.likeCount}</h5>
                        </div>
                        <div className="comment_box">
                            <h4><i class="ri-chat-1-line"></i></h4>
                            <h5>{value.commentCount}</h5>
                        </div>
                        <div className="save_box">
                            <h4><i class="ri-chat-download-fill"></i></h4>
                        </div>
                        <div className="menu_box">
                            <h4><i class="ri-more-2-line"></i></h4>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Aside;