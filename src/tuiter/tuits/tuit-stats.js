import React from "react";
import {SlBubble} from "react-icons/sl";
import {FiHeart, FiRepeat} from "react-icons/fi";
import {FaHeart} from "react-icons/fa";
import {BsShare, BsHandThumbsDownFill, BsHandThumbsDown} from "react-icons/bs";

import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className={"d-flex align-items-center"}>
            <div className={"col-2"}>
                <SlBubble/>&nbsp;&nbsp;{tuit.replies}
            </div>
            <div className={"col-2"}>
                <FiRepeat/>&nbsp;&nbsp;{tuit.retuits}
            </div>
            {/*user interacts with the tuit*/}
            <div className={"col-2"}>
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
            <div className={"col-2"}>
                {/*JSX style is an object*/}
                <button style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0',
                    cursor: "pointer",
                    // if the tuit was already disliked, then clicking thumbs down means remove
                    // a dislike
                }} onClick={() => tuit.disliked ? dispatch(
                    updateTuitThunk({...tuit, disliked: false, dislikes: tuit.dislikes - 1})) : dispatch(updateTuitThunk(
                                      {...tuit, disliked: true, dislikes: tuit.dislikes + 1}))}>{tuit.disliked ?
                                                                                        <BsHandThumbsDownFill style={{color: "#E0245E"}}/> : <BsHandThumbsDown/>}</button>
                &nbsp;&nbsp;{tuit.dislikes}
            </div>
            <div className={"col-2"}>
                <BsShare/>
            </div>
        </div>
    );
}

export default TuitStats;