import React from "react";
import {GoVerified} from "react-icons/go";

const TuitSummaryItem = (
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
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{tuit.userName}&nbsp;
                        <GoVerified/>&nbsp;·&nbsp;
                         {tuit.time}</div>
                    <div className="fw-bolder">{tuit.topic}</div>
                    <div>{tuit.title}</div>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center">
                    <img width={70} height={70} className="float-end rounded-3" src={`/images/${tuit.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default TuitSummaryItem;