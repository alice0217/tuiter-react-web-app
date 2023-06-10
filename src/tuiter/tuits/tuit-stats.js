import React from "react";
import {SlBubble} from "react-icons/sl";
import {FiHeart, FiRepeat} from "react-icons/fi";
import {FaHeart} from "react-icons/fa";
import {BsShare} from "react-icons/bs";

import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className={"d-flex align-items-center"}>
            <div className={"col-3"}>
                <SlBubble/>&nbsp;&nbsp;{tuit.replies}
            </div>
            <div className={"col-3"}>
                <FiRepeat/>&nbsp;&nbsp;{tuit.retuits}
            </div>
            {/*user interacts with the tuit*/}
            <div className={"col-3"}>
                {/*JSX style is an object*/}
                <button style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0',
                    cursor: "pointer",
                }} onClick={() => tuit.liked ? dispatch(
                                                 updateTuitThunk({...tuit, liked: false, likes: tuit.likes - 1})) :
                                  dispatch(updateTuitThunk(
                                      {...tuit, liked: true, likes: tuit.likes + 1}))}>{tuit.liked ?
                                                                                        <FaHeart
                                                                                            style={{color: "#E0245E"}}/>
                                                                                                   :
                                                                                        <FiHeart/>}</button>
                &nbsp;&nbsp;{tuit.likes}
            </div>
            <div className={"col-3"}>
                <BsShare/>
            </div>
        </div>
    );
}

export default TuitStats;