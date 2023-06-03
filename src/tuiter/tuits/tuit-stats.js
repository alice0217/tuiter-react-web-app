import React from "react";
import {SlBubble} from "react-icons/sl";
import {FiHeart, FiRepeat} from "react-icons/fi";
import {FaHeart} from "react-icons/fa";
import {BsShare} from "react-icons/bs";

import {changeLikeCount} from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "This morning at 12:34 EST Earth time, a convoy of Tesla CyberTrucks drove across the Martian landscape after picking up the Curiosity, Sojourner, Spirit, and Perserance on their 6' beds"
        }
    }
) => {
    const dispatch = useDispatch();
    const changeLikeCountHandler = (tuit) => {
        dispatch(changeLikeCount(tuit));
    }
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
                }} onClick={() => changeLikeCountHandler(tuit)}>{tuit.liked ? <FaHeart style={{color: "#E0245E"}}/> : <FiHeart/>}</button>
                &nbsp;&nbsp;{tuit.likes}
            </div>
            <div className={"col-3"}>
                <BsShare/>
            </div>
        </div>
    );
}

export default TuitStats;