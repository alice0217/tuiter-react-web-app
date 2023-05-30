import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item d-flex align-items-center">
                <h3 className="mb-0">Who to follow</h3>
            </li>
            {
                // each "who" object is executed the WhoToFollowListItem function
                whoArray.map(who =>
                                 <WhoToFollowListItem
                                     key={who._id}
                                     who={who}/>
                )
            }
        </ul>
    );
};
export default WhoToFollowList;