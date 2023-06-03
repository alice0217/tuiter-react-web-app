import React from "react";
import {GoVerified} from "react-icons/go";
import TuitStats from "./tuit-stats";

import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import '@fortawesome/fontawesome-free/css/all.min.css';

const TuitItem = (
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
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className={"list-group-item"}>
            <div className={"row"}>
                <div className={"col-auto text-center"}> {/*profile
                 picture*/}
                    <img width={50} height={50} className={"float-end rounded-circle"
                                                           + " shadow-0-5-5-0"}
                         src={`/images/${tuit.image}`} style={{"color": "lightgray", "boxShadow": "0px 5px 5px 0px"}}/>
                </div>
                <div className={"col-10"}> {/*tuit content*/}
                    {/*text*/}
                    <div>
                        <i className="fa-solid fa-xmark float-end"
                                 onClick={() => deleteTuitHandler(tuit._id)} style={{cursor: "pointer"}}></i>
                        <span>{tuit.userName}&nbsp;
                            <GoVerified style={{"color": "#0D6EFD"}}/>&nbsp;{tuit.handle}&nbsp;·&nbsp;{tuit.time}</span><br/>
                        <span>{tuit.tuit}</span>
                    </div><br/>
                    {/*icons and stats*/}
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    )
}

export default TuitItem;