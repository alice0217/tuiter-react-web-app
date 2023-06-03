import React from "react";
import {GoVerified} from "react-icons/go";

const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-xl-2 col-lg-3">
                    <img className="rounded-circle" height={48} width={48} src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="col-xl-7 col-lg-5">
                    <div className="fw-bold">{who.userName}&nbsp;<GoVerified/></div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-xl-3 col-lg-4 d-flex align-items-center justify-content-center">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;