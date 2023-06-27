import React from "react";
// import whoArray from '../reducers/who.json';
import {useSelector} from "react-redux"; // we moved the data into the reducer instead
// import the hook to retrieve state from reducer
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who); // retrieve data from the store
    return (
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